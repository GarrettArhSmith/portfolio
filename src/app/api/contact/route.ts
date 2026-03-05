import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const requiredEnv = [
  "RESEND_API_KEY",
  "CONTACT_TO_EMAIL",
  "CONTACT_FROM_EMAIL",
] as const;

function assertEnv() {
  const missing = requiredEnv.filter((key) => !process.env[key]);
  if (missing.length > 0) {
    throw new Error(`Missing env vars: ${missing.join(", ")}`);
  }
}

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  details?: string;
};

export async function POST(req: Request) {
  try {
    assertEnv();
    const payload = (await req.json()) as ContactPayload;
    const name = payload.name?.trim() ?? "";
    const email = payload.email?.trim() ?? "";
    const company = payload.company?.trim() ?? "";
    const details = payload.details?.trim() ?? "";

    if (!email || !details) {
      return Response.json(
        { ok: false, message: "Email and message are required." },
        { status: 400 },
      );
    }

    const subject = `New contact form submission${name ? ` from ${name}` : ""}`;
    const text = [
      `Name: ${name || "N/A"}`,
      `Email: ${email}`,
      `Company: ${company || "N/A"}`,
      "",
      details,
    ].join("\n");

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL as string,
      to: process.env.CONTACT_TO_EMAIL as string,
      subject,
      reply_to: email,
      text,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space: pre-wrap; font-family: inherit;">${details}</pre>
      `,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json(
      { ok: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

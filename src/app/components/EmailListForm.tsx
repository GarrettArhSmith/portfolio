"use client";
import React, { useState } from "react";
import Btn from "./Btn/Btn";

type Props = {};

export default function EmailListForm({}: Props) {
  const [input, setInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    console.log(e);
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILER_LITE_API_TOKEN}`,
      },
      body: JSON.stringify({ title: "React Hooks POST Request Example" }),
    };
    console.log(process.env.NEXT_PUBLIC_MAILER_LITE_API_TOKEN);
    fetch(
      `https://connect.mailerlite.com/api/subscribers?email=${input}`,
      requestOptions
    )
      .then((res) => res.json())
      .then((json) => setSubscribed(true));
  };

  const handleChange = (e: React.FormEvent) => {
    const { value } = e.target as HTMLTextAreaElement;
    setInput((prev) => value);
  };

  return (
    <form className="flex gap-2">
      <input
        type="email"
        placeholder="Join the email list"
        className="rounded-xl px-4"
        name="emailListInput"
        onChange={handleChange}
      />
      <Btn
        variant="contained"
        className="bg-blue-700 hover:bg-blue-900 disabled:hover:bg-blue-700 hover:text-white px-4 py-2"
        onClick={handleSubmit}
        disabled={subscribed}
      >
        {subscribed ? "You're in!" : "Join"}
      </Btn>
    </form>
  );
}

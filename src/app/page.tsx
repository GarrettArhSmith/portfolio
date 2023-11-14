import s from "./page.module.css";

type Props = {};

export default function Home({}: Props) {
  return (
    <main>
      <h1 className={s.logo}>Garrett Smith</h1>
      <h3 className={s.subtitle}>Software Engineer</h3>
      <p className={s.blurb}>
        This portfolio is a work in progress. You can see my old portfolio{" "}
        <a href="https://garrettsmith.vercel.app/" target="_blank">
          here
        </a>
        .
      </p>
    </main>
  );
}

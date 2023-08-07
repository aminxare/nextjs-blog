import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.jpg"
          alt="The Old Guitarist"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m John Doe</h1>
      <p>
        I blog about web development - especially frontend frameworks like
        Reacjs.
      </p>
    </section>
  );
}

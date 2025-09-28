import React from "react";
import styles from "./about.module.css";

export default function About() {
  return (
    <section
      id="aboutme"
      data-bg="light"
      className={`${styles.about} flex flex-col h-screen`}
    >
      <div className="self-end z-10 2xl:w-1/2 max-2xl:w-1/2 max-lg:w-3/5 lg:w-3/5 px-6 text-right max-sm:w-full max-sm:self-center">
        <h1
          className={`${styles.header} 2xl:text-6xl max-2xl:text-5xl max-lg:text-4xl lg:text-4xl max-lg:ml-5 lg:ml-5 max-md:m-5 md:m-5 font-bold text-start max-sm:text-center`}
        >
          Who I am!
        </h1>
        <p
          className={`${styles.pp} text-xl max-lg:text-base lg:text-base leading-relaxed max-2xl:text-lg 2xl:mt-10 lg:mt-3 max-lg:mt-3 max-md:text-base md:text-base 2xl:text-2xl max-sm:text-center`}
        >
          {"I'm Hashem Ahmed"}, and I am a Jordanian software engineering student at{" "}
          <span className={styles.goldText}>PUST</span>. This is my first
          semester at the university trip, and I am excited to begin this new
          chapter in my life. I look forward to building new friendships,
          developing my skills, and gaining valuable experiences as I integrate
          into this community.
          <br />I began my journey in information technology in{" "}
          <span className={styles.goldText}>2023</span> through the BTEC
          educational system, which gave me the opportunity to explore the
          field. During that time, I discovered my interest in software design
          and development, which motivated me to deepen my knowledge and build
          skills as a UI/UX designer. Now, as I move forward, I am ready to take
          on a new level of challenges, work hard to enhance my abilities, and
          continue learning in order to become a <br />
          <span className={styles.goldText}>successful software engineer</span>.
        </p>
      </div>
    </section>
  );
}

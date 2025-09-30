"use client";
import React from "react";
import styles from "./MySkills.module.css";
import { FaReact, FaCode } from "react-icons/fa6";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlinePython } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { TbBrandAdobePhotoshop } from "react-icons/tb";
import { BiError } from "react-icons/bi";
import { GiArchiveResearch } from "react-icons/gi";
import Slider from "react-slick";

const data = [
  {
    title: "UI|UX Design",
    description:
      "I have some experience in UI/UX software design that lets me create friendly and attractive designs while taking care of the UI/UX rules.",
    icon: MdOutlineDesignServices,
  },
  {
    title: "Frontend-Development",
    description:
      "To apply what I have design or any design I have the experiance to integrate HTML, CSS and JS to converting the project from design to an effective website.",
    icon: FaCode,
  },
  {
    title: "React Development",
    description:
      "To improve my skills in web development, I started learning React, and this portfolio is my first project using it.",
    icon: FaReact,
  },
  {
    title: "Python",
    description:
      "Python is the first programming language that I have learned, I know how to develop basic systems such as management systems and others. I have started with the Python Power-Up course.",
    icon: AiOutlinePython,
  },
  {
    title: "Photoshop and photo and posters design",
    description:
      "I have basic skills and experience with Adobe Photoshop, which allow me to make photo edits and adjustments that can be used effectively in web design.",
    icon: TbBrandAdobePhotoshop,
  },
  {
    title: "problem solving",
    description:
      "I have a basic understanding of how to analyze my code, identify problems, and work toward finding the best solutions. While I am still developing this skill, I recognize the importance of problem-solving in software engineering and will continue working to improve my ability to think critically, troubleshoot effectively, and apply practical solutions.",
    icon: BiError,
  },
  {
    title: "research",
    description:
      "I believe that anything I want to learn can be found through deep research on the internet. During my two years of studying in the BTEC education system, I improved my research skills, making them a strong asset that can support me in both my life and future work.",
    icon: GiArchiveResearch,
  },
];

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function NextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <button
      aria-label="next"
      onClick={onClick}
      className={`${styles.icon} absolute right-3 max-lg:right-0  lg:right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
    >
      <FaAngleRight className="text-6xl text-white" />
    </button>
  );
}

function PrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <button
      aria-label="prev"
      onClick={onClick}
      className={`${styles.icon} absolute left-3 max-lg:left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
    >
      <FaAngleLeft className="text-6xl text-white" />
    </button>
  );
}

export default function MySkills() {
  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 360, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };
  return (
    <section
      id="skills"
      className={`${styles.skills} flex flex-col gap-10 py-20`}
    >
      <h1
        className={`${styles.header} text-6xl font-bold mb-5 text-center justify-self-center`}
      >
        My Skills
      </h1>
      <div className={`${styles.sliderContainer}`}>
        <Slider {...settings}>
          {data.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div key={idx}>
                <div
                  className={`${styles.cards} rounded-xl bg-gradient-to-b from-black to-violet-700/80 p-6 justify-self-center shadow-xl/50 hover:scale-105 cursor-grab`}
                >
                  <Icon
                    className={`${styles.icons} 2xl:text-7xl max-2xl:text-5xl mb-5 2xl:mb-10`}
                  />
                  <h2
                    className={`${styles.cardHeader} 2xl:text-3xl max-2xl:text-xl max-mb-5 max-lg:text-lg lg:text-lg w-full text-center max-sm:mb-10`}
                  >
                    {skill.title}
                  </h2>
                  <p
                    className={`${styles.cardP} 2xl:text-2xl max-2xl:text-lg text-center max-lg:text-lg lg:text-lg max-md:text-base md:text-base`}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

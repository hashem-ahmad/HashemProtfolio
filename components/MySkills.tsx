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
      "I have experience in UI/UX design, focusing on creating intuitive, user-friendly, and visually appealing interfaces. I apply established design principles and best practices to ensure seamless user journeys, balancing functionality with aesthetics to deliver engaging digital experiences.",
    icon: MdOutlineDesignServices,
  },
  {
    title: "Frontend-Development",
    description:
      "specialize in transforming creative ideas and professional designs into fully functional, responsive, and user-friendly websites. With hands-on experience in HTML, CSS, and JavaScript, I'm skilled at integrating modern front-end technologies to build dynamic interfaces that bring designs to life. My goal is to deliver clean, efficient, and visually engaging code that enhances user experience and meets project objectives with precision and creativity.",
    icon: FaCode,
  },
  {
    title: "React Development",
    description:
      "I began learning React to strengthen my web development skills, and this portfolio represents my first project built with the framework. Through this experience, I gained practical knowledge of component-based architecture, state management, and reusable UI elements, laying a strong foundation for building scalable and dynamic web applications.",
    icon: FaReact,
  },
  {
    title: "Python",
    description:
      "Python is the first programming language I learned, providing me with a solid foundation in programming concepts. I have built simple projects, including basic management systems, and continue to expand my skills through practical practice and structured learning, starting with the Python Power-Up course.",
    icon: AiOutlinePython,
  },
  {
    title: "Photoshop and photo and posters design",
    description:
      "I have foundational skills in Adobe Photoshop, enabling me to perform photo editing, image adjustments, and visual enhancements. I apply these skills to create assets that support web design projects and improve the overall visual presentation of digital content.",
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
      "I consider research one of my strongest skills, as I believe that any knowledge can be acquired through effective exploration and analysis of available resources. During my two years in the BTEC education system, I enhanced my ability to conduct structured, in-depth research, making it a valuable asset that supports both my personal development and professional growth.",
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
        className={`${styles.header} text-6xl font-bold mb-5 text-center justify-self-center max-sm:text-5xl`}
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
                  <div className="flex justify-center items-center mb-5 2xl:mb-10">
                    <Icon className="2xl:text-7xl max-2xl:text-5xl" />
                  </div>

                  <h2
                    className={`${styles.cardHeader} 2xl:text-3xl max-2xl:text-xl max-mb-5 max-lg:text-lg lg:text-lg w-full text-center mb-10`}
                  >
                    {skill.title}
                  </h2>
                  <p
                    className={`${styles.cardP} 2xl:text-xl text-sm text-center max-sm:text-xs`}
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

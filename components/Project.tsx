"use client";
import React from "react";
import styles from "./project.module.css";
import Image from "next/image";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  {
    title: "NMK Performance",
    description: `NMK Performance is a website designed to inform people about the
    services and offerings of the NMK Performance business, as well as
    provide general information about the company. The website is still under development and will be launched soon.`,
    image: "/photos/NMK.png",
    link: "https://hashem-ahmad.github.io/hashemsNMK/home.html",
  },
  {
    title: "Paper Print",
    description: `PaperPrint is an e-commerce website that offers a variety of
            printing services. It was one of my best projects, where I dedicated
            significant effort to complete it in a short time using only
            front-end technologies such as HTML, CSS, and JavaScript. Although I
            wanted to use frameworks like React and add a backend to make it
            more professional, I didn’t have enough time or experience at that
            stage.`,
    image: "/photos/paperprint.png",
    link: "https://hashem-ahmad.github.io/PaperPrint/index.html",
  },
  {
    title: "To-Do List",
    description: `To-Do List is a simple application that helps users manage their
            tasks efficiently. It allows users to add, edit, and delete tasks,
            providing a user-friendly interface for task management. this is my
            first project using full static front-end html css js.`,
    image: "/photos/todo.png",
    link: "https://hashem-ahmad.github.io/todo-list-hashem/to_do.html",
  },
];

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`${styles.icon} absolute top-150 left-40 max-md:top-110 max-md:left-20 max-sm:left-5 max-sm:top-90 transform -translate-x-1/2 z-10 cursor-pointer max-2xl:top-110 max-sm:hidden`}
      onClick={onClick}
    >
      <FaAngleDown className="text-6xl text-white text-shadow-xl" />
    </div>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className={`${styles.icon} absolute top-130 left-40 max-md:top-100 max-md:left-20 max-sm:left-5 max-sm:top-70 transform -translate-x-1/2 z-10 cursor-pointer max-2xl:top-95 max-sm:hidden`}
      onClick={onClick}
    >
      <FaAngleUp className="text-6xl text-white text-shadow-xl" />
    </div>
  );
}

export default function Project() {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section
      id="projects"
      data-bg="light"
      className={`${styles.Projects} h-[120vh] flex flex-col h-screen`}
    >
      <h1
        className={`${styles.BigHeader} text-6xl font-bold mb-5 place-items-center justify-center drop-shadow-xl z-0container mx-auto text-center`}
      >
        My Projects
      </h1>
      <Slider {...settings}>
        {data.map((project, idx) => {
          return (
            <div key={idx} className="flex flex-col gap-12">
              <div className={`${styles.projectcontainer}`}>
                <div
                  className={`${styles.imageContainer}  relative 2xl:left-250 2xl:top-85 2xl:w-750 max-md:w-150 md:w-150 md:left-30 max-md-top-120 md-top-120 max-2xl:left-140 2xl:left-140 max-2xl:top-55 2xl:top-55 max-lg:top-70 lg:top-70 z-0 max-2xl:w-[650px] max-lg:w-[500px] lg:w-[500px] max-lg:left-120 lg:left-120 max-2xl:h-[auto] max-sm:w-95 max-sm:left-0 max-sm:top-90`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={750}
                    height={450}
                    priority={idx === 0}
                    className={`${styles.projectImage} z-0 cursor-pointer shadow-xl/50 hover:scale-105 transition-transform duration-300 ease-in-out`}
                    onClick={() => window.open(project.link, "_blank")}
                  />
                </div>
                <div
                  className={`${styles.projectExContainer} relative h-auto z-10 2xl:bottom-40 2xl:left-10 max-2xl:bottom-70 2xl:bottom-70 max-lg:bottom-35 lg:bottom-35 max-2xl:left-10 2xl:left-10 max-ms:place-items-center max-sm:left-0 max-sm:bottom-25`}
                >
                  <h2
                    className={`${styles.projectTitle} text-4xl font-bold mb-5 place-items-center justify-center text-black text-shadow-x l max-sm:mr-4`}
                  >
                    {project.title}
                  </h2>
                  <div
                    className={`${styles.paragraphcontainer} z-10 w-250 max-sm:w-auto h-auto md:p-30px bg-gradient-to-r from-blue-800/70 to-gray-900/70 md:mask-radial-from-90% z-10 max-2xl:w-[650px] max-2xl:text-xl 2xl:text-xl max-lg:text-xl lg:text-xl`}
                  >
                    <p
                      className={`${styles.paragraph} 2xl:text-2xl max-2xl:text-2xl max-lg:text-xl lg:text-xl text-shadow-xl max-sm:text-base max-sm:text-center`}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Icons8ChevronDown from "./icons/Icons8ChevronDown";
import Typewriter from "./type";

function Header() {
  return (
    <>
      <header className={`${styles.header} place-items-center`} data-bg="light">
        <div className={`${styles.image} lg:w-[450px]`}>
          <div
            className={`${styles.imgbg} h-[350px] w-[350px] rounded-full blur-lg 2xl:h-[440px] 2xl:w-[440px] md:mask-radial-from-30%`}
          ></div>
          <div className={styles.hashem}>
            <Image
              src="/photos/hashem.png"
              alt="hashem"
              width={250}
              height={250}
              className={`${styles.hashemIMG} absolute bottom-13 left-30 rounded-full pointer-events-none drop-shadow-xl/90 max-2xl:w-[250px] max-2xl:h-[340px] max-2xl:left-15 max-2xl:bottom-12 max-2xl:right-60`}
            />
          </div>
          <div className="w-full place-items-center flex flex-col block top-20 left-1/2">
            <div className="flex justify-center mt-10">
              <Typewriter
                text="Haashem Ahmad"
                className="shadow-lg pointer-events-none font-roboto text-[40px] max-2xl:text-3xl"
              />
            </div>
            <br />
            <h3
              className={` ${styles["drop-shadow"]} shadow-lg pointer-events-none font-roboto text-lg text-[36px] text-shadow-lg w-auto max-2xl:text-2xl`}
            >
              Software Engineer
            </h3>
            <a href="#aboutme">
              <Icons8ChevronDown
                className={`${styles.svg} ${styles["drop-shadow"]} size-20 animate-bounce transform -translate-x-1/2 max-2xl:size-12 absolute top-115 left-1/2 2xl:top-155 hover:text-[#597bf8] transition-colors duration-300 ease-in-out mt-8`}
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

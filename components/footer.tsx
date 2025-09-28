import React from "react";
import styles from "./footer.module.css";
import { FaInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
function Project() {
  return (
    <footer id="contact" className={`${styles.skills} flex flex-col`}>
      <div className={styles.footer}>
        <h2 className={`${styles.footerTitle} text-4xl font-bold mb-5`}>
          Contact Me
        </h2>
        <div className={styles.row}>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/h_ashem07/?hl=en"
                target="_blink"
              >
                <FaInstagram className="text-4xl hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg" />
              </a>
            </li>
            <li>
              <a href="https://github.com/hashem-ahmad" target="_blink">
                <BsGithub className="text-4xl hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg" />
              </a>
            </li>
            <li>
              <a
                href="mailto:hashem.khalil2007@gmail.com?subject=Inquiry&body=Hello,%20I%20would%20like%20to%20know%20more%20about"
                target="_blink"
              >
                <AiOutlineMail className="text-4xl hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hashem-ahmad-7249b72ba/"
                target="_blink"
              >
                <FaLinkedin className="text-4xl hover:text-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg" />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.row}>© 2025, Hashem Ahmad</div>
      </div>
    </footer>
  );
}
export default Project;

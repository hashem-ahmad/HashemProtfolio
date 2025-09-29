"use client";
import { useState, useEffect, useMemo } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // hamburger + close icons
import Drift from "./icons/LogosDrift";
import styles from "./navbar.module.css";

export default function Navbar() {
  const tabs = useMemo(
    () => [
      { label: "About-Me", id: "aboutme" },
      { label: "Skills", id: "skills" },
      { label: "Projects", id: "projects" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isLight, setIsLight] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [isOpen, setIsOpen] = useState(false); // mobile menu toggle

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 250) {
        setIsTop(true);
        setIsLight(false);
        setActiveTab(tabs[0].id);
        return;
      } else {
        setIsTop(false);
      }

      for (const tab of tabs) {
        const section = document.getElementById(tab.id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 110 && rect.bottom > 110) {
          setActiveTab(tab.id);
          const bgType = section.getAttribute("data-bg");
          setIsLight(bgType === "light");
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tabs]);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 transition-colors duration-300">
      <div className="max-w-screen mx-auto flex items-start justify-between px-4 py-2">
        {/* Logo always left */}
        <a href="#top" className={styles["logo-link"]}>
          <Drift className="text-2xl md:text-3xl p-1 text-[#46399c]" />
        </a>

        {/* Tabs (centered, only visible on >=768px) */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`text-2xl max-2xl:text-xl transition-colors duration-200 hover:text-[#ffd900] ${
                  isActive
                    ? "border-b-2 border-[#46399c] text-[#46399c]"
                    : isTop
                    ? "text-white"
                    : isLight
                    ? "text-black"
                    : "text-white"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
        <button
          className="md:hidden text-2xl text-white h-740px"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden transition-all duration-2000 ease-linear ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center bg-black/70 backdrop-blur-md max-md:py-70 max-md:space-y-20 self-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <a
                key={tab.id}
                href={`#${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsOpen(false); // close after click
                }}
                className={`text-xl transition-colors duration-200 hover:text-[#ffd900] ${
                  isActive
                    ? "border-b-2 border-[#46399c] text-[#46399c]"
                    : "text-white"
                }`}
              >
                {tab.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

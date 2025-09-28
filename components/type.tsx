"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  className?: string;
}

export default function Typewriter({ text, className }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        // ✅ Add the current character
        setDisplayedText((prev) => prev + text.charAt(index));
        index++; // move to next character
      } else {
        clearInterval(interval);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <h2
      className={`border-r-2 border-white-500 pr-1 animate-blink ${
        className || ""
      }`}
    >
      {displayedText}
    </h2>
  );
}

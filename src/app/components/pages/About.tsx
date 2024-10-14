import React from "react";
import { FlipWords } from "../ui/flip-words";
import { WavyBackground } from "../ui/wavy-background";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function About() {
  const typewriterWords = [
    {
      text: "Hey!",
      className: "text-black dark:text-white",
    },
    {
      text: "I",
      className: "text-black dark:text-white",
    },
    {
      text: "Am",
      className: "text-black dark:text-white",
    },
    {
      text: "Khushi",
      className: "text-black dark:text-white",
      
    },
    {
      text: "Upadhyay",
      className: "text-black dark:text-white",
    },
  ];

  const flipWords = ["Developer", "Designer", "Learner", "Coder"];

  return (
    <div  id="About">
      <WavyBackground className="h-[40rem] flex justify-center items-center px-4 border-none shadow-none ">
      <div className="text-center">
        {/* Typewriter Effect */}
        <div className="text-10xl mx-auto flex justify-center font-normal text-neutral-600 dark:text-neutral-400 mb-12">
          <TypewriterEffect words={typewriterWords} />
        </div>
        
        {/* Flip Words Effect */}
        <div className="text-4xl mx-auto flex justify-center font-bold text-black dark:text-white p-4">
          <FlipWords words={flipWords} />
        </div>
      </div>
    </WavyBackground>
    </div>
  );
}

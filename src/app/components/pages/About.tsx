import React from "react";
import { FlipWords } from "../ui/flip-words";
import { WavyBackground } from "../ui/wavy-background";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function About() {
  const typewriterWords = [
    {
      text: "Hey!",
    },
    {
      text: "I",
    },
    {
      text: "Am",
    },
    {
      text: "Khushi",
      className: "text-white dark:text-white",
      
    },
    {
      text: "Upadhyay",
      className: "text-white dark:text-white",
    },

    // {
    //   text: "Khushi",
    //   className: "text-pink-500 dark:text-pink-500", // White text for good contrast
    // },
    // {
    //   text: "Upadhyay",
    //   className: "text-pink-500 dark:text-pink-500", // Light yellow for visibility
    // },
  ];

  const flipWords = ["Developer", "Designer", "Learner", "Coder"];

  return (
    <div  id="About">
      <WavyBackground className="h-[40rem] flex justify-center items-center px-4  ">
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

// "use client";
// import React from "react";
// import { WavyBackground } from "../ui/wavy-background";

// export function About() {
//   return (
//     <WavyBackground className="max-w-4xl mx-auto pb-40">
//       <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
//         Hero waves are cool
//       </p>
//       <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
//         Leverage the power of canvas to create a beautiful hero section
//       </p>
//     </WavyBackground>
//   );
// }


"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function About() {
    const words = [
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
          className: "text-blue-300 dark:text-blue-300",
        },
        {
          text: "Upadhyay",
          className: "text-cyan-400 dark:text-cyan-400",
          // className: "text-blue-500 dark:text-blue-500",
        },
        // {
        //   text: "Aceternity.",
        //   className: "text-blue-500 dark:text-blue-500",
        // },
      ];
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      {/* <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hero waves are cool
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        Leverage the power of canvas to create a beautiful hero section
      </p> */}
       <TypewriterEffect words={words} />
    </WavyBackground>
  );
}

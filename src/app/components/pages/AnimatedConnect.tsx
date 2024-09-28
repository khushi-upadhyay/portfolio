"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const peopleGroup1 = [
  {
    id: 1,
    name: "GitHub",
    designation: "@khushi-upadhyay",
    image:
      "/images/connect/github.webp",
    link: "https://github.com/khushi-upadhyay",
  },
];

const peopleGroup2 = [
  {
    id: 2,
    name: "LinkedIn",
    designation: "@khushiupadhyay11",
    image:
      "/images/connect/LinkedIn.png",
    link: "https://www.linkedin.com/in/khushiupadhyay11/",
  },
];

const peopleGroup3 = [
  {
    id: 3,
    name: "Twitter",
    designation: "@KhushiUpad96039",
    image:
      "/images/connect/x.jpeg",
    link: "https://x.com/KhushiUpad96039",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center bg-white dark:bg-neutral-950 gap-10 w-full -mt-32 h-64">
      {/* First toolkit */}
      <div className="flex items-center justify-center">
        <a href={peopleGroup1[0].link} target="_blank" rel="noopener noreferrer">
          <AnimatedTooltip items={peopleGroup1} />
        </a>
      </div>
      {/* Second toolkit */}
      <div className="flex items-center justify-center">
        <a href={peopleGroup2[0].link} target="_blank" rel="noopener noreferrer">
          <AnimatedTooltip items={peopleGroup2} />
        </a>
      </div>
      {/* Third toolkit */}
      <div className="flex items-center justify-center">
        <a href={peopleGroup3[0].link} target="_blank" rel="noopener noreferrer">
          <AnimatedTooltip items={peopleGroup3} />
        </a>
      </div>
    </div>
  );
}

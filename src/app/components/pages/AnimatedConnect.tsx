"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const peopleGroup1 = [
  {
    id: 1,
    name: "GitHub",
    designation: "Khushi's GitHub",
    image:
      "/images/connect/github.webp",
    link: "https://github.com/khushi-upadhyay", // Replace with your GitHub URL
  },
];

const peopleGroup2 = [
  {
    id: 2,
    name: "LinkedIn",
    designation: "Khushi's LinkedIn",
    image:
      "/images/connect/LinkedIn.png",
    link: "https://www.linkedin.com/in/khushiupadhyay11/", // Replace with your LinkedIn URL
  },
];

const peopleGroup3 = [
  {
    id: 3,
    name: "Twitter",
    designation: "Khushi's Twitter",
    image:
      "/images/connect/x.jpeg",
    link: "https://twitter.com/your-twitter-username", // Replace with your Twitter URL
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center gap-10 w-full">
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

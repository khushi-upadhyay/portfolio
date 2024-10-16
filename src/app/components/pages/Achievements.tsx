"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export function Achievements() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-white dark:bg-neutral-950" id="Achievements">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 text-white dark:text-neutral-200 font-sans">
        Achievements
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const IOSContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <a 
          href="https://www.srmist.edu.in/ios-student-developer-program/"
          target="_blank"
          className="underline text-blue-600"
        >
          Click here to know more about the iOS Student Developer Program
        </a>
        <br />
        <br />
        <span className="font-bold text-neutral-700">
          I&apos; m thrilled to be in the top 1% of those chosen for the exclusive iOS Student Developer Program.
        </span>{" "}
        <br /><br />
        Here are some quick highlights about my journey so far:
        <ul className="list-disc list-inside mt-2">
          <li>
            <strong>Apple</strong> and <strong>Infosys</strong> have joined forces to offer this program at SRM Institute of Science and Technology.
          </li><br/>
          <li>
            I&apos; m honing my skills in Swift and app development, learning from the best in the industry.
          </li><br/>
          <li>
            The program not only focuses on coding but also on building apps that solve real-world problems. 
          </li><br/>
        </ul><br/>
        Want to know more? Check out my{" "}
        <a 
          href="https://www.linkedin.com/posts/khushiupadhyay11_ios-apple-infosys-activity-7231625549499011072-S-Ya?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          className="underline text-blue-600"
        >
          LinkedIn post
        </a>{" "}
        for details.
      </p>
      <Image
        src="/images/achievements/macOS.jpg"
        alt="iOS Student Developer Program"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};


const NPTELContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <a 
          href="https://drive.google.com/file/d/1bqJrfvdG0vFvNNwEn2j6IHPDnBgrc9s-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Click here to view my Elite rank certification for the Computer Organization and Architecture NPTEL course
        </a>
        <br />
        <br />
        <span className="font-bold text-neutral-700">
          I&apos; m proud to have attained Elite ranks in the Computer Organization and Architecture NPTEL courses.
        </span>{" "}
        <br /><br />
        Here are some quick highlights about my learning journey:
        <ul className="list-disc list-inside mt-2">
          <li>
            The NPTEL program offers in-depth insights into the fundamentals of computer organization and architecture.
          </li><br/>
          <li>
            I enhanced my understanding of core concepts and practical applications through engaging video lectures and assignments.
          </li><br/>
          <li>
            Achieving an Elite rank reflects my dedication and proficiency in this critical area of computer science.
          </li><br/>
        </ul><br/>
      </p>
      <Image
        src="/images/achievements/NPTELLogo.png" // Update the image path as needed
        alt="NPTEL achievement certificate"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};


const ComputationalContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <a 
          href="https://www.srmist.edu.in"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-600"
        >
          Click here to know more about SRM Institute of Science and Technology
        </a>
        <br />
        <br />
        <span className="font-bold text-neutral-700">
          I&apos; m honored to be among the top 20 department rank holders in the Computational Intelligence Department at SRM Institute of Science and Technology.
        </span>{" "}
        <br /><br />
        Here are some quick highlights about my academic journey:
        <ul className="list-disc list-inside mt-2">
          <li>
            The Computational Intelligence Department at SRM Institute is known for its cutting-edge curriculum and research opportunities.
          </li><br/>
          <li>
            Being in the top 20 rank holders reflects my dedication and passion for mastering subjects like artificial intelligence, machine learning, and computational techniques.
          </li><br/>
          <li>
            I&apos; ve honed both theoretical knowledge and practical skills, preparing myself for innovative challenges in the field of computational intelligence.
          </li><br/>
        </ul><br/>
      </p>
      <Image
        src="/images/achievements/SRM.png" 
        alt="SRM Institute of Science and Technology"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "iOS Student Developer Program",
    title: "Top 1%",
    src: "/images/achievements/iOS.jpeg",
    content: <IOSContent />,
  },
  {
    category: "Department Rank Holder",
    title: "Top 20%",
    src: "/images/achievements/tech-park.webp",
    content: <ComputationalContent />,
  },
  {
    category: "NPTEL Examination",
    title: "Elite Rank",
    src: "/images/achievements/nptel.jpeg",
    content: <NPTELContent />,
  },
];


import Image from "next/image";
import React from "react";
import { Timeline } from "@/app/components/ui/timeline";

export function Experience() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
        <h2 className="text-white text-lg md:text-xl font-bold mb-4">
        Admin at 
        <span className="mx-1">
        <a href="https://www.htbsrmist.tech" target="_blank" rel="noopener noreferrer" className="text-blue-500">
          HackTheBox SRMIST
          </a>
        </span>
      </h2>
      <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
        <li>Became Admin within two months, demonstrating quick adaptation and leadership.</li>
        <li> Guided and mentored new members, fostering a collaborative and educational environment.</li>
      </ul>

    <h2 className="text-white text-lg md:text-xl font-bold mb-4">
                AI Development Researcher at
                <span className="mx-1">
                <a href="https://www.linkedin.com/company/ftv-salon-academy/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Ftv Salon Academy 
                  </a>
                </span>
              </h2>
              <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
                <li>Implemented AI algorithms to optimize website content for higher search engine rankings.</li>
                <li>Utilized AI-driven analytics to measure and adjust SEO performance.</li>
              </ul>
    
              <h2 className="text-white text-lg md:text-xl font-bold mb-4">
                Google AI ML Virtual Intern at 
                <span className="mx-1">
                  <a href="https://www.cloudskillsboost.google" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  Google Cloud Skills Boost
                  </a>
                </span>
              </h2>
              <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
                <li>Used TensorFlow and advanced tools to optimize machine learning models.</li>
                <li>mplemented algorithms to address real-world problems.</li>
              </ul>
            </div>
      ),
    },
    
    {
      title: "2023",
      content: (
        <div>
          <h2 className="text-white text-lg md:text-xl font-bold mb-4">
            Associate Lead at 
            <span className="mx-1">
            <a href="https://www.htbsrmist.tech" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              HackTheBox SRMIST
              </a>
            </span>
          </h2>
          <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
            <li>Assisted in organizing cybersecurity events and workshops.</li>
            <li>Supported team activities and helped coordinate member participation.</li>
          </ul>

        <h2 className="text-white text-lg md:text-xl font-bold mb-4">
                    Freelance Writer at
                    <span className="mx-1">
                    <a href="https://www.linkedin.com/company/stick-dot" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Stick & Dot
                      </a>
                    </span>
                  </h2>
                  <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
                    <li>Developed SEO-friendly content for diverse industries, boosting client visibility.</li>
                    <li>Conducted thorough research to exceed client expectations with high-quality articles.</li>
                  </ul>
        
                  <h2 className="text-white text-lg md:text-xl font-bold mb-4">
                    Research & Data Member 
                    <span className="mx-1">
                      <a href="https://think-digital.in" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                      Placfv&apos;s (SRM Placement Student Team)
                      </a>
                    </span>
                  </h2>
                  <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
                    <li>Researched companies to identify job opportunities and market trends.</li>
                    <li>Analyzed data to support placement strategies and enhance student readiness.</li>
                  </ul>
                </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>

<h2 className="text-white text-lg md:text-xl font-bold mb-4">
            Operations Team Member at 
            <span className="mx-1">
            <a href="https://www.htbsrmist.tech" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              HackTheBox SRMIST
              </a>
            </span>
          </h2>
          <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
            <li>Engaged with the community to learn and share cybersecurity knowledge.</li>
            <li>Done publicity and marketing for events and workshops.</li>
          </ul>

          <h2 className="text-white text-lg md:text-xl font-bold mb-4">
            Event Team Member at 
            <span className="mx-1">
              <a href="https://think-digital.in" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                Think Digital
              </a>
            </span>
          </h2>
          <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
            <li>Managed logistics and event operations.</li>
            <li>Handled public relations and event planning.</li>
          </ul>
      
          <h2 className="text-white text-lg md:text-xl font-bold mb-4">
            Event Team Member at 
            <span className="mx-1">
            <a href="https://www.linkedin.com/in/srmist-daa/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
              Directorate of Alumni Affairs
              </a>
            </span>
          </h2>
          <ul className="list-disc list-inside text-white text-sm md:text-sm mb-4">
            <li>Organized events from scratch</li>
              <li>Coordinated all aspects of planning and execution.</li>
          </ul>
        </div>
      ),
      
    },
  ];

  return <Timeline data={data} />;
}

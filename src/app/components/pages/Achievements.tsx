"use client";
import React, { useState } from "react";

interface Achievement {
  id: number;
  category: string;
  title: string;
  description: string;
  details: string;
  link: string;
  year: string;
}

export function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: 1,
      category: "iOS Student Developer Program",
      title: "Top 0.9%",
      description: "Selected for the exclusive iOS Student Developer Program by Apple & Infosys",
      details: "I'm thrilled to be in the top 0.9% of those chosen for the exclusive iOS Student Developer Program by Apple & Infosys. The program focuses on Swift and app development, learning from the best in the industry, and building apps that solve real-world problems.",
      link: "https://www.srmist.edu.in/ios-student-developer-program/",
      year: "2025"
    },
    {
      id: 2,
      category: "Stanford University",
      title: "Code in Place 2025",
      description: "Selected from 66,000+ global applicants",
      details: "Selected for Stanford University's Code in Place 2025 from over 66,000+ global applicants. This prestigious program offers world-class computer science education and networking opportunities.",
      link: "https://codeinplace.stanford.edu/",
      year: "2025"
    },
    {
      id: 3,
      category: "Hackathon Winner",
      title: "1st Runner-Up",
      description: "KodeShetra Hackathon 2022",
      details: "Awarded 1st Runner-Up at KodeShetra Hackathon for creating a personalized meal plans platform. Demonstrated innovative problem-solving and technical skills.",
      link: "#",
      year: "2022"
    },
    {
      id: 4,
      category: "Competition Achievement",
      title: "4th Position",
      description: "Enigma, BIT Mesra 2025",
      details: "Secured 4th position out of 75+ teams at Enigma, Birla Institute of Technology (BIT), Mesra, Ranchi, 2025. Showcased exceptional problem-solving and teamwork skills.",
      link: "#",
      year: "2025"
    },
    {
      id: 5,
      category: "Innovation Challenge",
      title: "Top 20",
      description: "Citi Campus Innovation Challenge 5.0",
      details: "Ranked among Top 20 out of 1,744+ participants in Citi Campus Innovation Challenge 5.0 (Engineering Track), 2025. Demonstrated innovative thinking and technical expertise.",
      link: "#",
      year: "2025"
    },
    {
      id: 6,
      category: "App Development",
      title: "Top 10 Teams",
      description: "iOS Development Centre App Fair",
      details: "Showcased the 'Recap' app among the top 10 teams at the App Fair organized by the iOS Development Centre, 2025. Received recognition for innovative healthcare application.",
      link: "#",
      year: "2025"
    },
    {
      id: 7,
      category: "Professional Development",
      title: "Forward Champion",
      description: "McKinsey & Company's Forward Program",
      details: "Awarded Forward Champion and Super Learner titles in McKinsey & Company's Forward Program (2025), completed by only 46% of participants across 119 countries.",
      link: "#",
      year: "2025"
    },
    {
      id: 8,
      category: "Technical Skills",
      title: "Gold-Level Badges",
      description: "HackerRank Achievements",
      details: "Secured Gold-Level Badges on HackerRank for C, C++, Python, and Problem Solving. Demonstrated proficiency in multiple programming languages and algorithmic thinking.",
      link: "https://www.hackerrank.com/khushiupad",
      year: "2024"
    },
    {
      id: 9,
      category: "Global Certifications",
      title: "Professional Certifications",
      description: "Multiple Industry Certifications",
      details: "Oracle Cloud Infrastructure Certified Foundation Associate, GitHub Foundation, Fortinet Certified Associate Cybersecurity, Alteryx Designer Core - Data Preparation",
      link: "#",
      year: "2024"
    }
  ];

  const handleLearnMore = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <div id="Achievements" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-purple-100/20 to-pink-100/20 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              onClick={() => handleLearnMore(achievement)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
            >
              <div className="p-6">
                {/* Year badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                    {achievement.year}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{achievement.category}</span>
                </div>

                {/* Title only */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{achievement.title}</h3>

                {/* Learn More Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLearnMore(achievement);
                  }}
                  className="inline-flex items-center text-purple-600 dark:text-purple-300 hover:text-purple-700 dark:hover:text-purple-200 transition-colors text-sm font-medium"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </button>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Detail Modal */}
      {selectedAchievement && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-white/20 dark:border-white/20 p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-2xl z-10"
            >
              ×
            </button>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                    {selectedAchievement.year}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">{selectedAchievement.category}</span>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedAchievement.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mt-2">{selectedAchievement.description}</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Details</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedAchievement.details}</p>
              </div>

              {selectedAchievement.link && selectedAchievement.link !== "#" && (
                <div>
                  <a
                    href={selectedAchievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium"
                  >
                    View Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


"use client";
import Image from "next/image";
import React, { useState } from "react";

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    {
      title: "iOS Developer",
      company: "Infosys Limited",
      period: "2025",
      image: "/images/connect/LinkedIn.png",
      description: "Led a 10-member iOS team, integrated Gemini API for intelligent symptom analysis, and optimized Agile workflows.",
      highlights: [
        "Led a 10-member iOS team, aligning product owners to ensure timely delivery",
        "Integrated Gemini API to power intelligent symptom analysis and personalized doctor recommendations",
        "Conducted rigorous code reviews and resolved merge conflicts, leading to 20% reduction in memory leaks",
        "Optimized collaborative Agile workflows and sprint planning using Jira, boosting team productivity by 40%"
      ],
      color: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-400/30",
      textColor: "text-blue-600 dark:text-blue-300"
    },
    {
      title: "Outreach Summer Intern",
      company: "National Institute of Technology, Bhopal",
      period: "2025",
      image: "/images/achievements/nptel.jpeg",
      description: "Developed a virtual temperature sensor achieving 96.92% accuracy with Random Forest for internal heat profiling.",
      highlights: [
        "Developed a virtual temperature sensor, achieving 96.92% accuracy with Random Forest for internal heat profiling",
        "Benchmarked advanced ML models, including CNNs and Physics-Informed NNs (PINNs), for robust estimation",
        "Architected novel ML solutions by integrating physics constraints, enhancing accuracy and model robustness"
      ],
      color: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-400/30",
      textColor: "text-green-600 dark:text-green-300"
    },
    {
      title: "Research Project",
      company: "IIIT Nagpur",
      period: "2025",
      image: "/images/achievements/SRM.png",
      description: "Addressed challenges in data center energy management by establishing accurate predictive models.",
      highlights: [
        "Addressed challenges in data center energy management by establishing accurate predictive models",
        "Implemented advanced ML models (XGBoost, LSTM) and analyzed smart energy optimization interventions",
        "Provided energy consumption predictions, achieving R² of 0.9999, and insightful analysis of optimization strategies"
      ],
      color: "from-purple-500/20 to-purple-600/20",
      borderColor: "border-purple-400/30",
      textColor: "text-purple-600 dark:text-purple-300"
    },
    {
      title: "Software Intern",
      company: "Highonswift",
      period: "2024-2025",
      image: "/images/connect/github.webp",
      description: "Crafted mobile applications using Swift, SwiftUI, and UIKit, prioritizing clean UI and seamless UX.",
      highlights: [
        "Crafted mobile applications using Swift, SwiftUI, and UIKit, prioritizing clean UI and seamless UX",
        "Integrated RESTful APIs (Firebase, Google Login) and implemented comprehensive testing protocols",
        "Optimized iOS build pipelines to boost development efficiency by 40% in dynamic startup environment"
      ],
      color: "from-pink-500/20 to-pink-600/20",
      borderColor: "border-pink-400/30",
      textColor: "text-pink-600 dark:text-pink-300"
    }
  ];

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div id="Experience" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-purple-100/20 to-pink-100/20 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(experience)}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${experience.color} border ${experience.borderColor} backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer`}
            >
              {/* Background gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              
              <div className="relative p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{experience.title}</h3>
                    <p className={`text-lg font-medium ${experience.textColor} mb-1`}>{experience.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{experience.period}</p>
                  </div>
                  
                  {/* Company logo/image */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={experience.company}
                      width={40}
                      height={40}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                </div>

                {/* Description only */}
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 flex-1">
                  {experience.description}
                </p>

                {/* Click to view all button */}
                <div className="flex justify-end">
                  <span className="text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-gray-900 dark:hover:text-white transition-colors">
                    Click to view all →
                  </span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-white/20 dark:border-white/20 p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-2xl z-10"
            >
              ×
            </button>
            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {selectedExperience.title}
                  </h3>
                  <p className={`text-xl font-medium ${selectedExperience.textColor} mt-2`}>
                    {selectedExperience.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">{selectedExperience.period}</p>
                </div>
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center overflow-hidden">
                  <Image
                    src={selectedExperience.image}
                    alt={selectedExperience.company}
                    width={50}
                    height={50}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Description</h4>
                <p className="text-gray-700 dark:text-gray-300">{selectedExperience.description}</p>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                <div className="space-y-3">
                  {selectedExperience.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${selectedExperience.textColor} bg-current`}></div>
                      <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

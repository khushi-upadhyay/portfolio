
"use client";
import React, { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  link: string;
  thumbnail: string;
  skills: string;
  description: string;
  featured?: boolean;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Only show the 4 specified projects
  const featuredProjects = products.filter(p => 
    p.title === "Recap: Every Memory Matters" ||
    p.title === "Virtual Temperature Sensor" ||
    p.title === "Data Center Energy Optimization" ||
    p.title === "Tuberculosis Detection using XAI"
  );

  return (
    <div id="Projects" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-purple-100/20 to-pink-100/20 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        {/* Featured Projects - 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => handleProjectClick(project)}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 dark:border-white/20 backdrop-blur-sm hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
            >
              {/* Project image - on top */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {project.skills.split(', ').slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {project.skills.split(', ').length > 3 && (
                    <span className="px-2 py-1 bg-gradient-to-r from-pink-400/20 to-purple-400/20 border border-pink-400/30 text-pink-700 dark:text-pink-300 text-xs rounded-full">
                      +{project.skills.split(', ').length - 3} more
                    </span>
                  )}
                </div>

                {/* Click to view details */}
                <div className="flex justify-end mt-4">
                  <span className="text-purple-600 dark:text-purple-300 text-sm font-medium hover:text-purple-700 dark:hover:text-purple-200 transition-colors">
                    Click to view details →
                  </span>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full font-medium hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-white/20 dark:border-white/20 p-8">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-2xl z-10"
            >
              ×
            </button>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Image */}
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={selectedProject.thumbnail}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right side - Technologies and Description */}
                <div className="space-y-6">
                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.skills.split(', ').map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-purple-400/20 to-pink-400/20 border border-purple-400/30 text-purple-700 dark:text-purple-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Description</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>
                </div>
              </div>

              {/* View Project Button */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all duration-300 font-medium"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export const products: Project[] = [
  {
    title: "Recap: Every Memory Matters",
    link: "https://apps.apple.com/app/recap-every-memory-matters/id1234567890",
    thumbnail: "/images/projects/recap.jpeg",
    skills: "Swift, SwiftUI, iOS Development, Healthcare, User Experience",
    description: "Engineered an application to empower individuals with Alzheimer's in addressing memory recall challenges. Partnered with SRM Medical College to develop a user-friendly app tailored for patients and caregivers. Launched on Apple App Store with comprehensive memory management features and intuitive interface design.",
    featured: true
  },
  {
    title: "Virtual Temperature Sensor",
    link: "https://github.com/khushi-upadhyay/virtual-temperature-sensor",
    thumbnail: "/images/projects/real.jpeg",
    skills: "Machine Learning, Random Forest, Python, Temperature Profiling, ML Models",
    description: "Developed a virtual temperature sensor achieving 96.92% accuracy with Random Forest for internal heat profiling. Benchmarked advanced ML models including CNNs and Physics-Informed NNs (PINNs) for robust estimation.",
    featured: true
  },
  {
    title: "Data Center Energy Optimization",
    link: "https://github.com/khushi-upadhyay/data-center-energy-optimization",
    thumbnail: "/images/projects/real.jpeg",
    skills: "Machine Learning, XGBoost, LSTM, Python, Energy Management",
    description: "Addressed challenges in data center energy management by establishing accurate predictive models. Implemented advanced ML models and analyzed smart energy optimization interventions. Achieved R² of 0.9999 with comprehensive energy consumption predictions and optimization strategy analysis.",
  },
  {
    title: "Tuberculosis Detection using XAI",
    link: "https://github.com/khushi-upadhyay/tuberculosis-detection-xai",
    thumbnail: "/images/projects/editofy.jpeg",
    skills: "Deep Learning, DenseNet, ResNet, XAI, Grad-CAM, LIME, SHAP",
    description: "Engineered and optimized deep learning models for accurate Tuberculosis detection from chest X-rays. Implemented advanced XAI techniques to enhance model interpretability. Achieved 96.97% test accuracy with DenseNet-121 and comprehensive visualization of critical areas.",
  },
  {
    title: "Editofy - Image Editor",
    link: "https://github.com/khushi-upadhyay/editofy-image-editor-flask-opencv",
    thumbnail: "/images/projects/editofy.jpeg",
    skills: "Flask, OpenCV, Python, Numpy, Pandas, Scikit-learn, MATLAB",
    description: "Advanced image editing application with AI-powered features and computer vision capabilities. Built with Flask backend and OpenCV for real-time image processing. Features include filters, transformations, and AI-enhanced editing tools.",
  },
  {
    title: "Scrumdinger - iOS App",
    link: "https://github.com/khushi-upadhyay/scrumdinger",
    thumbnail: "/images/projects/scrumdinger.jpeg",
    skills: "Swift, Figma, SwiftUI, StoryBoard, iOS Development",
    description: "iOS application for Scrum methodology management and team collaboration. Features include sprint planning, task management, and team coordination tools. Built with modern iOS development practices and intuitive user interface.",
  },
  {
    title: "Real Estate Housing Price Prediction",
    link: "https://github.com/khushi-upadhyay/Real-Estate-Housing-Price",
    thumbnail: "/images/projects/real.jpeg",
    skills: "Machine Learning, Python, Pandas, Numpy, Matplotlib, Scikit-learn",
    description: "ML model for predicting housing prices using various features and market data. Implemented with advanced regression techniques and comprehensive data analysis. Provides accurate price predictions based on location, features, and market trends.",
  },
  {
    title: "Portfolio Website",
    link: "https://github.com/khushi-upadhyay/portfolio",
    thumbnail: "/images/projects/portfolio.jpeg",
    skills: "Next.js, Tailwind CSS, React.js, HTML, CSS, TypeScript",
    description: "Modern, responsive portfolio website showcasing projects and skills. Built with Next.js and Tailwind CSS for optimal performance and design. Features smooth animations, dark theme, and comprehensive project showcase.",
  },
];
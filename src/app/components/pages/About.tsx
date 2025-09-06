"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function About() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ["iOS Developer", "ML Enthusiast", "Designer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
    }, [roles.length]);

  const typewriterWords = [
    {
      text: "Hey!",
      className: "text-gray-900 dark:text-white",
    },
    {
      text: "I'm",
      className: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
    },
    {
      text: "Khushi",
      className: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
    },
    {
      text: "Upadhyay",
      className: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
    },
  ];

  return (
    <div id="About" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-purple-100/20 to-pink-100/20 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating 3D elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Abstract shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-gradient-to-br from-pink-400/25 to-purple-400/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto w-full">
          {/* Top section - Hey Khushi line centered */}
          <div className="text-center mb-16">
            <div className="text-6xl md:text-8xl font-bold">
              <TypewriterEffect words={typewriterWords} />
            </div>
          </div>

          {/* Main content section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left side - iOS Developer text */}
            <div className="lg:col-span-1 space-y-6">
              {/* Subtitle with flip animation */}
              <div className="text-2xl md:text-3xl font-medium h-12 flex items-center justify-center lg:justify-start">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-500 transform font-bold">
                  {roles[currentRole]}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-full text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm">
                  Infosys
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30 rounded-full text-green-700 dark:text-green-300 text-sm font-medium backdrop-blur-sm">
                  NIT
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium backdrop-blur-sm">
                  IIIT Nagpur
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-400/30 rounded-full text-pink-700 dark:text-pink-300 text-sm font-medium backdrop-blur-sm">
                  Co-founder @ Recap
                </span>
              </div>

              {/* Description */}
              <div className="max-w-lg mx-auto lg:mx-0">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  Passionate about creating innovative solutions that make a difference. 
                  Specializing in iOS development and machine learning, I love turning complex problems into elegant, user-friendly applications.
                </p>
              </div>
            </div>


            {/* Center - Empty space */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Right side - K circle */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Glass avatar container */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full backdrop-blur-xl border border-white/20 dark:border-white/20 shadow-2xl">
                  {/* Avatar placeholder - you can replace this with your actual avatar */}
                  <div className="absolute inset-4 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center overflow-hidden">
                      <Image
                        src="/images/avatar-1.png"
                        alt="Avatar"
                        width={96}
                        height={96}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9999px" }}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Laptop */}
                <div className="absolute -bottom-8 -right-8 w-32 h-20 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-lg shadow-2xl border border-gray-400/50 dark:border-gray-600/50">
                  <div className="absolute inset-2 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-md flex items-center justify-center">
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-400/40 to-pink-400/40 rounded-full blur-sm animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400/40 to-purple-400/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

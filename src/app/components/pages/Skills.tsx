"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

interface SkillCategories {
  [key: string]: Skill[];
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skillCategories: SkillCategories = {
    'Programming Languages': [
      { name: 'Swift', icon: '/images/skills/swift.svg', level: 90 },
      { name: 'Python', icon: '/images/skills/python.svg', level: 85 },
      { name: 'JavaScript', icon: '/images/skills/javascript.svg', level: 80 },
      { name: 'TypeScript', icon: '/images/skills/typescript.svg', level: 75 },
      { name: 'Java', icon: '/images/skills/java.svg', level: 70 },
      { name: 'C++', icon: '/images/skills/c++.svg', level: 65 },
      { name: 'C', icon: '/images/skills/c.svg', level: 60 }
    ],
    'Frameworks & Libraries': [
      { name: 'SwiftUI', icon: '/images/skills/swift.svg', level: 90 },
      { name: 'UIKit', icon: '/images/skills/swift.svg', level: 85 },
      { name: 'React', icon: '/images/skills/react.svg', level: 80 },
      { name: 'Next.js', icon: '/images/skills/nextjs.svg', level: 75 },
      { name: 'TensorFlow', icon: '/images/skills/tensorflow.svg', level: 70 },
      { name: 'PyTorch', icon: '/images/skills/pytorch.svg', level: 65 }
    ],
    'Tools & Technologies': [
      { name: 'Git', icon: '/images/skills/git.svg', level: 85 },
      { name: 'Firebase', icon: '/images/skills/firebase.svg', level: 80 },
      { name: 'MongoDB', icon: '/images/skills/mongodb.svg', level: 75 },
      { name: 'SQL', icon: '/images/skills/sql.svg', level: 70 },
      { name: 'Docker', icon: '/images/skills/docker.svg', level: 65 },
      { name: 'Jira', icon: '/images/skills/jira.svg', level: 80 }
    ],
    'Design & Others': [
      { name: 'Figma', icon: '/images/skills/figma.svg', level: 75 },
      { name: 'Linux', icon: '/images/skills/linux-tux.svg', level: 80 },
      { name: 'AWS', icon: '/images/skills/aws.svg', level: 65 }
    ]
  };

  const allSkills = Object.values(skillCategories).flat();

  const getSkillsToShow = (): Skill[] => {
    if (activeCategory === 'all') return allSkills;
    return skillCategories[activeCategory] || [];
  };

  const CircularProgress = ({ skill, size = 100 }: { skill: Skill; size?: number }) => {
    const radius = (size - 12) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = (skill.level / 100) * circumference;
    const strokeDasharray = `${progress} ${circumference}`;

    return (
      <div className="relative group cursor-pointer" onClick={() => setSelectedSkill(skill)}>
        <svg className="transform -rotate-90 w-full h-full" width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(0, 0, 0, 0.1)"
            strokeWidth="4"
            fill="transparent"
            className="dark:stroke-white/10"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="4"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content - only icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-white/10 border border-white/30 dark:border-white/30 flex items-center justify-center">
            <Image
              src={skill.icon}
              alt={skill.name}
              width={16}
              height={16}
              className="w-4 h-4 object-contain"
            />
          </div>
        </div>
        
        {/* Percentage overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 dark:bg-black/20 rounded-full">
          <span className="text-white font-bold text-sm">{skill.level}%</span>
        </div>
      </div>
    );
  };

  return (
    <div id="Skills" className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-purple-100/20 to-pink-100/20 dark:from-gray-900/50 dark:via-purple-900/20 dark:to-pink-900/20"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-12 h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-center text-gray-900 dark:text-white mb-16">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', ...Object.keys(skillCategories)].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white shadow-lg'
                  : 'bg-white/10 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-white/20 border border-white/20 dark:border-white/20'
              }`}
            >
              {category === 'all' ? 'All Skills' : category}
            </button>
          ))}
        </div>

        {/* Skills Grid - 7 icons per row */}
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {getSkillsToShow().map((skill: Skill, index: number) => (
            <div
              key={skill.name}
              className="flex flex-col items-center"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <CircularProgress skill={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-md w-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-white/20 dark:border-white/20 p-8">
            <button
              onClick={() => setSelectedSkill(null)}
              className="absolute top-4 right-4 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white text-2xl z-10"
            >
              ×
            </button>
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto">
                <CircularProgress skill={selectedSkill} size={128} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{selectedSkill.name}</h3>
                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {selectedSkill.level}%
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


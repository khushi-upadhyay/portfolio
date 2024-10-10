"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconAward, IconPhone } from "@tabler/icons-react"; // Added new icons

export function Nav() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Achievements",
      link: "/Achievements",
      icon: <IconAward className="h-4 w-4 text-neutral-500 dark:text-white" />, },
    {
      name: "Skills",
      link: "/Skills",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />, // Kept existing icon for Skills
    },
    {
      name: "Experience",
      link: "/Experience",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />, // Changed icon for Experience
    },
    {
      name: "Contact",
      link: "/Form",
      icon: <IconPhone className="h-4 w-4 text-neutral-500 dark:text-white" />, // Changed icon for Contact
    },
  ];
  
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

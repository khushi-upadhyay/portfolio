"use client";

import React, { useEffect, useState } from "react";
import { HeroParallax } from "@/app/components/ui/hero-parallax";
import axios from "axios";

export default function Page() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/projects"); // Fetch from your API
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950" id="Projects">
      {projects.length > 0 ? (
        <HeroParallax products={projects} /> // Pass the dynamically fetched projects
      ) : (
        <p className="text-neutral-600 dark:text-neutral-300">Loading projects...</p>
      )}
    </div>
  );
}

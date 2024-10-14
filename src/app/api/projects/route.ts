// import DBInstance from "@/utils/db/server";
// import { NextResponse } from "next/server";
// const Projects = require("@/utils/models/projects.models");

// // Initialize the database connection
// DBInstance();

// // GET: Fetch all projects
// export async function GET(req: Request) {
//   try {
//     const ProjectsData = await Projects.find();

//     if (ProjectsData.length > 0) {
//       return NextResponse.json({
//         message: "GET Success",
//         data: ProjectsData,
//       });
//     } else {
//       return NextResponse.json(
//         { message: "No Projects found" },
//         { status: 404 }
//       );
//     }
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json(
//       { message: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

// // POST: Add new projects
// export async function POST(req: Request) {
//   try {
//     const body = await req.json(); // Parse the request body

//     // Check if the body is an array; if not, wrap it into an array for consistent processing
//     const projects = Array.isArray(body) ? body : [body];

//     // Validate each project in the array
//     const invalidProjects = projects.filter(
//       (project) => !project.title || !project.link || !project.thumbnail || !project.skills
//     );

//     if (invalidProjects.length > 0) {
//       console.log('Missing fields in the following projects:', invalidProjects);
//       return NextResponse.json(
//         { message: "Missing required fields in some projects", data: invalidProjects },
//         { status: 400 }
//       );
//     }

//     // Create new project documents
//     const newProjects = projects.map((project) => {
//       return new Projects({
//         title: project.title,
//         link: project.link,
//         thumbnail: project.thumbnail,
//         skills: project.skills,
//       });
//     });

//     // Save the projects to the database
//     const savedProjects = await Projects.insertMany(newProjects);

//     // Return the created project data
//     return NextResponse.json(
//       { message: "Projects created successfully", data: savedProjects },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.error("Error in POST:", err);
//     const errorMessage = (err as Error)?.message || "Internal server error";
//     return NextResponse.json(
//       { message: "Failed to create projects", error: errorMessage },
//       { status: 500 }
//     );
//   }
// }



import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
import Projects, { keepDuplicateData } from "@/utils/models/projects.models";

// Initialize the database connection
DBInstance();

// GET: Fetch all projects
export async function GET(req: Request) {
  try {
    const ProjectsData = await Projects.find();

    if (ProjectsData.length > 0) {
      return NextResponse.json({
        message: "GET Success",
        data: ProjectsData,
      });
    } else {
      return NextResponse.json(
        { message: "No Projects found" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST: Add new projects
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse the request body

    // Check if the body is an array; if not, wrap it into an array for consistent processing
    const projects = Array.isArray(body) ? body : [body];

    // Validate each project in the array
    const invalidProjects = projects.filter(
      (project) => !project.title || !project.link || !project.thumbnail || !project.skills
    );

    if (invalidProjects.length > 0) {
      console.log('Missing fields in the following projects:', invalidProjects);
      return NextResponse.json(
        { message: "Missing required fields in some projects", data: invalidProjects },
        { status: 400 }
      );
    }

    // Check for duplicates before saving
    await Promise.all(projects.map((project) => keepDuplicateData(project.title)));

    // Create new project documents
    const newProjects = projects.map((project) => {
      return new Projects({
        title: project.title,
        link: project.link,
        thumbnail: project.thumbnail,
        skills: project.skills,
      });
    });

    // Save the projects to the database
    const savedProjects = await Projects.insertMany(newProjects);

    // Return the created project data
    return NextResponse.json(
      { message: "Projects created successfully", data: savedProjects },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error in POST:", err);
    const errorMessage = (err as Error)?.message || "Internal server error";
    return NextResponse.json(
      { message: "Failed to create projects", error: errorMessage },
      { status: 500 }
    );
  }
}

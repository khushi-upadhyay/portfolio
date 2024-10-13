// import mongoose from "@/utils/db/mongoose";

// // Define the schema for projects, allowing duplicate titles
// const projectsSchema = new mongoose.Schema(
//   {
//     title: {
//       type: String,
//       required: [true, "A project must have a title"],
//       trim: true,
//       index: false, // Explicitly stating that this field should not be indexed as unique
//     },
//     link: {
//       type: String,
//       required: [true, "A project must have a link"],
//     },
//     thumbnail: {
//       type: String,
//       required: [true, "A project must have a thumbnail"],
//     },
//     skills: {
//       type: String,
//       required: [true, "A project must have skills listed"],
//     },
//   },
//   {
//     collection: "projects",
//   }
// );

// projectsSchema.index({ title: 1 }, { unique: false });

// // Create the model
// const Projects = mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

// module.exports = Projects;




import mongoose from "@/utils/db/mongoose";

// Define the schema for projects, allowing duplicate titles
const projectsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A project must have a title"],
      trim: true,
    },
    link: {
      type: String,
      required: [true, "A project must have a link"],
    },
    thumbnail: {
      type: String,
      required: [true, "A project must have a thumbnail"],
    },
    skills: {
      type: String,
      required: [true, "A project must have skills listed"],
    },
  },
  {
    collection: "projects",
  }
);

// No index on title
// projectsSchema.index({ title: 1 }, { unique: false }); // Remove this line

// Create the model
const Projects = mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

module.exports = Projects;

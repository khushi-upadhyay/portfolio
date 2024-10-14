import mongoose, { Document, Schema } from "mongoose";
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

const Projects = mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

export const keepDuplicateData = async (title: string): Promise<void> => {
  const duplicates = await Projects.aggregate([
    {
      $match: { title: title },
    },
    {
      $group: {
        _id: "$title",
        ids: { $push: "$_id" },
        count: { $sum: 1 },
      },
    },
    {
      $match: { count: { $gt: 1 } },
    },
  ]);

  duplicates.forEach((doc: { ids: mongoose.Types.ObjectId[]; _id: string }) => {
    doc.ids.forEach((id: mongoose.Types.ObjectId, index: number) => {
      Projects.updateOne(
        { _id: id },
        { $set: { title: `${doc._id} (${index + 1})` } } // Append a number to the duplicate title
      );
    });
  });
};

export default Projects;

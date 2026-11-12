import { IProject } from "@/types";
import connectdb from "@/database/connection";
import Project from "@/models/project";
import { FALLBACK_PROJECTS } from "./project";

export default async function getSingleProject(
  id: string
): Promise<IProject | null> {
  try {
    await connectdb();
    const project = await Project.findById(id).lean();
    if (project) {
      return JSON.parse(JSON.stringify(project));
    }
  } catch (err) {
    console.warn("Direct DB single project fetch fallback triggered:", err);
  }

  // Fallback to in-memory verified projects
  const found = FALLBACK_PROJECTS.find(
    (p) => String(p._id) === id || p.title.toLowerCase().replace(/\s+/g, "-") === id
  );

  return found || null;
}

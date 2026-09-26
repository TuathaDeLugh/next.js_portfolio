import { IProject } from "@/types";

export default async function getSingleProject(
  id: string
): Promise<IProject | null> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/projects/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const project = await response.json();
    return project.data || null;
  } catch (error) {
    console.error("Error fetching single project:", error);
    return null;
  }
}

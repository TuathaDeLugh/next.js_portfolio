import { IProject } from "@/types";

interface GetProjectsOptions {
  all?: boolean;
}

export default async function getProjects(
  options: GetProjectsOptions = {}
): Promise<IProject[]> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const url = new URL(`${api}/api/projects`);
    url.searchParams.append("sort", "-1");
    if (options.all) {
      url.searchParams.append("all", "true");
    }
    const response = await fetch(url.toString(), {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const projects = await response.json();
    return projects.data || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

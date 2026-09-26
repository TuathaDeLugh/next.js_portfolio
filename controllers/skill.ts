import { ISkill } from "@/types";

export default async function getSkills(): Promise<ISkill[]> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/skills`, {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const skill = await response.json();
    return skill.data || [];
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}

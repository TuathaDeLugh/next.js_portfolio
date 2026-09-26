import { IExperience } from "@/types";

export default async function getExps(): Promise<IExperience[]> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/exp`, {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const exp = await response.json();
    return exp.data || [];
  } catch (error) {
    console.error("Error fetching experiences:", error);
    return [];
  }
}

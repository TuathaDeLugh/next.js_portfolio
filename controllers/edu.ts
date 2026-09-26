export interface IEdu {
  _id: string;
  degree: string;
  place: string;
  marks: string;
}

export default async function getEdus(): Promise<IEdu[]> {
  try {
    const api = process.env.API_URL || "http://localhost:3000";
    const response = await fetch(`${api}/api/edu`, {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const edu = await response.json();
    return edu.data || [];
  } catch (error) {
    console.error("Error fetching edus:", error);
    return [];
  }
}

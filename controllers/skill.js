export default async function getSkills() {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/skills`, {
        cache: "no-store",
      });
      const skill = await response.json();
      return skill.data;
    } catch (error) {
      console.log(error);
    }
  }
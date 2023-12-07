export default async function getProjects() {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/projects?sort=-1`, 
      {
        cache: "no-store",
      });
      const projects = await response.json();
      return projects.data;
    } catch (error) {
      console.log(error);
    }
  }
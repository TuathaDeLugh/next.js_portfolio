export default async function getSingleProject(id) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/projects/${id}`, 
      {
        cache: "no-store",
      });
      const project = await response.json();
      return project.data;
    } catch (error) {
      console.log(error);
    }
  }
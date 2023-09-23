export default async function getProjects() {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/projects`, 

      // const response = await fetch("http://localhost:3000/api/projects", 

      // const response = await fetch("https://umangsailor-try.vercel.app/api/projects", 
      {
        cache: "no-store",
      });
      const projects = await response.json();
      return projects.data;
    } catch (error) {
      console.log(error);
    }
  }
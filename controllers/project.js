export default async function getProjects(options = {}) {
    try {
      const api = process.env.API_URL;
      const url = new URL(`${api}/api/projects`);
      url.searchParams.append('sort', '-1');
      if (options.all) {
        url.searchParams.append('all', 'true');
      }
      const response = await fetch(url.toString(), 
      {
        cache: "no-store",
      });
      const projects = await response.json();
      return projects.data;
    } catch (error) {
      console.log(error);
    }
  }
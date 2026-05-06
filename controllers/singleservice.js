export default async function getSingleService(id) {
    try {
      const api = process.env.API_URL || 'http://localhost:3000';
      const response = await fetch(`${api}/api/services/${id}`, {
        cache: "no-store",
      });
      if(!response.ok) return null;
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

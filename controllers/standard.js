export default async function getStandards() {
    try {
      const api = process.env.API_URL || 'http://localhost:3000';
      const response = await fetch(`${api}/api/standards`, {
        cache: "no-store",
      });
      if(!response.ok) return [];
      const data = await response.json();
      return data.data || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

export default async function getSingleExp(id) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/exp/${id}`, {
        cache: "no-store",
      });
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }

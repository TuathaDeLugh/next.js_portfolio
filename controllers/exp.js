export default async function getExps() {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/exp`, {
        cache: "no-store",
      });
      const edu = await response.json();
      return edu.data;
    } catch (error) {
      console.log(error);
    }
  }
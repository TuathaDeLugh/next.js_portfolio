export default async function getSingleEdu(id) {
    try {
      const api = process.env.API_URL;
      const response = await fetch(`${api}/api/edu/${id}`, 
      {
        cache: "no-store",
      });
      const edu = await response.json();
      return edu.data;
    } catch (error) {
      console.log(error);
    }
  }
export default async function getEmails() {
    try {
      const response = await fetch("https://umangsailor-try.vercel.app/api/email", {
        cache: "no-store",
      });
      const email = await response.json();
      return email.data;
    } catch (error) {
      console.log(error);
    }
  }
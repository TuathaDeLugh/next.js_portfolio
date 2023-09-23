export default async function getEmails() {
    try {
      const response = await fetch("https://umangsailor-try.vercel.app/api/email", {
        cache: "no-store",
      });
      const emails = await response.json();
      return emails.data;
    } catch (error) {
      console.log(error);
    }
  }
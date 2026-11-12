import { IExperience } from "@/types";
import connectdb from "@/database/connection";
import Experience from "@/models/experience";

export const FALLBACK_EXPERIENCES: IExperience[] = [
  {
    _id: "67d852ca3eb142e3bb925329",
    orgName: "WeeTech Solution",
    address: "Surat, Gujarat, India",
    position: "Web Application Developer",
    duration: {
      start: "2024-12-09",
      end: "Present",
    },
    summary:
      "Core developer engineering production React.js and modern frontend architectures with Material UI, TypeScript, and state management pipelines. Collaborated directly with cross-functional teams to deliver enterprise client web portals with high uptime and strict sprint deadlines.",
  },
  {
    _id: "69dfd3c9f4598ef7131b934b",
    orgName: "Freelance & Independent Consulting",
    address: "Remote / Surat, India",
    position: "Full Stack Engineer",
    duration: {
      start: "2023-09-15",
      end: "2024-11-30",
    },
    summary:
      "Engineered full-stack solutions with Express.js, Next.js, Node.js, and MongoDB/PostgreSQL. Converted high-fidelity Figma design systems into pixel-perfect, accessible, and responsive production code. Built custom REST APIs, auth flows, and integrated third-party payment and messaging webhooks.",
  },
];

export default async function getExps(): Promise<IExperience[]> {
  try {
    await connectdb();
    const docs = await Experience.find().sort({ "duration.start": -1 }).lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (err) {
    console.warn("Direct DB exp fetch fallback triggered:", err);
  }

  return FALLBACK_EXPERIENCES;
}

import { IExperience } from "@/types";
import connectdb from "@/database/connection";
import Experience from "@/models/experience";

export const FALLBACK_EXPERIENCES: IExperience[] = [
  {
    _id: "67d852ca3eb142e3bb925329",
    orgName: "WeeTech Solution",
    address: "Surat, Gujarat, India",
    position: "Senior Web Application Engineer",
    duration: {
      start: "2024-12-09",
      end: "Present",
    },
    summary:
      "Leading modern frontend architectures and high-performance React.js / Next.js web applications with strict TypeScript typing, state orchestration pipelines, and Material UI design systems. Architecting reusable enterprise component libraries, optimizing client-side render cycles to maintain zero layout reflow, and enforcing strict code review standards across cross-functional engineering squads.",
  },
  {
    _id: "69dfd3c9f4598ef7131b934b",
    orgName: "Independent Systems Architect & Technical Consultant",
    address: "Surat, India / Distributed",
    position: "Full-Stack Software Architect",
    duration: {
      start: "2023-09-15",
      end: "2024-11-30",
    },
    summary:
      "Architected and deployed full-stack distributed systems with Nest.js, Express.js, Next.js, PostgreSQL, and MongoDB. Designed event-driven messaging pipelines, implemented zero-trust JWT session security, optimized relational database query indexing, and translated complex design systems into responsive, accessible, and mathematically deterministic web applications.",
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

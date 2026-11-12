import { ISkill } from "@/types";
import connectdb from "@/database/connection";
import Skill from "@/models/skills";

export const FALLBACK_SKILLS: ISkill[] = [
  { _id: "sk1", lang: "React 19" },
  { _id: "sk2", lang: "Next.js 16" },
  { _id: "sk3", lang: "TypeScript" },
  { _id: "sk4", lang: "JavaScript (ES6+)" },
  { _id: "sk5", lang: "Tailwind CSS" },
  { _id: "sk6", lang: "Motion for React" },
  { _id: "sk7", lang: "GSAP 3" },
  { _id: "sk8", lang: "Shadcn / Radix UI" },
  { _id: "sk9", lang: "Redux & RTK Query" },
  { _id: "sk10", lang: "HTML5 & Modern CSS3" },
  { _id: "sk11", lang: "SASS / SCSS" },
  { _id: "sk12", lang: "Node.js" },
  { _id: "sk13", lang: "Express.js" },
  { _id: "sk14", lang: "Nest.js" },
  { _id: "sk15", lang: "REST APIs" },
  { _id: "sk16", lang: "Microservices" },
  { _id: "sk17", lang: "NX Monorepo" },
  { _id: "sk18", lang: "MongoDB & Mongoose" },
  { _id: "sk19", lang: "PostgreSQL" },
  { _id: "sk20", lang: "MySQL" },
  { _id: "sk21", lang: "Firebase" },
  { _id: "sk22", lang: "Prisma ORM" },
  { _id: "sk23", lang: "Docker" },
  { _id: "sk24", lang: "Kubernetes (Fundamentals)" },
  { _id: "sk25", lang: "Git & GitHub" },
  { _id: "sk26", lang: "GitLab" },
  { _id: "sk27", lang: "Postman" },
  { _id: "sk28", lang: "Material UI (MUI)" },
  { _id: "sk29", lang: "Storybook" },
];

export default async function getSkills(): Promise<ISkill[]> {
  try {
    await connectdb();
    const docs = await Skill.find().lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (err) {
    console.warn("Direct DB skills fetch fallback triggered:", err);
  }

  return FALLBACK_SKILLS;
}

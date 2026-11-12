import { IService } from "@/types";
import connectdb from "@/database/connection";
import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  color: String,
});

const Service =
  mongoose.models.Service || mongoose.model("Service", ServiceSchema);

export const FALLBACK_SERVICES: IService[] = [
  {
    _id: "s1",
    icon: "PiDesktopTowerBold",
    title: "Full-Stack Web Engineering",
    desc: "End-to-end applications built with React 19, Next.js, TypeScript, Node.js, and Nest.js. Engineered for zero layout shift, low latency, and robust type safety.",
    color: "bg-emerald-500",
  },
  {
    _id: "s2",
    icon: "PiChalkboardBold",
    title: "Design Systems & UI Engineering",
    desc: "Component-driven design systems with Tailwind CSS, Radix/Shadcn primitives, and intentional micro-interactions that feel responsive and tactile.",
    color: "bg-blue-500",
  },
  {
    _id: "s3",
    icon: "PiTreeStructure",
    title: "API & Distributed Architecture",
    desc: "Scalable REST & microservice architectures with NX Monorepo tooling, efficient database schemas in PostgreSQL & MongoDB, and caching strategies.",
    color: "bg-purple-500",
  },
  {
    _id: "s4",
    icon: "PiFileTextBold",
    title: "Performance & Technical Specs",
    desc: "Rigorous performance profiling, Core Web Vitals optimization, and clear technical documentation including ER diagrams, architecture flowcharts, and API contracts.",
    color: "bg-amber-500",
  },
];

export default async function getServices(): Promise<IService[]> {
  try {
    await connectdb();
    const docs = await Service.find().lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (err) {
    console.warn("Direct DB services fetch fallback triggered:", err);
  }

  return FALLBACK_SERVICES;
}

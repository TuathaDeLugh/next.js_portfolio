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
    title: "Full-Stack Web Engineering & Systems Architecture",
    desc: "Architecting end-to-end distributed applications with React 19, Next.js 16, TypeScript, Node.js, and NestJS. Engineered with deterministic state machines, sub-40ms P99 latency, zero layout shift, and compile-time type safety.",
    color: "bg-luxury-gold",
  },
  {
    _id: "s2",
    icon: "PiChalkboardBold",
    title: "Design Systems & High-Precision UI Engineering",
    desc: "Translating sophisticated design language into scalable, accessible design systems using Tailwind CSS, Radix primitives, and custom GSAP micro-interactions with hardware-accelerated, sub-16ms physics.",
    color: "bg-luxury-champagne",
  },
  {
    _id: "s3",
    icon: "PiTreeStructure",
    title: "Distributed Microservices & Event-Driven APIs",
    desc: "Designing resilient REST, GraphQL, and WebSocket architectures isolated through NX Monorepos. Managing relational schema migrations in PostgreSQL, document models in MongoDB, and transactional data integrity.",
    color: "bg-luxury-bronze",
  },
  {
    _id: "s4",
    icon: "PiFileTextBold",
    title: "Performance Profiling & Architectural Invariants",
    desc: "In-depth runtime profiling, memory leak mitigation, Core Web Vitals optimization, and comprehensive architecture specifications including ER diagrams, event topology flowcharts, and strict API contracts.",
    color: "bg-luxury-shimmer",
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

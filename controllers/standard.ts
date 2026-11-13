import { IStandard } from "@/types";
import connectdb from "@/database/connection";
import mongoose from "mongoose";

const StandardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const Standard =
  mongoose.models.Standard || mongoose.model("Standard", StandardSchema);

export const FALLBACK_STANDARDS: IStandard[] = [
  {
    _id: "std1",
    title: "Sub-100ms Perceived Latency & Zero Layout Shift",
    desc: "Every interaction provides instantaneous tactile feedback. Streaming Server Components, speculative prefetching, and deterministic layout dimensions eliminate visual reflow.",
  },
  {
    _id: "std2",
    title: "End-to-End Compile-Time Type Invariants",
    desc: "Strict TypeScript across client, server, and database boundaries guarantees compile-time error detection, fearless refactoring, and self-documenting architectures.",
  },
  {
    _id: "std3",
    title: "Deterministic State & Modular Isolation",
    desc: "Components and services are decoupled via predictable state machines, functional immutability, and NX monorepo module boundaries with strictly enforced dependency graphs.",
  },
  {
    _id: "std4",
    title: "Hardened Zero-Trust Security Boundaries",
    desc: "Multi-layered defensive architecture: cryptographically salted passkeys, stateless JWT lifecycles, strict CORS/CSP policies, and comprehensive input sanitization at every boundary.",
  },
  {
    _id: "std5",
    title: "Distributed Fault-Tolerance & Data Integrity",
    desc: "Relational foreign-key constraints in PostgreSQL, connection pooling resilience, atomic ACID transactions, and graceful degradations ensure continuous system availability.",
  },
  {
    _id: "std6",
    title: "Kinetic Restraint & Purposeful Motion Physics",
    desc: "Animations are never decorative fluff. Every GSAP tween serves spatial orientation, adheres to real-world inertia, stays within a deterministic frame budget, and respects prefers-reduced-motion.",
  },
];

export default async function getStandards(): Promise<IStandard[]> {
  try {
    await connectdb();
    const docs = await Standard.find().lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (err) {
    console.warn("Direct DB standards fetch fallback triggered:", err);
  }

  return FALLBACK_STANDARDS;
}

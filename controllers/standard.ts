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
    title: "Sub-100ms Perceived Performance",
    desc: "Every interaction provides immediate visual feedback. Server-rendered layouts, smart caching, and code-splitting eliminate sluggishness.",
  },
  {
    _id: "std2",
    title: "Strict End-to-End Type Safety",
    desc: "TypeScript throughout the entire stack ensures compile-time error catching, dependable refactoring, and self-documenting codebases.",
  },
  {
    _id: "std3",
    title: "Responsive by Architectural Intent",
    desc: "Interfaces adapt organically from mobile touchscreens to ultrawide monitors without awkward cutoffs or scaled-down compromises.",
  },
  {
    _id: "std4",
    title: "Hardened Security Foundations",
    desc: "Secure authentication, session lifecycle, CSRF/XSS defense, input validation, and credential sanitization at every API boundary.",
  },
  {
    _id: "std5",
    title: "Scalable Monorepo & Microservice Patterns",
    desc: "Leveraging structured modules and monorepo workflows (NX) to keep enterprise-scale codebases maintainable, testable, and modular.",
  },
  {
    _id: "std6",
    title: "Motion with Purpose & Restraint",
    desc: "Animations respect physics and user intent, staying under 300ms, using custom cubic curves, and honoring prefers-reduced-motion.",
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

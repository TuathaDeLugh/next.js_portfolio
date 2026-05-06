import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });
dotenv.config({ path: ".env" });

const MONGODB_URI = process.env.MONGO_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGO_URI environment variable inside .env.local");
  process.exit(1);
}

const ServiceSchema = new mongoose.Schema({
  title: String,
  desc: String,
  icon: String,
  color: String,
});

const StandardSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const Service = mongoose.models.Service || mongoose.model("Service", ServiceSchema);
const Standard = mongoose.models.Standard || mongoose.model("Standard", StandardSchema);

const services = [
  {
    icon: "PiChalkboardBold",
    title: "UI/UX Design",
    desc: "Pixel-perfect, responsive interfaces built with TailwindCSS and modern design principles for every viewport.",
    color: "bg-green-500",
  },
  {
    icon: "PiDesktopTowerBold",
    title: "Full Stack Development",
    desc: "End-to-end web apps with React, Next.js on the front and Node.js, MongoDB on the back.",
    color: "bg-blue-500",
  },
  {
    icon: "PiTreeStructure",
    title: "API & System Architecture",
    desc: "Scalable APIs and distributed systems using Microservices and Monorepo structures for enterprise applications.",
    color: "bg-purple-500",
  },
  {
    icon: "PiFileTextBold",
    title: "Technical Docs",
    desc: "Complete SRS documentation with ER diagrams, Use Case, Activity, and DFD diagrams when needed.",
    color: "bg-amber-500",
  },
];

const standards = [
  {
    title: "Modern Tech Stack",
    desc: "Using the latest frameworks and best practices for performance and scalability.",
  },
  {
    title: "Responsive by Default",
    desc: "Every interface adapts seamlessly across desktops, tablets and smartphones.",
  },
  {
    title: "Cross-Browser Compatible",
    desc: "Thoroughly tested on Chrome, Firefox, Safari and Edge for consistent results.",
  },
  {
    title: "Security First",
    desc: "Auth, data protection, and vulnerability prevention built into every layer.",
  },
  {
    title: "Scalable Architecture",
    desc: "Leveraging Microservices and Monorepo (like NX Workspace) to build maintainable, large-scale systems.",
  },
  {
    title: "Speed Optimized",
    desc: "Lazy loading, code splitting, and smart caching ensure blazing-fast load times.",
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB.");

    await Service.deleteMany({});
    await Standard.deleteMany({});
    console.log("Cleared existing data.");

    await Service.insertMany(services);
    await Standard.insertMany(standards);
    console.log("Data inserted successfully.");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seed();

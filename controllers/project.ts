import { IProject } from "@/types";
import connectdb from "@/database/connection";
import Project from "@/models/project";

export const FALLBACK_PROJECTS: IProject[] = [
  {
    _id: "69fb78c78be5cbc968d30fd5",
    title: "Vibe Message",
    info: "Modern Push Notification Infrastructure & Real-Time Delivery SDK",
    technology: "TypeScript, React.js, Tailwind CSS, Motion, Node.js, Nest.js, PostgreSQL",
    github: "https://github.com/sailorlabs-in/vibe-message",
    summary:
      "A developer-first real-time push notification infrastructure platform. Built with Nest.js microservices, PostgreSQL with connection pooling, and a high-performance React dashboard with spring-driven telemetry. Supports multi-channel routing, token lifecycle management, and payload delivery analytics.",
    image: {
      name: "vibemessage.png",
      link: "/vibemessage.png",
    },
    livedemo: "https://vibemessage.sailorlabs.in/",
    archived: false,
    createdAt: "2026-04-15T18:07:05.768Z",
  },
  {
    _id: "66937e2cabc7ed0d7791729f",
    title: "Blog Forge",
    info: "Full-Stack Content Creation & Publishing Platform",
    technology: "TypeScript, Next.js, Tailwind CSS, MongoDB, NodeMailer, Motion, Quill",
    github: "https://github.com/TuathaDeLugh/blogforge",
    summary:
      "A full-stack editorial publishing application featuring rich-text composition with custom media plugins, instant previewing, dynamic category taxonomies, and transactional email notifications via NodeMailer. Engineered with server-rendered SEO optimizations and responsive typography.",
    image: {
      name: "Blogforge.png",
      link: "/Blogforge.png",
    },
    livedemo: "https://blogforge.umangsailor.com",
    archived: false,
    createdAt: "2024-07-15T12:00:00.000Z",
  },
  {
    _id: "6560d710fd896164e3867aae",
    title: "Spirited Score",
    info: "Curated Anime Analytics & Community Scoring Platform",
    technology: "JavaScript, Next.js 14, Tailwind CSS, MongoDB, Firebase Auth",
    github: "https://github.com/TuathaDeLugh/spritedscore",
    summary:
      "A media discovery and review portal serving thousands of titles. Features dynamic search with debounced indexing, user review weighting algorithms, Firebase authentication, and a responsive dark-mode UI with fluid image galleries.",
    image: {
      name: "SpiritedScore.png",
      link: "/SpiritedScore.png",
    },
    livedemo: "https://spiritedscore.umangsailor.com",
    archived: false,
    createdAt: "2023-11-24T12:00:00.000Z",
  },
  {
    _id: "668ceaf19185835b14ab4043",
    title: "Keyboard Tester",
    info: "Hardware Switch Diagnostics & Anti-Ghosting Matrix Analyzer",
    technology: "Next.js, Tailwind CSS, TypeScript, Web Audio API",
    github: "https://github.com/TuathaDeLugh/keyboard-tester",
    summary:
      "An interactive browser-based hardware diagnostic tool that tests mechanical switch actuation, key roll-over (NKRO), latency response times, and ghosting artifacts. Used by enthusiasts and gamers for switch validation.",
    image: {
      name: "code.png",
      link: "/code.png",
    },
    livedemo: "https://keyboardtester.vercel.app/",
    archived: false,
    createdAt: "2024-07-09T13:13:22.000Z",
  },
  {
    _id: "6560d0affd896164e3867a92",
    title: "Life Saver",
    info: "Blood & Organ Donation Logistics Network",
    technology: "HTML5, CSS3, JavaScript, PHP, Firebase, Android, Material Design",
    github: "https://github.com/tuathadelugh/life_saver",
    summary:
      "A life-critical coordination system connecting verified donors with recipients and emergency blood banks. Features real-time proximity matchmaking, urgent dispatch alerts, and dual web and mobile client interfaces.",
    image: {
      name: "lifesaver.png",
      link: "https://bucket.umangsailor.com/storage/portfolio/projects/lifesaver.png",
    },
    livedemo: "https://drive.google.com/drive/folders/1ZEMbBpjXK8hh_ubUhaCOACVmIKj-4SYd?usp=sharing",
    archived: true,
    createdAt: "2023-11-24T11:00:00.000Z",
  },
  {
    _id: "6519977eaf97ebe8feb6735c",
    title: "Notes App",
    info: "Minimalist Productivity & Task Capture System",
    technology: "React.js, TypeScript, Material UI, LocalStorage Sync",
    github: "https://github.com/TuathaDeLugh/notesapp",
    summary:
      "A fast, keyboard-first note-taking application designed for frictionless markdown notes, priority tagging, and instant client-side search indexing.",
    image: {
      name: "notes.png",
      link: "https://bucket.umangsailor.com/storage/portfolio/projects/notes.png",
    },
    livedemo: "https://notesapp-rose.vercel.app/",
    archived: true,
    createdAt: "2023-10-01T12:00:00.000Z",
  },
  {
    _id: "65199706af97ebe8feb67359",
    title: "Sailor Travel",
    info: "Curated Travel Guide & Dynamic Destination Portal",
    technology: "TypeScript, Next.js, MongoDB, Prisma",
    github: "https://github.com/TuathaDeLugh/sailortravel",
    summary:
      "A dynamic travel booking and itinerary platform with location-based recommendation algorithms, interactive maps, and schema-driven destination taxonomies.",
    image: {
      name: "SailorTravel.png",
      link: "https://bucket.umangsailor.com/storage/portfolio/projects/SailorTravel.png",
    },
    livedemo: "https://github.com/TuathaDeLugh/sailortravel",
    archived: true,
    createdAt: "2023-10-01T11:00:00.000Z",
  },
];

interface GetProjectsOptions {
  all?: boolean;
}

export default async function getProjects(
  options: GetProjectsOptions = {}
): Promise<IProject[]> {
  try {
    await connectdb();
    const filter = options.all ? {} : { archived: { $ne: true } };
    const docs = await Project.find(filter).sort({ createdAt: -1 }).lean();
    if (docs && docs.length > 0) {
      return JSON.parse(JSON.stringify(docs));
    }
  } catch (err) {
    console.warn("Direct DB project fetch fallback triggered:", err);
  }

  // Graceful fallback to verified portfolio projects
  return options.all ? FALLBACK_PROJECTS : FALLBACK_PROJECTS.filter((p) => !p.archived);
}

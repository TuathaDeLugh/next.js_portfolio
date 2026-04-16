import AboutEdu from "@/components/AllDynamic/AboutEdu";
import AboutExp from "@/components/AllDynamic/AboutExp";
import AboutSkill from "@/components/AllDynamic/AboutSkill";
import React from "react";
import {
  BsFillDatabaseFill,
  BsFillShieldLockFill,
  BsSearch,
} from "react-icons/bs";
import { GrContactInfo, GrTechnology, GrCpu } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";

function About() {
  return (
    <div className="overflow-x-hidden">
      {/* ===== HERO BANNER ===== */}
      <div className="relative flex items-center justify-center min-h-[60vh] pt-20 overflow-hidden bg-gray-950">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 -right-24 w-96 h-96 rounded-full bg-green-900/30 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-emerald-900/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #22c55e 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto py-20">
          {/* eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 border border-green-700/50 text-green-400 text-sm font-medium mb-6">
            Get to know me
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Full Stack <span className="text-gradient">Software Engineer</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I build enterprise-grade web applications — bridging elegant
            frontend experiences with robust backend systems. 3+ years
            delivering production-quality software in professional environments.
          </p>

          {/* Quick stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { value: "3+", label: "Years Coding" },
              { value: "15+", label: "Projects Delivered" },
              { value: "5+", label: "Tech Stacks" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-6 py-4 rounded-2xl bg-gray-900/60 border border-gray-800 text-center"
              >
                <div className="text-3xl font-bold text-green-400">
                  {s.value}
                </div>
                <div className="text-gray-400 text-xs mt-1 font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-20 fill-green-50"
          >
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,56C1120,59,1280,53,1360,50.7L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </div>

      {/* ===== EXPERTISE CARDS ===== */}
      <section className="bg-green-50 pt-4 pb-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 -mt-8">
            {[
              {
                icon: <BsFillDatabaseFill size={24} />,
                title: "Database Management",
                desc: "Expert in relational (MySQL, SQL Server) and NoSQL databases (MongoDB, Firebase) — architecting data layers for scale and speed.",
                iconBg: "bg-red-500",
                tag: "Databases",
              },
              {
                icon: <BsSearch size={24} />,
                title: "Web Analytics & SEO",
                desc: "Implementing Google Analytics, tracking KPIs, and applying SEO principles to boost organic visibility and drive traffic.",
                iconBg: "bg-emerald-500",
                tag: "Growth",
              },
              {
                icon: <BsFillShieldLockFill size={24} />,
                title: "Web Security",
                desc: "SSL/TLS, secure authentication flows, and protection against XSS, SQL injection, and CSRF vulnerabilities baked in from the start.",
                iconBg: "bg-blue-500",
                tag: "Security",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="card-premium p-6 border border-green-100 group cursor-default"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl ${card.iconBg} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200`}
                  >
                    {card.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-lg bg-green-50 text-green-600 text-xs font-semibold border border-green-100">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROFESSIONAL SUMMARY ===== */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Photo */}
            <div className="w-full lg:w-5/12 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl shadow-green-100 border-4 border-white">
                  <img
                    alt="Umang Sailor"
                    className="w-full h-full object-cover"
                    src="/photo.png"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 glass-green px-4 py-3 rounded-2xl shadow-lg border border-green-200">
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-500 font-medium">
                      Corporate · Full-time
                    </span>
                  </div>
                </div>
                <div className="absolute -top-4 -left-4 glass px-4 py-3 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-sm font-bold text-gray-900">
                    3+ Years
                  </div>
                  <div className="text-xs text-gray-500">Experience</div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="w-full lg:w-7/12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white shadow-md border border-green-100">
                  <GrContactInfo size={24} className="text-green-600" />
                </div>
                <div>
                  <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                    Professional Profile
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-0.5">
                    Meet Umang Sailor
                  </h2>
                </div>
              </div>

              <p className="text-gray-500 text-lg leading-relaxed mb-6">
                A results-driven Full Stack Software Engineer with 3+ years of
                experience building scalable, production-ready web applications
                in agile corporate environments. Proven track record of
                delivering high-quality software on time and with precision.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Deep expertise in React.js and Next.js on the frontend, paired
                with Node.js, Express, and MongoDB on the backend. I thrive in
                cross-functional teams, translating complex business
                requirements into clean, maintainable code.
              </p>

              {/* <div className="flex flex-wrap gap-3">
                {[
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "MongoDB",
                  "TailwindCSS",
                  "TypeScript",
                  "Express",
                  "Firebase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-sm font-medium border border-green-100"
                  >
                    {tech}
                  </span>
                ))}
              </div> */}

              <div className="mt-8">
                <AboutExp />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50/60 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-100/60 blur-3xl" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Tech cards */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-white shadow-md border border-green-100">
                  <GrTechnology size={22} className="text-green-600" />
                </div>
                <div>
                  <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                    My Arsenal
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-0.5">
                    Technologies I Use
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    name: "HTML5",
                    img: "https://img.icons8.com/color/48/html-5--v1.png",
                    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
                    bg: "from-orange-50 to-red-50",
                    border: "border-orange-100",
                    text: "text-orange-700",
                  },
                  {
                   name: "CSS",
                   img: "https://img.icons8.com/color/48/css3.png",
                   href: "https://www.w3schools.com/css/",
                   bg: "from-blue-100 to-cyan-100",
                   border: "border-blue-100",
                   text: "text-blue-700",
                 },
                  {
                    name: "JavaScript",
                    img: "https://img.icons8.com/color/48/javascript--v1.png",
                    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                    bg: "from-yellow-50 to-amber-50",
                    border: "border-yellow-100",
                    text: "text-yellow-700",
                  },
                   {
                    name: "TypeScript",
                    img: "https://img.icons8.com/color/48/typescript.png",
                    href: "https://www.typescriptlang.org/docs",
                    bg: "from-blue-50 to-cyan-50",
                    border: "border-blue-100",
                    text: "text-blue-700",
                  },
                  {
                    name: "React.js",
                    img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
                    href: "https://legacy.reactjs.org/docs/getting-started.html",
                    bg: "from-cyan-50 to-blue-50",
                    border: "border-cyan-100",
                    text: "text-cyan-700",
                  },
                  {
                    name: "Next.js",
                    img: "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg",
                    href: "https://nextjs.org/docs",
                    bg: "from-gray-50 to-slate-50",
                    border: "border-gray-200",
                    text: "text-gray-700",
                  },
                  {
                    name: "Node.js",
                    img: "https://img.icons8.com/color/48/nodejs.png",
                    href: "https://nodejs.org/en/docs",
                    bg: "from-green-200 to-emerald-200",
                    border: "border-green-100",
                    text: "text-green-700",
                  },
                  {
                    name: "Express.js",
                    img: "https://img.icons8.com/color/48/express-js.png",
                    href: "https://expressjs.com/",
                    bg: "from-gray-50 to-slate-50",
                    border: "border-gray-200",
                    text: "text-gray-700",
                  },
                ].map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br ${tech.bg} border ${tech.border} hover:shadow-md transition-all duration-200 cursor-pointer`}
                  >
                    <img
                      src={tech.img}
                      alt={tech.name}
                      className="w-10 h-10 rounded-xl object-contain shadow-sm group-hover:scale-110 transition-transform duration-200"
                    />
                    <span className={`font-semibold text-sm ${tech.text}`}>
                      {tech.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Education & Skills */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-2xl bg-white shadow-md border border-green-100">
                  <GrCpu size={22} className="text-green-600" />
                </div>
                <div>
                  <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                    Education & Skills
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mt-0.5">
                    Background & Expertise
                  </h2>
                </div>
              </div>
              <AboutEdu />
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-green-100/50">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 rounded-2xl bg-white shadow-md border border-green-100">
                <PiStudentBold size={22} className="text-green-600" />
              </div>
              <div>
                <span className="text-xs text-green-600 font-semibold uppercase tracking-wider">
                  Skill Inventory
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-0.5">
                  Proficiency Breakdown
                </h2>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/30 rounded-3xl -m-6 -z-10 border border-green-100/20" />
              <AboutSkill />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

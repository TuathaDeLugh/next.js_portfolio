import TypeW from "@/components/TypeW";
import Link from "next/link";
import {
  PiTreeStructure,
  PiDesktopTowerBold,
  PiFileTextBold,
  PiChalkboardBold,
} from "react-icons/pi";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-green-50/40 to-emerald-50/60">
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-100/60 blur-3xl" />
          <div className="absolute bottom-0 -left-32 w-80 h-80 rounded-full bg-emerald-100/50 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-green-50/80 blur-2xl" />
        </div>

        {/* Floating dots grid decoration */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #16a34a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          {/* Left: Text content */}
          <div className="w-full lg:w-1/2 animate-fade-up">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-medium mb-8">
              Software Engineer · Open to connect
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight mb-4">
              Hi, I'm
              <br />
              <span className="text-gradient">Umang Sailor</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold text-gray-700 h-10 mb-6">
              <TypeW />
            </div>

            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mb-10">
              Passionate about crafting seamless digital experiences — from
              pixel-perfect interfaces to robust backend systems. I turn complex
              problems into elegant, scalable solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/TuathaDeLugh/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-all duration-200 shadow-lg shadow-gray-200 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/umang-sailor/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-100 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-green-200 text-green-700 text-sm font-semibold hover:bg-green-50 hover:border-green-400 transition-all duration-200 cursor-pointer"
              >
                Get in Touch
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-green-100">
              {[
                { value: '3+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Shipped' },
                { value: '5+', label: 'Tech Stacks' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero visual */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="relative animate-float">
              {/* Code terminal card */}
              <div className="relative w-72 md:w-96 rounded-2xl shadow-2xl shadow-green-200/60 overflow-hidden border border-green-100 glass">
                {/* Terminal bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-2 text-gray-400 text-xs font-mono">
                    portfolio.js
                  </span>
                </div>
                <div className="bg-gray-950 px-6 py-6 font-mono text-sm leading-relaxed">
                  <div className="text-gray-500">// Umang Sailor</div>
                  <div className="text-purple-400 mt-2">
                    const <span className="text-blue-400">developer</span> ={" "}
                    {"{"}
                  </div>
                  <div className="pl-4 text-green-400">
                    {" "}
                    name: <span className="text-amber-300">"Umang Sailor"</span>
                    ,
                  </div>
                  <div className="pl-4 text-green-400">
                    {" "}
                    role:{" "}
                    <span className="text-amber-300">"Full Stack Dev"</span>,
                  </div>
                  <div className="pl-4 text-green-400"> skills: [</div>
                  <div className="pl-8 text-amber-300">"React", "Next.js",</div>
                  <div className="pl-8 text-amber-300">"Node", "MongoDB"</div>
                  <div className="pl-4 text-green-400"> ],</div>
                  <div className="pl-4 text-green-400">
                    {" "}
                    status: <span className="text-amber-300">"employed"</span>,
                  </div>
                  <div className="pl-4 text-green-400">
                    {" "}
                    open_to: <span className="text-amber-300">"connect"</span>
                  </div>
                  <div className="text-purple-400">
                    {"}"}
                    <span className="text-white">;</span>
                  </div>
                  <div className="mt-3 text-green-500">
                    {">"} <span className="animate-pulse">█</span>
                  </div>
                </div>
              </div>

              {/* Floating badge – tech stack */}
              <div className="absolute -top-4 -right-4 glass-green px-3 py-2 rounded-xl shadow-lg animate-scale-in delay-300">
                <div className="text-xs font-semibold text-green-700">
                  ⚡ Next.js 14
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl shadow-lg animate-scale-in delay-500">
                <div className="text-xs font-semibold text-gray-700">
                  🛡️ Full Stack
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ===== WHAT I DO SECTION ===== */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
          <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-4 border border-green-100">
              What I Do
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills That <span className="text-gradient">Drive Results</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              From frontend finesse to backend power — I cover all layers of
              modern web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <PiChalkboardBold size={28} />,
                title: "UI/UX Design",
                desc: "Pixel-perfect, responsive interfaces built with TailwindCSS and modern design principles for every viewport.",
                color: "bg-green-500",
                light: "bg-green-50",
                border: "border-green-100",
              },
              {
                icon: <PiDesktopTowerBold size={28} />,
                title: "Full Stack Development",
                desc: "End-to-end web apps with React, Next.js on the front and Node.js, MongoDB on the back.",
                color: "bg-blue-500",
                light: "bg-blue-50",
                border: "border-blue-100",
              },
              {
                icon: <PiTreeStructure size={28} />,
                title: "REST API Design",
                desc: "Scalable, secure APIs with CRUD operations, authentication, and clean architecture patterns.",
                color: "bg-purple-500",
                light: "bg-purple-50",
                border: "border-purple-100",
              },
              {
                icon: <PiFileTextBold size={28} />,
                title: "Technical Docs",
                desc: "Complete SRS documentation with ER diagrams, Use Case, Activity, and DFD diagrams when needed.",
                color: "bg-amber-500",
                light: "bg-amber-50",
                border: "border-amber-100",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`card-premium p-6 border ${item.border} group cursor-pointer`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.color} text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-200`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY WORK WITH ME ===== */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50/60 relative overflow-hidden">
        <div className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full bg-green-100/60 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: code screenshot */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl shadow-green-100/80 border border-green-100"
                style={{
                  transform: "perspective(1040px) rotateY(-6deg) rotateX(2deg)",
                }}
              >
                <img
                  alt="Code editor screenshot"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                  src="/code.png"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent" />
              </div>
            </div>

            {/* Right: points */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 animate-fade-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white text-green-600 text-sm font-semibold mb-4 border border-green-200 shadow-sm">
                My Engineering Standards
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Built on{" "}
                <span className="text-gradient">Quality & Precision</span>
              </h2>
              <p className="text-gray-500 mb-8">
                In every professional engagement, my engineering standards stay
                constant. Here's what defines my work:
              </p>

              <div className="space-y-4">
                {[
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
                    title: "Speed Optimized",
                    desc: "Lazy loading, code splitting, and smart caching ensure blazing-fast load times.",
                  },
                ].map((point, i) => (
                  <div
                    key={point.title}
                    className="flex gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 group cursor-default"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center shadow-sm mt-0.5">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-0.5">
                        {point.title}
                      </div>
                      <div className="text-gray-500 text-sm">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS PREVIEW ===== */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-green-200 to-transparent" />
        </div>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-green-600 text-sm font-semibold mb-4 border border-green-100">
                Featured Work
              </span>
              <h2 className="text-4xl font-bold text-gray-900">
                Handpicked <span className="text-gradient">Projects</span>
              </h2>
            </div>
            <Link
              href="/project"
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-800 transition-colors duration-150 cursor-pointer"
            >
              View all projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Let's Travel",
                img: "/travel.png",
                tag: "Full Stack",
                color: "bg-green-500",
              },
              {
                title: "Spirited Score",
                img: "/SpiritedScore.png",
                tag: "Next.js",
                color: "bg-blue-500",
              },
              {
                title: "Life Saver",
                img: "/lifesaver.png",
                tag: "React",
                color: "bg-purple-500",
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/project"
                className="group block cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:shadow-green-100/50 transition-all duration-300 hover:-translate-y-1">
                  <img
                    src={project.img}
                    alt={project.title}
                    width={640}
                    height={480}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <div className="text-xs font-medium text-green-300 mb-1">
                        View Project →
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${project.color} shadow-sm`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <h3 className="font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-150">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-green-500 text-white shadow-xl shadow-green-200 mb-8 mx-auto">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-gray-500 text-lg mb-10 leading-relaxed">
              Whether it's a knowledge exchange, a professional discussion, or
              exploring shared interests in tech — I'm always happy to connect.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@umangsailor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-200 transition-all duration-200 cursor-pointer"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Send an Email
              </a>
              <a
                href="https://www.linkedin.com/in/umang-sailor/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 hover:border-green-400 transition-all duration-200 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-green-700">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              or reach me at{" "}
              <a
                href="mailto:contact@umangsailor.com"
                className="text-green-600 hover:underline font-medium"
              >
                contact@umangsailor.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

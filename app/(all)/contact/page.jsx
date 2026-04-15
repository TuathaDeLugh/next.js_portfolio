import ContactPage from "@/components/InsertForm/ContactPage";
import React from "react";
import {
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";

function Contact() {
  return (
    <div className="overflow-x-hidden bg-white">
      {/* ===== HERO ===== */}
      <div className="relative pt-28 pb-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-green-900/30 blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-emerald-900/20 blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle, #22c55e 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/40 border border-green-700/50 text-green-400 text-sm font-medium mb-6">
            Let's Connect Professionally
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Whether it's a professional discussion, knowledge sharing, or
            exploring shared interests in engineering — feel free to reach out.
            I respond within 24 hours.
          </p>
        </div>
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="w-full h-20 fill-white"
          >
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,56C1120,59,1280,53,1360,50.7L1440,48L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z" />
          </svg>
        </div>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left: Form + Map */}
          <div className="w-full lg:w-8/12 space-y-6">
            {/* Contact form card */}
            <div className="card-premium p-8 border border-gray-100 bg-gradient-to-br from-green-50/60 to-green-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-md">
                  <svg
                    className="w-5 h-5 text-white"
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
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Send a Message
                  </h2>
                  <p className="text-sm text-gray-500">
                    I'll get back to you within 24 hours
                  </p>
                </div>
              </div>
              <ContactPage />
            </div>

            {/* Map card */}
            <div className="card-premium overflow-hidden border border-gray-100">
              <div className="px-6 pt-5 pb-3 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <h3 className="font-semibold text-gray-900">
                  Location — Surat, Gujarat, India
                </h3>
              </div>
              <iframe
                className="w-full rounded-b-xl"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d14876.689800341675!2d72.77946530537108!3d21.225009164083545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEzJzEzLjQiTiA3MsKwNDYnNDkuMyJF!5e0!3m2!1sgu!2sin!4v1695572227814!5m2!1sgu!2sin"
                height="380"
                loading="lazy"
                title="Surat location"
              />
            </div>
          </div>

          {/* Right sidebar: info cards */}
          <div className="w-full lg:w-4/12 space-y-6">
            {/* Direct Contact Card */}
            <div className="card-premium p-6 border border-green-100 bg-gradient-to-br from-green-50/60 to-white">
              <h3 className="font-bold text-gray-900 text-lg mb-5">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@umangsailor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-150 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-green-600 group-hover:text-white transition-colors"
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
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">
                      Email
                    </div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      contact@umangsailor.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+919998558554"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-150 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-500 transition-colors duration-200">
                    <svg
                      className="w-5 h-5 text-green-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">
                      Phone
                    </div>
                    <div className="text-sm font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      +91 99985 58554
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">
                      Location
                    </div>
                    <div className="text-sm font-semibold text-gray-800">
                      Surat, Gujarat, India
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Card */}
            <div className="card-premium p-6 border border-gray-100 text-center">
              <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-4 border-4 border-green-100 shadow-md">
                <img
                  src="/photo.png"
                  alt="Umang Sailor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Umang Sailor</h3>
              <p className="text-green-600 text-sm font-medium mt-0.5">
                Full Stack Developer
              </p>
              <div className="flex items-center gap-1.5 mt-2 justify-center">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-xs text-gray-500 font-medium">
                  Open to connect
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 mt-5 pt-5 border-t border-gray-100">
                <a
                  href="https://api.whatsapp.com/send?phone=919998558554"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-green-50 hover:bg-green-500 border border-green-100 flex items-center justify-center text-green-600 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <AiOutlineWhatsApp size={18} />
                </a>
                <a
                  href="https://github.com/TuathaDeLugh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-gray-50 hover:bg-gray-900 border border-gray-100 flex items-center justify-center text-gray-700 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <AiFillGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/umang-sailor/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-blue-50 hover:bg-blue-700 border border-blue-100 flex items-center justify-center text-blue-700 hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <AiFillLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Response time card — dark card with explicit inline bg to avoid CSS specificity conflict */}
            <div
              className="rounded-2xl p-6 border border-gray-700"
              style={{ backgroundColor: "#111827" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(34,197,94,0.15)" }}
              >
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4
                className="font-bold text-lg mb-1"
                style={{ color: "#ffffff" }}
              >
                Fast Response
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#d1d5db" }}
              >
                I typically respond to all messages within{" "}
                <strong style={{ color: "#4ade80" }}>24 hours</strong>. Let's
                get the conversation started!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;

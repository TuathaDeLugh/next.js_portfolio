"use client"

import Link from "next/link";
import { AiFillGithub, AiFillFacebook, AiOutlineWhatsApp, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { usePathname } from 'next/navigation';

const socialLinks = [
  { href: "https://twitter.com/UmangSailor", label: "Twitter", icon: <AiOutlineTwitter size={18} />, color: "hover:text-sky-400" },
  { href: "https://www.facebook.com/umang.sailor.6/", label: "Facebook", icon: <AiFillFacebook size={18} />, color: "hover:text-blue-600" },
  { href: "https://api.whatsapp.com/send?phone=919998558554", label: "WhatsApp", icon: <AiOutlineWhatsApp size={18} />, color: "hover:text-green-500" },
  { href: "https://github.com/TuathaDeLugh", label: "GitHub", icon: <AiFillGithub size={18} />, color: "hover:text-gray-900" },
  { href: "https://www.linkedin.com/in/umang-sailor/", label: "LinkedIn", icon: <AiFillLinkedin size={18} />, color: "hover:text-blue-700" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/project" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Resume", href: "https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link", external: true },
  { label: "GitHub", href: "https://github.com/TuathaDeLugh/", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/umang-sailor/", external: true },
  { label: "Email Me", href: "mailto:contact@umangsailor.com", external: true },
];

export default function Footer() {
  const path = usePathname();
  if (path === '/login') return null;

  return (
    <footer className="bg-gray-950 text-white relative overflow-hidden">
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent" />
      {/* Decorative blob */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-green-900/20 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-900/40">
                <span className="text-white font-bold text-base">U</span>
              </div>
              <span className="text-xl font-bold text-white">Umang<span className="text-green-400">.</span></span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Full Stack Developer crafting elegant, performant web experiences. Based in Surat, Gujarat, India.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 ${s.color} hover:bg-gray-700 transition-all duration-200 cursor-pointer`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors duration-150 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-150 flex items-center gap-1.5 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-green-500 transition-colors duration-150 flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Umang Sailor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

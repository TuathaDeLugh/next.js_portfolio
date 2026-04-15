"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function NavBar() {
  const { data: session, status } = useSession();
  const [navbar, setNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let navData = [
    { name: "Home", path: "/", key: 1 },
    { name: "About", path: "/about", key: 2 },
    { name: "Projects", path: "/project", key: 3 },
    { name: "Contact", path: "/contact", key: 4 },
  ];
  if (status === "authenticated") {
    navData.push({ name: "Admin", path: "/admin/dashbord", key: 5 });
  }

  if (path === "/login") return null;

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-2 ${scrolled ? "py-2" : "py-4"}`}
    >
      <nav
        className={`mx-auto max-w-6xl px-4 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-green-100/50 rounded-2xl border border-green-100" : "bg-white/60 backdrop-blur-md rounded-2xl border border-white/40 shadow-sm"}`}
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900 tracking-tight group-hover:text-green-600 transition-colors duration-200">
              UMANG<span className="text-green-500">SAILOR</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navData.map((link) => {
              const isActive = path === link.path;
              return (
                <li key={link.key}>
                  <Link
                    href={link.path}
                    className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "text-green-600 bg-green-50"
                        : "text-gray-600 hover:text-green-600 hover:bg-green-50/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-green-500 hover:bg-green-600 text-white text-sm font-semibold shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-all duration-200 cursor-pointer"
            >
              Resume
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-gray-600 hover:bg-green-50 transition-colors duration-150 cursor-pointer"
            onClick={() => setNavbar(!navbar)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {navbar ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${navbar ? "max-h-96 pb-4" : "max-h-0"}`}
        >
          <ul className="flex flex-col gap-1 px-4 pt-2">
            {navData.map((link) => {
              const isActive = path === link.path;
              return (
                <li key={link.key}>
                  <Link
                    href={link.path}
                    onClick={() => setNavbar(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer ${
                      isActive
                        ? "text-green-600 bg-green-50 font-semibold"
                        : "text-gray-600 hover:text-green-600 hover:bg-green-50/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href="https://drive.google.com/drive/folders/1qsVPxNmWiNyVK3dzueTsLeo6QP1UfzEt?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-3 rounded-xl bg-green-500 text-white text-sm font-semibold cursor-pointer"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;

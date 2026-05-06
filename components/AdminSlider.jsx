'use client'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { usePathname } from 'next/navigation';
import React, { useState } from "react";
import { MdOutlineDashboard, MdOutlineSpaceDashboard } from "react-icons/md";
import { TbReportAnalytics, TbId } from "react-icons/tb";
import { FiMessageSquare, FiLogOut, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const menus = [
  { name: "Dashboard", link: "/admin/dashbord", icon: MdOutlineDashboard },
  { name: "Content", link: "/admin/content", icon: TbId },
  { name: "Projects", link: "/admin/project", icon: TbReportAnalytics },
  { name: "Messages", link: "/admin/contact", icon: FiMessageSquare },
];

const Nav = () => {
  const path = usePathname();
  const [open, setOpen] = useState(true);

  if (path === '/admin') return null;

  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-screen bg-gray-950 border-r border-gray-800 flex flex-col transition-all duration-300 ease-in-out ${open ? 'w-56' : 'w-16'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-800">
        {open && (
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-xs">U</span>
            </div>
            <span className="text-white font-bold text-sm tracking-tight">Admin Panel</span>
          </Link>
        )}
        {!open && (
          <div className="w-7 h-7 rounded-lg bg-green-500 flex items-center justify-center shadow-md mx-auto">
            <span className="text-white font-bold text-xs">U</span>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className={`p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-150 cursor-pointer flex-shrink-0 ${!open && 'hidden'}`}
        >
          <FiChevronLeft size={16} />
        </button>
      </div>

      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-150 cursor-pointer flex justify-center"
        >
          <FiChevronRight size={16} />
        </button>
      )}

      {/* Nav links */}
      <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
        {menus.map((menu, i) => {
          const isActive = path === menu.link || path.startsWith(menu.link + '/');
          const Icon = menu.icon;
          return (
            <Link
              key={i}
              href={menu.link}
              title={!open ? menu.name : undefined}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 cursor-pointer group outline-none focus:outline-none ${
                isActive
                  ? 'bg-green-500/15 text-green-400 border border-green-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800 border border-transparent'
              }`}
            >
              <Icon size={18} className="flex-shrink-0" />
              {open && <span className="truncate">{menu.name}</span>}
              {isActive && open && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom: Logout */}
      <div className="px-2 py-4 border-t border-gray-800">
        <button
          onClick={() => signOut({ callbackUrl: '/' })}
          title={!open ? 'Logout' : undefined}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-150 cursor-pointer outline-none focus:outline-none border border-transparent"
        >
          <FiLogOut size={18} className="flex-shrink-0" />
          {open && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Nav;
'use client'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
import { usePathname } from 'next/navigation'
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { FiMessageSquare } from "react-icons/fi";



const Nav = () => {
  const path = usePathname()

  if (path === '/admin') return null
  const menus = [
    { name: "dashboard", link: "/admin/dashbord", icon: MdOutlineDashboard },
    { name: "project", link: "/admin/project", icon: TbReportAnalytics, margin: true },
    { name: "contact", link: "/admin/contact", icon: FiMessageSquare },
  ];

  const [open, setOpen] = useState(false);

  return (<>

    <nav className="w-full backdrop-blur bg-white/50 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="justify-between px-4 mx-auto lg:max-w-screen-2xl md:items-center flex md:px-8">

        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl text-green-600 font-bold ">UMANG SAILOR</h2>
            </Link>
          </div>
        </div>
        <div className='text-l text-slate-800 font-medium py-5 px-5 text-center'>Admin panal</div>
      </div>
    </nav>
    <section className="flex gap-6 fixed z-10">
      <div
        className={`backdrop-blur bg-white/50 shadow min-h-screen ${open ? "w-72" : "w-16"
          } duration-500 text-gray-700 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={`mt-5 group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-green-100 rounded-md`}
              onClick={() => setOpen(false)}

            >
              <div>{React.createElement(menu?.icon,{ size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            key={4}
            className={`mt-5
              group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-red-300 rounded-md`}
          >
            <div>{React.createElement(FiLogOut, { size: "20" })}</div>
            <h2
              style={{
                transitionDelay: `700ms`,
              }}
              className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden hover:text-white"
                }`}
            >
              {"logout"}

            </h2>
            <h2
              className={`${open && "hidden"
                } absolute left-48 bg-red-300 font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
            >
              {"logout"}
            </h2>
          </button>
        </div>
      </div>
    </section>
  </>
  );
}
export default Nav;
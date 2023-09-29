'use client'
import Link from 'next/link';
import { signOut } from "next-auth/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiLogOut } from "react-icons/fi";
import { usePathname } from 'next/navigation'
import {
  HiHome,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2'; 


// export const navData1 = [
//   { name: 'home', path: '/admin', icon: <HiHome /> },
//   { name: 'services', path: '/admin/project', icon: <HiRectangleGroup /> },
//   {
//     name: 'contact',
//     path: '/admin/contact',
//     icon: <HiEnvelope />,
//   },
// ];
export const navData = [
  { name: 'Home', path: '/admin/dashbord'  ,key:1},
  { name: 'Project', path: '/admin/project' ,key:2},
  { name: 'contact', path: '/admin/contact' ,key:3},
]
 const Nav = () => {
  const path = usePathname()

	if (path === '/admin') return null
const [navbar, setNavbar] = useState(false);
return (<>
 {/* <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:w-max-md xl:h-screen'>
    <div className='flex w-full xl:flex-col items-center justify-around xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[70px] xl:h-max py-8 bg-green-500/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData1.map((link,)=>{
        return<Link href={link.path}>{link.icon}</Link>
      })}

    </div>
  </nav> */}
  <div>
    <nav className="w-full backdrop-blur bg-white/50 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="justify-between px-4 mx-auto lg:max-w-screen-2xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            {/* LOGO */}
            <Link href="/">
              <h2 className="text-2xl text-green-600 font-bold ">UMANG SAILOR</h2>
            </Link>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden border rounded">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (

                  <GrClose size={'20'} />
                ) : (
                  <GiHamburgerMenu size={'20'}
                    className=" text-green-500 focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center md:flex ">

              {navData.map((link) => {
                return (
                  <li key={link.key} className="text-l text-slate-800 py-5 px-5 text-center  border-b-2 md:border-b-0  border-slate-400  md:hover:text-slate-500 md:hover:font-semibold md:hover:bg-transparent">

                    <Link onClick={() => setNavbar(!navbar)} href={link.path}>{link.name}</Link>
                  </li>
                )
              })}
                    <li className="text-l mt-5 md:mt-0 mx-auto">
        <button className="flex text-l items-center text-red-500 rounded border border-red-500  hover:border-2 hover:bg-red-500  md:my-3 md:py-1 md:px-2 py-5 px-6 text-center hover:text-white  md:hover:bg-red-500"
          // onClick={console.log("Clicked")}
          onClick={() => signOut({ callbackUrl: '/' })}
          >
          <FiLogOut/>
        </button>
        </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
  </>
);
}
export default Nav;
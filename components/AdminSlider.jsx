'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  HiHome,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2'; 

// nav data
export const navData = [
  { name: 'home', path: '/admin', icon: <HiHome /> },
  { name: 'services', path: '/admin/project', icon: <HiRectangleGroup /> },
  {
    name: 'contact',
    path: '/admin/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  return <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:w-max-md xl:h-screen'>
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-green-500/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
      {navData.map((link,)=>{
        return<Link href={link.path}>{link.icon}</Link>
      })}

    </div>
  </nav>;
};

export default Nav;
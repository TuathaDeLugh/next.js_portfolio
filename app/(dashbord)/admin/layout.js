import "../../globals.css"

import Nav from '@/components/AdminSlider'
import React from 'react'
import SessionProvider from "@/components/SessionProvider";
import { Inter } from 'next/font/google'
import ToastCont from '@/components/ToastCont'
import AdminDesign from "@/components/loginDesign";
import SessionAuth from "@/components/SessionAuth";
import NavBar from "@/components/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:"Umang Sailor",
  discription:"Hello My name is Umang Sailor. This is my portfolio Website(PWA). My all projects and contact information is listed on this website",
  manifest:"/manifest.webmanifest",
  themeColor: "#f0fdf4",
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
        <Nav/>
        <NavBar/>
        <main className="min-h-[80vh] mt-16">


        <SessionAuth/>
        <ToastCont/>
        <div className='mx-auto min-h-[78vh]  ml-16 2xl:ml-0'>

<div className="relative bg-green-50 md:pt-8 pb-36 pt-12 -z-10">
</div>
<div className="flex max-w-[1430px] -mt-44 md:pt-10 flex-wrap mx-auto pb-48 justify-center">
          {children}
          </div>
          </div> 
      
      </main>
        {/* <Footer/> */}
          </SessionProvider>
</body>
    </html>
  )
}
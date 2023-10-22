import "../../globals.css"

import Nav from '@/components/AdminSlider'
import React from 'react'
import SessionProvider from "@/components/SessionProvider";
import { Inter } from 'next/font/google'
import ToastCont from '@/components/ToastCont'
import AdminDesign from "@/components/AdminDesign";
import SessionAuth from "@/components/SessionAuth";
import NavBar from "@/components/Navbar";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title:"Umang Sailor",
  discription:"Hello My name is Umang Sailor. This is my Potfolio Website(PWA). My all projects and contact information is listed on this website",
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
         <AdminDesign>
          {children}
          </AdminDesign> 
      
      </main>
        {/* <Footer/> */}
          </SessionProvider>
</body>
    </html>
  )
}
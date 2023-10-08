import "../../globals.css"

import Nav from '@/components/AdminSlider'
import React from 'react'
import SessionProvider from "@/components/SessionProvider";
import { Inter } from 'next/font/google'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'
import AdminDesign from "@/components/AdminDesign";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  manifest: "/manifest.json",
  themeColor: "#16a34a",
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        <main className="min-h-[80vh] mt-16">


        <SessionProvider>
          
        <ToastCont/>
         <AdminDesign>
          {children}
          </AdminDesign> 
          </SessionProvider>
      
      </main>
        {/* <Footer/> */}
</body>
    </html>
  )
}
import "../../globals.css"

import Nav from '@/components/AdminSlider'
import React from 'react'
import SessionProvider from "@/components/SessionProvider";
import { Inter } from 'next/font/google'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Umang Sailor',
  description: 'Porfolio',
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Nav/>
        <main className="min-h-[80vh]">
      

        <SessionProvider>
          
        <ToastCont/>
          
          {children}
          </SessionProvider>
      
      </main>
        {/* <Footer/> */}
</body>
    </html>
  )
}
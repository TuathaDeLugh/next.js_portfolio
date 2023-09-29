import "../../globals.css"

import Nav from '@/components/AdminSlider'
import React from 'react'
import SessionProvider from "@/components/SessionProvider";
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Umang Sailor',
  description: 'Porfolio',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body 
      className={inter.className}
      >
      
      

        <SessionProvider>
        <Nav/>
        <ToastCont/>
          
          {children}
        <Footer/>
          </SessionProvider>
      
      
</body>
    </html>
  )
}
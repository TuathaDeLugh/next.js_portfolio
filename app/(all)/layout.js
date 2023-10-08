
import '../globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'
import SessionProvider from "../../components/SessionProvider";

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
      <body 
      className={inter.className}
      >
      
      

        <SessionProvider>
        <NavBar/>
        <ToastCont/>
        <div className='mx-auto min-h-[96vh] mt-16 md:mt-20 '>
          {children}
        </div>
        <Footer/>
          </SessionProvider>
      
      
</body>
    </html>
  )
}
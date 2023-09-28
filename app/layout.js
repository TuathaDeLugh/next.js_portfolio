
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'
import { getServerSession } from 'next-auth'
import SessionProvider from "../components/SessionProvider";

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
        <NavBar/>
        <ToastCont/>
        <div className='mx-auto min-h-[96vh] mt-16 md:mt-20'>
          {children}
        </div>
        <Footer/>
          </SessionProvider>
      
      
</body>
    </html>
  )
}

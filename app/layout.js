
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Umang Sailor',
  description: 'Porfolio demo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        <ToastCont/>
        <div className='mx-auto min-h-[96vh] mt-16 md:mt-20'>
{children}
        </div>
        <Footer/>
</body>
    </html>
  )
}

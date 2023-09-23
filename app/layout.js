import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar'
import ToastCont from '@/components/ToastCont'

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
        <div className='mx-auto mt-20'>
{children}
        </div>
</body>
    </html>
  )
}

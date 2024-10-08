
import '../globals.css'
import NavBar from '@/components/Navbar'
import ToastCont from '@/components/ToastCont'
import Footer from '@/components/Footer'
import SessionProvider from "../../components/SessionProvider";
import LoginDesignDesign from '@/components/loginDesign'
import { Poppins} from 'next/font/google';

const font = Poppins({
  subsets:['latin'],
  weight:['400','300','500','700','900','600'],
})

export const metadata = {
  title:"Umang Sailor",
  discription:"Hello My name is Umang Sailor. This is my portfolio Website(PWA). My all projects and contact information is listed on this website",
  manifest:"/manifest.webmanifest",
  themeColor: "#f0fdf4",
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={font.className}
      >
      
      

        <SessionProvider>
        <NavBar/>
        <ToastCont/>
          <LoginDesignDesign>
          {children}
            </LoginDesignDesign>        
        <Footer/>
          </SessionProvider>
      
      
</body>
    </html>
  )
}
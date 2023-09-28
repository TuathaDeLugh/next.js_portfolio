"use client"
import { SessionProvider} from "next-auth/react"
import Nav from '@/components/AdminSlider'
import React from 'react'
import Seschack from "@/components/Seschack";


async function layout({ children }) {
  
  return (

    <div>
      <SessionProvider>

      <Seschack>
          <Nav />
          {children}
      </Seschack>
        </SessionProvider >
    </div>
  )
}

export default layout
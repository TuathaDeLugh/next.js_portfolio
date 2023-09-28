"use client"
import Nav from '@/components/AdminSlider'
import React from 'react'
import Seschack from "@/components/Seschack";


async function layout({ children }) {
  
  return (

    <div>

      <Seschack>
          <Nav />
          <div className="relative bg-green-50 md:pt-8 -mt-2 pb-36 pt-12 -z-10">
        </div>
        <div className="flex max-w-7xl -mt-44 pt-10 flex-wrap mx-auto pb-48">

          {children}
        </div>
      </Seschack>
    </div>
  )
}

export default layout
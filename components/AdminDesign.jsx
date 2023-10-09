"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
function AdminDesign({children}) {
    const path = usePathname()
    if (path === '/admin') return (<>{children}</>)
  return (
    <div className='mx-auto min-h-[78vh]  ml-16 2xl:ml-0'>

    <div className="relative bg-green-50 md:pt-8 pb-36 pt-12 -z-10">
    </div>
    <div className="flex max-w-[1430px] -mt-44 md:pt-10 flex-wrap mx-auto pb-48">
        {children}
    </div>
    </div>
  )
}

export default AdminDesign
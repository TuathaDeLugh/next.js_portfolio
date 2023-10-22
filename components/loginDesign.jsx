"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
function LoginDesign({children}) {
    const path = usePathname()
    if (path === '/login') return (<>{children}</>)
  return (
    <div className='mx-auto min-h-[96vh] mt-16 md:mt-20 '>
    {children}
  </div>

  )
}

export default LoginDesign
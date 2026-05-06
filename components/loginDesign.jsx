"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
function LoginDesign({children}) {
    const path = usePathname()
    if (path === '/login') return (<>{children}</>)
  return (
    <div className='mx-auto min-h-[96vh]'>
    {children}
  </div>

  )
}

export default LoginDesign
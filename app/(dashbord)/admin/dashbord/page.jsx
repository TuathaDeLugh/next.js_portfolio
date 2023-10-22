"use client"
import React from 'react'
import { useSession } from "next-auth/react"
function page() {
  const { data: session, status} = useSession()
  if (status === "authenticated") {
  return(<>
  <div className="w-full px-4">
        <div className="relative p-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
        <p className=' text-base text-center'>Signed in as {session.user.role}</p>
        <p className=' text-base text-center'>Email is {session.user.email}</p>  

        </div>
      </div>
    
  </>)}
}

export default page
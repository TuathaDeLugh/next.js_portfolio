"use client"
import { useSession } from 'next-auth/react'
import LoginForm from './Loginform'
import {redirect} from "next/navigation"

function Seschack({children}) {
    const { data: session} = useSession()
  return (
    <>
        { 
            session &&(
              <>
              {children}
              </>)
                }

            { 
             ! session &&(
              <>
            {redirect("/login")}
              </>)
                }   
    </>
  )
}

export default Seschack
"use client"
import { useSession } from 'next-auth/react'
import LoginForm from './Loginform'

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
            <LoginForm/>
              </>)
                }   
    </>
  )
}

export default Seschack
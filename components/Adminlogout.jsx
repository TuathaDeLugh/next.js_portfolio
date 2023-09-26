import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from "next-auth";
import React from 'react'

async function Adminlogout() {
    // const session = await getServerSession(authOptions);
  return (
    <>
    {/* <li>
                <button className="text-l text-white rounded bg-green-500 hover:border-2 hover:border-green-500  md:my-3 md:py-2 md:px-2 py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-green-500  md:hover:bg-transparent"
          onClick={() => signOut()}
          
        >
          Log Out
        </button>
                </li> */}
                </>
  )
}

export default Adminlogout
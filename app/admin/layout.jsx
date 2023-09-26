import Nav from '@/components/AdminSlider'
import React from 'react'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from '../api/auth/[...nextauth]/route';


async function layout({children}) {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  return (
    <div>

        <Nav/>
        <div className="relative bg-green-50 md:pt-8 -mt-2 pb-36 pt-12 -z-10">
      </div>
    <div className="flex max-w-7xl -mt-44 pt-10 flex-wrap mx-auto pb-48">
        {children}
        </div>
    </div>
  )
}

export default layout
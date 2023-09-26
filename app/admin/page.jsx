"use client";
import React from 'react'

import { signOut } from "next-auth/react";

export default async  function Admin() 
{
   
  return (
    <>
        <div className="w-full px-4">
        <div className="relative p-5 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
            dynamic home and about data will be placed here
            <button className="text-l text-white rounded bg-green-500 hover:border-2 hover:border-green-500  md:my-3 md:py-2 md:px-2 py-5 px-6 text-center  border-b-2 md:border-b-0   md:hover:text-green-500  md:hover:bg-transparent"
          onClick={() => signOut()}>
          Log Out
        </button>
          </div>
          </div>
          
    </>
  )
}

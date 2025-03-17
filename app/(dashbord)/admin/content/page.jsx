import Allskills from '@/components/admin_content/Allskills';
import Edjucation from '@/components/admin_content/Edjucation'
import Experience from '@/components/admin_content/Experience';
import React from 'react'
import { TbId } from "react-icons/tb";

function page() {
  return (
<div className="w-full flex max-w-[1430px] flex-wrap -mt-10 md:-mt-8 mx-auto pb-4 justify-around">
        <div className="w-full  m-4 px-4 py-4 rounded-lg ">
          <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
            <TbId size={25} />
          </div>
          <h3
            className={
              "font-semibold text-3xl "}
          >
            Website Home & About Content 
          </h3>
        </div>
        
        <Experience/>
        <Edjucation/>
        <Allskills/>
    </div>
  )
}

export default page
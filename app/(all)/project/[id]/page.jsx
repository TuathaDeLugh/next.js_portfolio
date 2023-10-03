
import React from 'react'
import getSingleProject from "@/controllers/singleproject";
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import DelProjBtn from "@/components/DelProjBtn";
async function Details({ params: { id } }) 
{
    
const project = await getSingleProject(id); 
  return (
    <><div className='mx-auto min-h-[78vh] '>

    <div className="relative bg-green-50 -mt-2 md:pt-8 pb-36 pt-12 -z-10">
    </div>
    <div className="flex max-w-7xl -mt-44 pt-10 flex-wrap mx-auto pb-48">
    <div className="w-full px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded-lg  border-0">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <Link href={`/project`} title="back">
                    <IoChevronBack className="text-black" size={25}/>
                  </Link> 
                    <h6 className="text-black text-xl font-bold">{project.title}</h6>
            
              <div></div>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10">
          
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <div
                    className=" flex justify-center uppercase text-black text-sm font-bold my-7"
                    
                  >
                    <img className='w-100' src={project.image} alt="Something Wrong"/>
                  </div>
                  
                  <div
                    className="block uppercase text-black text-sm font-bold my-7"
                    
                  >
                    <Link href={project.github} className='bg-slate-500 text-white  rounded px-6 py-[0.58rem] hover:bg-slate-800 hover:text-green-50 mr-3'>Github</Link>
                    {project.livedemo === '/' ?  null : (  
                <Link href={project.livedemo} className='bg-blue-500  text-white  rounded px-4 py-[0.58rem] hover:bg-blue-800 hover:text-green-50' >live Demo</Link>
                ) } 

                  </div>
                  
                  <div
                    className="block uppercase text-black text-sm font-bold my-7"
                    
                  >
                    created with : <label className=' font-normal'>{project.technology}</label> 
                  </div>
                  
                  <div
                    className="block text-black text-sm font-normal my-7"
                    
                  ><textarea className='resize-none w-full bg-white text-base h-screen' disabled>
                    {project.summary}
                  </textarea>
                  </div>
                  
                </div>
              </div>
            </div>
           </div>
           </div>
</div>
</div>
    </>
  )
}

export default Details
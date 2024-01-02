
import React from 'react'
import getSingleProject from "@/controllers/singleproject";
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import DelProjBtn from "@/components/Delete/DelProjBtn";
import Image from 'next/image';
async function Details({ params: { id } }) 
{
    
const project = await getSingleProject(id); 
  return (
    <>
    <div className="w-full px-4 ">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded-lg  border">
        <div className="rounded-t mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <Link href={`/admin/project`} title="back">
                    <IoChevronBack className="text-black" size={25}/>
                  </Link> 
                    <h6 className="text-black text-xl font-bold">{project.title}</h6>
            
              <DelProjBtn id={project._id}  name={project.image.name}/>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10">
          
              <div className="w-full px-4">
                <div className="relative w-full mb-3">
                  <div
                    className=" flex justify-center uppercase text-black font-bold my-7"
                    
                  >
                    <Image width={1200} height={900} className='rounded-lg border shadow-md' src={project.image.link} alt="Something Wrong"/>
                  </div>
                  
                  <div
                    className="block uppercase text-black text-sm font-bold my-7"
                    
                  >
                    <Link href={project.github} target="_blank" className='bg-slate-500 text-white  rounded px-6 py-[0.58rem] hover:bg-slate-800 hover:text-green-50 mr-3'>Github</Link>
                    {project.livedemo === '/' ?  null : (  
                <Link href={project.livedemo} target="_blank" className='bg-blue-500  text-white  rounded px-4 py-[0.58rem] hover:bg-blue-800 hover:text-green-50' >live Demo</Link>
                ) } 

                  </div>
                  
                  <div
                    className="block uppercase text-black font-bold my-7"
                    
                  >
                    created with : <label className=' font-normal'>{project.technology}</label> 
                  </div>
                  
                 <div className='data w-full bg-white text-justify' dangerouslySetInnerHTML={ {__html: project.summary } } >
                    
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
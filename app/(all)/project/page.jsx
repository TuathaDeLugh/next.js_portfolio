import Link from 'next/link'
import React from 'react'
import getProjects from '@/controllers/project';
import Image from 'next/image';

async function ProjectList() {
  const projects = await getProjects();
  console.log("project loded");
  return (
    <>
    <div className='min-h-screen max-w-[1550px] mx-auto mb-40'>
    
    <div className="flex flex-wrap p-4 justify-start">

   
      {projects?.map((project) => {
        return (
          <Link href={`/project/${project._id}`} className='md:w-1/2 grow md:grow-0'>
            <div className=' md:hover:shadow-xl border border-gray-200 rounded-lg shadow m-4 '>

            <h5 class="mb-2 text-2xl font-bold tracking-tight bg-green-300 text-gray-900 rounded-t-lg p-4 ">{project.title}</h5>

            <div className=' lg:flex p-4 pt-2'>

        <div className='flex justify-center'>

        <img class="rounded h-48 w-auto" 
        src={(project.image) } 
        />
        </div>

            <div class="pl-5 pt-5 lg:pt-0 ">
            <p class="mb-2 text-xl tracking-tight text-gray-900 h-2/3">{project.info}</p>
            <p class="mb-2 text-lg tracking-tight text-gray-900 h-1/3">{project.technology}</p>
        
</div>
            </div>
            </div>
          </Link>
        );
      })}
       </div>
       </div>
    </>
  )
}

export default ProjectList
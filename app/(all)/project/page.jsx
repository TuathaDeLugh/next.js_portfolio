import Link from 'next/link'
import React from 'react'
import getProjects from '@/controllers/project';
import DelProjBtn from '@/components/DelProjBtn';

async function ProjectList() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <>
    <div className='min-h-screen max-w-[1550px] mx-auto'>
    
    <div className="flex flex-wrap p-4 justify-between">

   
      {projects?.map((project) => {
        return (
          <Link href={`/project/${project._id}`}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow my-4 hover:scale-105">
    
        <img class="rounded-t-lg" src="https://umangsailor-try.vercel.app/code.png" alt="image honi chahiye" />

    <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{project.title}</h5>
        
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
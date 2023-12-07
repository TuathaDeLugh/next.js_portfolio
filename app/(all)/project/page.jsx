import Link from 'next/link'
import React from 'react'
import { GrTechnology } from "react-icons/gr";
import getProjects from '@/controllers/project';
import { PiProjectorScreenChartLight } from "react-icons/pi";

async function ProjectList() {
  const projects = await getProjects();
  // console.log("project loded");
  return (
    <>
      <div className='min-h-screen max-w-[1550px] mx-auto mb-40'>
        <div className=" items-center  mt-28 font-semibold text-4xl flex gap-3 text-gray-700"> <div className="rounded-full p-3 shadow-lg text-black"><PiProjectorScreenChartLight size={25}  /> </div>  Projects </div>
          {
          projects ? (
            <div class="p-10 grid grid-cols-1 gap-8  lg:grid-cols-2">
             
             {projects?.map((project) => {
                return (
              <div className='relative' key={project._id}>
                <img class="relative z-10 object-cover border w-full rounded-md h-72 md:h-96" src={project.image.link} alt={project.image.name}  />

                <div class="relative z-20 w-3/4 max-w-lg p-6 mx-auto md:h-44 -mt-20 bg-green-50 rounded-md shadow ">
                  <Link href={`/project/${project._id}`} class="font-semibold text-gray-800 hover:underline  md:text-xl">
                    {project.title}
                  </Link>

                  <p class="mt-3 text-sm text-gray-500 md:text-sm">
                    {project.info}
                  </p>

                  <p class="mt-3 lg:flex gap-2 items-center text-sm text-gray-500">
                  <GrTechnology size={15} /> {project.technology}
                  </p>
                </div>
              </div>
              );
            })}
          </div>
        ) : null
      }
      </div>
    </>
  )
}

export default ProjectList
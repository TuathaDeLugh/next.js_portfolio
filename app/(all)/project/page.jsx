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
        <div className=" items-center ml-5 mt-20 md:mt-24 font-semibold text-4xl flex gap-3 text-gray-700"> <div className="rounded-full p-3 shadow-lg text-black"><PiProjectorScreenChartLight size={25}  /> </div>  Projects </div>
          {
          projects ? (
            <div className="p-10 grid grid-cols-1 gap-8  md:grid-cols-2">
             
             {projects?.map((project) => {
                return (
                  <>
              {/* <div className='relative' key={project._id}>
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
              </div> */}
              <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 lg:h-[30rem] group bg-slate-300 relative border "
              style={{ backgroundImage: `url(${project.image.link}) ` , backgroundPosition: "center center"}}>
                <Link href={`/project/${project._id}`}>
              <div className=' opacity-100 group-hover:opacity-0 absolute bottom-0 left-0 bg-slate-800/60 w-full p-5 transition-opacity duration-700 backdrop-blur-md'>
              <h2 className="text-xl font-semibold text-white capitalize">{project.title}</h2>
              </div>
              <div
                    className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                    <h2 className="mt-4 text-xl font-semibold text-white capitalize">{project.title}</h2>
                    <p className="mt-2 text-lg tracking-wider text-green-400 uppercase ">
                    {project.technology}
                    </p>
                    <p className="mt-2 text-sm tracking-wider text-slate-300 ">{project.info}</p>
                </div>
                      </Link>
            </div>
            </>
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
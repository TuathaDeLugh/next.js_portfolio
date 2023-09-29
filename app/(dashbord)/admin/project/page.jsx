import Link from 'next/link'
import React from 'react'
import getProjects from '@/controllers/project';
import DelProjBtn from '@/components/DelProjBtn';
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";

async function ProjectList() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <>
    <div className='min-h-screen max-w-[1550px] mx-auto'>
    <div className='flex gap-2 my-2 mx-2'>
      <Link href={"/admin/project/addproject"} className='bg-green-600 font-bold text-white py-3 px-6 rounded'>Add Project</Link>
    </div>
    <div className="flex flex-wrap p-4 justify-between">

   
      {projects?.map((project) => {
        return (
          <div className="flex p-4 flex-grow md:flex-grow-0 border border-slate-300 rounded-lg my-3 justify-between w-[48%] gap-5 items-start" key={project._id}>
            <div className="project-details flex-col">
              <h2 className="font-bold text-2xl">{project.title}</h2>
              <div>{project.info}</div>
              <div>{project.technology}</div>
              <div className='bg-green-600 font-bold w-max text-white py-2 px-4 rounded'><a href={project.github} >github</a></div>
              <div>{project.summary}</div>
              <div>{project.createdAt}</div>

            </div>
            <div className="project-actions">
              <DelProjBtn id={project._id} />
              <Link
                className="edit"
                href={`/admin/project/edit-project/${project._id}`}
                title="Edit"
              >
                <HiPencilAlt size={32} className='text-blue-600'/>
              </Link>
              <Link href={`/admin/project/${project._id}`} title="View " >
                <AiOutlineEye className='text-green-600' size={32} />
              </Link>
            </div>
          </div>
        );
      })}
       </div>
       </div>
    </>
  )
}

export default ProjectList
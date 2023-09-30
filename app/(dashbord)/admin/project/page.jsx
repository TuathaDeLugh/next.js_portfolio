import Link from 'next/link'
import React from 'react'
import getProjects from '@/controllers/project';
import DelProjBtn from '@/components/DelProjBtn';
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
async function ProjectList() {
  const projects = await getProjects();
  return (
    <>
              <div className='mx-auto min-h-[96vh]'>

<div className="relative bg-green-50 md:pt-8 pb-36 pt-12 -z-10">
</div>
<div className="flex max-w-7xl -mt-44 pt-10 flex-wrap mx-auto pb-48">
    <div className="w-full flex max-w-7xl flex-wrap -mt-10 md:-mt-8 mx-auto pb-4 justify-around">
        <div className="w-full m-4 md:w-8/12 px-4 py-4 rounded-lg ">
          <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
            <TbReportAnalytics size={25} />
          </div>
          <h3
            className={
              "font-semibold text-3xl "}
          >
            Project Link
          </h3>
        </div>
        <div className="w-full m-4 md:w-3/12 px-4 py-4 bg-green-400 rounded-lg flex-grow">
          <div className="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-1 shadow-lg rounded-full bg-white">
            <label className=' font-semibold text-2xl'>{projects.length}</label>
          </div>
          <h3
            className={"font-semibold text-2xl "}>
            Total project
            </h3>
          </div>
      </div>
    <div className='flex gap-2 w-full mx-2'>
      <Link href={"/admin/project/addproject"} className='bg-green-600 my-5 font-bold text-white py-3 px-6 rounded'>Add Project</Link>
    </div>
    <div className="flex flex-wrap p-4 justify-between">
      {projects?.map((project) => {
       return (
          <div className="flex p-4 flex-grow border border-slate-300 rounded-lg my-3 justify-between w-[48%] gap-5 items-start" key={project._id}>
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
</div>
    </>
  )
}

export default ProjectList
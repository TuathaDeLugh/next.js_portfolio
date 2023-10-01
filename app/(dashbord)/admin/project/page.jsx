import Link from 'next/link'
import React, { Suspense } from 'react'
import getProjects from '@/controllers/project';
import DelProjBtn from '@/components/DelProjBtn';
import { HiPencilAlt } from "react-icons/hi";
import { AiOutlineEye } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { TotalProject } from '@/components/total/Total';
async function ProjectList() {
  const projects = await getProjects();
  let i = 1;
  return (
    <>
              <div className='mx-auto min-h-[78vh]  ml-16 2xl:ml-0'>

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
        <TotalProject/>
          <h3
            className={"font-semibold text-2xl "}>
            Total project
            </h3>
          </div>
      </div>
    <div className='flex gap-2 w-full mx-2'>
      <Link href={"/admin/project/addproject"} className='bg-green-600 my-5 font-bold text-white py-3 px-6 rounded'>Add Project</Link>
    </div>
    <div
        className={
          "relative m-3 flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded "}
      >

        <div className=" block w-full rounded overflow-x-auto">
          {/* Projects table */}
          <table className=" items-center w-full bg-transparent over">
            <thead>
              <tr className='border border-l-0 border-r-0 bg-slate-200'>
                <th
                  className={
                    "pl-6 table-cell pr-1 w-1/12 py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  #
                </th>
                <th
                  className={
                    "px-6 table-cell  w-4/12 py-3 text-xs md:text-sm uppercase -l-0 -r-0  font-semibold text-left "
                  }
                >
                  Title
                </th>
                <th
                  className={
                    "hidden sm:table-cell w-6/12 px-6    py-3 text-xs md:text-sm uppercase -l-0 -r-0  font-semibold text-left "
                  }
                >
                  info
                </th>
                
                <th
                  className={
                    " px-6 w-1/12 py-3 text-xs md:text-sm uppercase -l-0 -r-0  font-semibold text-left "
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {projects?.map((project) => {
                return (
                  <tr key={project._id} className='border border-l-0 border-r-0'>
                    <Suspense fallback={<p>Loading</p>}>
                    <td
                      className={
                        " table-cell pl-6 pr-1    py-3 text-xs md:text-sm  -l-0 -r-0  text-left "
                      }
                    >
                      {i++}
                    </td>
                    <td
                      className={
                        "table-cell pl-6 pr-1    py-3 text-xs md:text-sm  -l-0 -r-0  text-left "
                      }
                    >
                      {project.title}
                    </td><td
                      className={
                        "hidden sm:table-cell pl-6 pr-1    py-3 text-xs md:text-sm  -l-0 -r-0  text-left "
                      }
                    >
                      {project.info}
                    </td>
                    <td
                      className={
                        "table-cell px-6 align-middle   py-3 text-xs md:text-sm flex-grow -l-0 -r-0  text-left "
                      }
                    >
                      <div className=' flex'>
                      <Link href={`/admin/project/edit-project/${project._id}`} title="View " >
                        <HiPencilAlt className='text-blue-600' size={25} />
                      </Link>
                      {/* <DelProjBtn id={project._id}/> */}
                        <p className='px-2'></p>
                      <Link href={`/admin/project/${project._id}`} title="View " >
                        <AiOutlineEye className='text-green-600' size={25} />
                      </Link>
                      </div>
                    </td>
                    </Suspense>
                  </tr>

                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
    </>
  )
}

export default ProjectList
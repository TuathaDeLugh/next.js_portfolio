import React, { Suspense } from 'react'
import { GrCertificate,} from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import Link from 'next/link';
import { HiPencilAlt } from "react-icons/hi";
import getEdus from '@/controllers/edu';
import DelEduBtn from '../Delete/DelEduBtn';

async function Edjucation() {
  const edus = await getEdus();
  return (
      <div className='w-full lg:w-[64.5%] '>
          <div className='w-full px-4 py-4 bg-white flex justify-between'>
          <div className=" rounded-lg flex ">
          <div className="p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-1 shadow-lg rounded-full bg-white">
          <GrCertificate size={20} />

          </div>
          <h3
            className={
                "p-3 font-semibold text-xl "}
                >
            Edjucation
          </h3>
        </div>
        <div className="p-3 text-white text-3xl text-center inline-flex items-center justify-center w-12 h-12 mb-1 shadow-lg rounded-full bg-green-400 ">
                <Link href={'/admin/content/add/edu'}>
                <AiOutlinePlus size={20}/>
                </Link>
          </div>
        </div>
          {/* Edu table */}
        <div className=" block w-full  py-4 rounded overflow-x-auto">
          <table className=" items-center w-full bg-transparent">
            <thead>
              <tr className='border border-l-0 border-r-0 bg-slate-200/50'>
                <th
                  className={
                    "px-6 table-cell  md:w-3/12 py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Degreee
                </th>
                <th
                  className={
                    "hidden sm:table-cell w-4/12 px-6  py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Place
                </th>
                <th
                  className={
                    "hidden sm:table-cell px-6 py-3 w-2/12 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  marks
                </th>
                <th
                  className={
                    " px-6 w-1/12 py-3 text-xs md:text-sm uppercase   font-semibold text-left "
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {edus?.map((edu) => {
                return (
                  <tr key={edu._id} className='border border-l-0 border-r-0'>
                    <Suspense fallback={<p>Loading</p>}>
                    
                    <td
                      className={
                        "table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {edu.degree}
                    </td><td
                      className={
                        "hidden sm:table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {edu.place}
                    </td>
                    <td
                      className={
                        "hidden sm:table-cell pl-6 pr-1    py-3 text-xs md:text-sm    text-left "
                      }
                    >
                      {edu.marks}
                    </td>
                    <td
                      className={
                        "table-cell px-6 align-middle   py-3 text-xs md:text-sm flex-grow   text-left "
                      }
                    >
                      <div className=' flex'>
                      <Link href={`/admin/content/edit/edu/${edu._id}`} title="Edit" >
                        <HiPencilAlt className='text-blue-600' size={25} />
                      </Link>
                        <p className='px-2'></p>
                      <DelEduBtn id={edu._id}/>
                      
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
  )
}

export default Edjucation
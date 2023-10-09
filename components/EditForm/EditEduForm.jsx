"use client";
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import {upEduSchema } from '@/Schemas';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";

export default function EditEduForm({edu}) {
    const router = useRouter();
    const initialValues = {
      newdegree: edu.degree,
      newplace: edu.place,
      newmarks: edu.marks,
    };
    
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: upEduSchema,
      onSubmit: (async (values, action) => {
        router.push("/admin/content");
        const postapi = async () => {
         
          await fetch(`/api/edu/${edu._id}`, {
              method: "PUT",
              headers: {
                  "Content-type": "application/json",
              },
              body: JSON.stringify(values),
          });
          router.refresh();
      }
  
      toast.promise(postapi(), {
          loading: "Education updateing to database",
          success: "Education Updated Successfully",
          error: "Failed To Update"
      });
  
      action.resetForm();
        
          }
        ),
      });
    return (
      <div className="relative flex flex-col max-w-xl min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
        <div className="rounded-t bg-white mb-0 px-14 py-5">
          <div className="text-center flex justify-between">
            <Link href={`/admin/content`} title="back">
              <IoChevronBack className="text-black" size={25} />
            </Link>
            <h6 className="text-black text-xl font-bold">Add Education</h6>
  
            <div></div>
  
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit} autoComplete="off">
  
            <div className="flex flex-wrap mt-5">
  
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  >
                    degree
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='10th'
                    name='newdegree'
                    value={values.newdegree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.newdegree && touched.newdegree ? (
                    <p className=" text-red-600 text-sm">* {errors.newdegree}</p>
                  ) : null}
                </div>
              </div>
  
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  >
                    Place
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='ABC collage , Surat'
                    name='newplace'
                    value={values.newplace}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.newplace && touched.newplace ? (
                    <p className=" text-red-600 text-sm">* {errors.newplace}</p>
                  ) : null}
                </div>
              </div>
  
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  >
                    Marks 
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='CGPA: 8.35'
                    name='newmarks'
                    value={values.newmarks}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.newmarks && touched.newmarks ? (
                    <p className=" text-red-600 text-sm">* {errors.newmarks}</p>
                  ) : null}
                </div>
              </div>
              
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full gap-3 flex mb-3">
                  <Link href={'/admin/content'}  className=' bg-white   text-green-600 border border-green-600 rounded px-8 py-[0.58rem] hover:bg-green-800  hover:text-green-50'> Back</Link>
                  <button type='submit'   className=' bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900'> Update</button>
  
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}

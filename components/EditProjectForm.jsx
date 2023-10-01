"use client";
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import {upprojectSchema } from '@/Schemas';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import DelProjBtn from './DelProjBtn';



function EditProjectForm({project}) {
  
  const initialValues = {
    newtitle: project.title,
    newinfo: project.info,
    newtechnology: project.technology,
    newgithub: project.github,
    newimage:project.image,
    newsummary:project.summary,
    newlivedemo:project.livedemo,
  };

  const router = useRouter();

  const postapi = async (ogvalues) => {
    
      await fetch(`/api/projects/${project._id}`, {
                method: "PUT",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify(ogvalues),
    });
    router.refresh();
    router.push("/admin/project");

  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: upprojectSchema,
      onSubmit: (async (values, action) => {
        console.log(values,project._id)
        toast.promise(postapi(values), {
          pending: "Project addeding to database",
          success: "Added Successfully",
          error: " Failed To add"
        });
        

      }
      ),
    });

  return (
    <div className='mx-auto min-h-[75vh]  ml-16 2xl:ml-0'>

    <div className="relative bg-green-50 md:pt-8 pb-36 pt-12 -z-10">
    </div>
    <div className="flex max-w-7xl -mt-52 md:-mt-44 pt-10 flex-wrap mx-auto pb-48">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
      <div className="rounded-t bg-white mb-0 px-14 py-5">
      <div className="text-center flex justify-between">
            <Link href={`/admin/project`} title="back">
                    <IoChevronBack className="text-black" size={25}/>
                  </Link> 
                    <h6 className="text-black text-xl font-bold">{project.title}</h6>
            
              <DelProjBtn id={project._id} />
            
          </div>
      </div>
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={handleSubmit} autocomplete="off">

          <div className="flex flex-wrap mt-5">
            
          <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='Potfolio'
                  name='newtitle'
                  value={values.newtitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newtitle && touched.newtitle ? (
                  <p className=" text-red-600 text-sm">* {errors.newtitle}</p>
                ) : null}
              </div>
            </div>

            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                >
                  Information
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='Basic information in 1-2 lines'
                  name='newinfo'
                  value={values.newinfo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newinfo && touched.newinfo ? (
                  <p className=" text-red-600 text-sm">* {errors.newinfo}</p>
                ) : null}
              </div>
            </div>
            
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                >
                  Technology
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='HTML,CSS,Java Script'
                  name='newtechnology'
                  value={values.newtechnology}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newtechnology && touched.newtechnology ? (
                  <p className=" text-red-600 text-sm">* {errors.newtechnology}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  
                >
                  Github
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='http://github.com/tuathadelugh/potfolio'
                  name='newgithub'
                  value={values.newgithub}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newgithub && touched.newgithub ? (
                  <p className=" text-red-600 text-sm">* {errors.newgithub}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-xs text-gray-600 font-bold mb-2"
                  
                >
                  Livedemo
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='http://localhost:3000'
                  name='newlivedemo'
                  value={values.newlivedemo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newlivedemo && touched.newlivedemo ? (
                  <p className=" text-red-600 text-sm">* {errors.newlivedemo}</p>
                ) : null}
                
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                >
                  Image
                </label>
                <input
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='https://umangsailor.vercel.app/code.png'
                  name='newimage'
                  value={values.newimage}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.newimage && touched.newimage ? (
                  <p className=" text-red-600 text-sm">* {errors.newimage}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                >
                  Detail
                </label>
                <textarea
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows="14"
                  name='newsummary'
                  value={values.newsummary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Detailed Discription in 3-4 paragraph'
                ></textarea>
                {errors.newsummary && touched.newsummary ? (
                  <p className=" text-red-600 text-sm">* {errors.newsummary}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full gap-3 flex mb-3">
                  <Link href={'/admin/project'} className=' bg-white  text-green-600 border border-green-600 rounded px-8 py-[0.58rem] hover:bg-green-800 hover:text-green-50'> Back</Link>
                <button type='submit' className=' bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900'> Submit</button>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default EditProjectForm
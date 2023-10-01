"use client";
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import {projectSchema } from '@/Schemas';
import Link from 'next/link';


const initialValues = {
  title: "",
  info: "",
  technology: "",
  github: "",
  image:"",
  summary:"",
  livedemo:"",
};

function AddProject() {

  const router = useRouter();

  const postapi = async (ogvalues) => {
    await fetch(`/api/projects`, {
      method: "POST",
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
      validationSchema: projectSchema,
      onSubmit: (async (values, action) => {

        toast.promise(postapi(values), {
          pending: "Project addeding to database",
          success: "Added Successfully",
          error: " Failed To add"
        });
        action.resetForm();

      }
      ),
    });

  return (
    <div className='mx-auto min-h-[75vh]  ml-16 xl:ml-0'>

    <div className="relative bg-green-50 md:pt-8 pb-36 pt-12 -z-10">
    </div>
    <div className="flex max-w-7xl -mt-52 md:-mt-44 pt-10 flex-wrap mx-auto pb-48">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
      <div className="rounded-t bg-white mb-0 px-14 py-5">
        <div className="text-center flex justify-between">
          <h6 className="text-gray-600 uppercase text-3xl font-semibold">Add Project</h6>
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
                  name='title'
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.title && touched.title ? (
                  <p className=" text-red-600 text-sm">* {errors.title}</p>
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
                  name='info'
                  value={values.info}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.info && touched.info ? (
                  <p className=" text-red-600 text-sm">* {errors.info}</p>
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
                  name='technology'
                  value={values.technology}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.technology && touched.technology ? (
                  <p className=" text-red-600 text-sm">* {errors.technology}</p>
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
                  name='github'
                  value={values.github}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.github && touched.github ? (
                  <p className=" text-red-600 text-sm">* {errors.github}</p>
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
                  name='livedemo'
                  value={values.livedemo}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.livedemo && touched.livedemo ? (
                  <p className=" text-red-600 text-sm">* {errors.livedemo}</p>
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
                  name='image'
                  value={values.image}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.image && touched.image ? (
                  <p className=" text-red-600 text-sm">* {errors.image}</p>
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
                  name='summary'
                  value={values.summary}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder='Detailed Discription in 3-4 paragraph'
                ></textarea>
                {errors.summary && touched.summary ? (
                  <p className=" text-red-600 text-sm">* {errors.summary}</p>
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

export default AddProject
"use client"
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";


function page() {
  const router = useRouter();
  const initialValues = {
    degree: "",
    place: "",
    marks: "",
  };
  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    // validationSchema: eduSchema,
    onSubmit: (async (values, action) => {
      router.push("/admin/content");
      const postapi = async () => {
       
        await fetch(`/api/edu`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(values),
        });
        router.refresh();
    }

    toast.promise(postapi(), {
        loading: "Education adding to database",
        success: "Education Added Successfully",
        error: "Failed To Add"
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
                  name='degree'
                  value={values.degree}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.degree && touched.degree ? (
                  <p className=" text-red-600 text-sm">* {errors.degree}</p>
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
                  name='place'
                  value={values.place}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.place && touched.place ? (
                  <p className=" text-red-600 text-sm">* {errors.place}</p>
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
                  name='marks'
                  value={values.marks}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.marks && touched.marks ? (
                  <p className=" text-red-600 text-sm">* {errors.marks}</p>
                ) : null}
              </div>
            </div>
            
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full gap-3 flex mb-3">
                <Link href={'/admin/content'}  className=' bg-white   text-green-600 border border-green-600 rounded px-8 py-[0.58rem] hover:bg-green-800  hover:text-green-50'> Back</Link>
                <button type='submit'   className=' bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900'> Submit</button>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page
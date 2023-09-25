"use client";
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import {toast } from 'react-toastify';
import { emailSchema } from '@/Schemas';

const initialValues = {
  fullname: "",
  email: "",
  subject: "",
  details: "",
};

function ContactPage() {

  
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues,
    validationSchema: emailSchema,
    onSubmit: (async (values,action) => {
                await fetch(`/api/email`, {
                  method: "POST",
                  headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
                toast.success("Message Sent Successfully");
                action.resetForm();
              }
            ),
          });

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
        <div className="rounded-t bg-white mb-0 px-14 py-5">
          <div className="text-center flex justify-between">
            <h6 className="text-gray-600 uppercase text-3xl font-semibold">Contact Me</h6> 
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit}>
            
            <div className="flex flex-wrap mt-5">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Full Name
                  </label>
                  <input
                    type="text" 
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='Umang Sailor'
                    name='fullname' 
                    value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    /> 
                    {errors.fullname && touched.fullname ? (
                      <p className=" text-red-600 text-sm">* {errors.fullname}</p>
                    ) : null}
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-xs font-bold mb-2"
                    htmlFor="grid-password"
                    >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='umangsailor@hotmail.com'
                    name='email' 
                    value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur} 
                    />
                    {errors.email && touched.email ? (
                      <p className=" text-red-600 text-sm">* {errors.email}</p>
                    ) : null}
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-600 text-xs font-bold mb-2"
                    >
                    Subject
                  </label>
                  <input
                    type="text" 
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='Colabrate with you' 
                    name='subject' 
                    value={values.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.subject && touched.subject ? (
                      <p className=" text-red-600 text-sm">* {errors.subject}</p>
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
                    rows="8"
                    name='details' 
                    value={values.details}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    placeholder='Hey I want To colarabrate with you on any Next.js project '
                    ></textarea>
                    {errors.details && touched.details ? (
                      <p className=" text-red-600 text-sm">* {errors.details}</p>
                    ) : null}
                </div>
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <button type='submit' className=' bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900'> Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default ContactPage
"use client";
import React from 'react'

import { useState } from 'react'
import { useRouter } from "next/navigation";
import {toast } from 'react-toastify';

function ContactPage() {
    const [fullname,setFullname] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [details,setDetails] = useState("");
  
    const router = useRouter();
    const db = async() =>{
        try {
            const res = await fetch(`/api/email`, {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({fullname,email,subject,details }),
            });
            // console.log({ fullname,email,subject,details });
            if (res.ok) {
                router.refresh();
                router.push("/");
                // toast.success('Message Sent Successfully');
              return;
            } else {
              throw new Error("Failed to add Email");
            }
          } catch (error) {
            console.log(error);
          }
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
  
    //   if (!fullname||!email||!subject||!details) {
    //     toast.error('Data dal de');
    //     return;
    //   }
    toast.promise(db, {
        pending: "Sending Message To Umang Sailor",
        success: "Message Sent Successfully",
        error: " Failed To Send"});
      
    };

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
                    type="text" onChange={(e)=> setFullname(e.target.value) }value={fullname} 
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='Umang Sailor' required
                    /> 
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
                    type="text" onChange={(e)=> setEmail(e.target.value) }value={email} 
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='umangsailor@hotmail.com' required
                    />
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
                    type="text" onChange={(e)=> setSubject(e.target.value) }value={subject} 
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder='Colabrate with you' required
                    />
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
                    type="text" onChange={(e)=> setDetails(e.target.value) }value={details} 
                    className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="8"
                    required
                    placeholder='Hey I want To colarabrate with you on any Next.js project '
                    ></textarea>
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
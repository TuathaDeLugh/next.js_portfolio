"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { useFormik } from "formik";
import { toast } from 'react-hot-toast';

export default function AddSkill() {
    const initialValues = {
        lang: "",
      };
      const router = useRouter();

      const postapi = async (ogvalues) => {
        await fetch(`/api/skills`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(ogvalues),
        });
        router.refresh();
    
      }
      const { values, handleChange, handleSubmit } =
      useFormik({
        initialValues,
        onSubmit: (async (values, action) => {
          
          toast.promise((postapi(values)), {
            loading: "Adding Skill",
            success: "Skill Added Successfully",
            error: " Failed To Add"
          });
          action.resetForm();
  
        }
        ),
      });
  return (
        <form onSubmit={handleSubmit}>
    <div className='flex gap-2 '>

                    <input type="text"  className='border rounded-full px-4 w-[95%] '
                    name='lang'
                    placeholder='Enter Skill'
                    value={values.lang}
                    onChange={handleChange}
                    required />
                    <button type='submit' className="p-3 text-white text-3xl text-center inline-flex items-center justify-center w-10 h-10 mb-1 shadow-lg rounded-full bg-green-400 ">
                        
                        <AiOutlinePlus size={20} />
                    </button>

                </div>
        </form>
  )
}

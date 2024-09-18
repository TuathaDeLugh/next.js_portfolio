"use client";
import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import {upprojectSchema } from '@/Schemas';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";
import DelProjBtn from '../Delete/DelProjBtn';
import {ref,deleteObject,uploadBytes,getDownloadURL} from "firebase/storage";
import { storage } from '@/database/firebase';
import RichTextEditor from '../RichTextArea';


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

  
  

  const { values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue } =
    useFormik({
      initialValues,
      validationSchema: upprojectSchema,
      onSubmit: (async (values, action) => {
        const postapi = async () => {
          router.push("/admin/project");
          if(values.image == null){
            

            const projectdata = {
                newtitle: values.newtitle,
                newinfo: values.newinfo,
                newtechnology: values.newtechnology,
                newgithub: values.newgithub,
                newsummary: values.newsummary,
                newlivedemo: values.newlivedemo
            };  
            await fetch(`/api/projects/${project._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(projectdata),
            });
          }
          else{

            const imagedel = ref(storage, `images/${review.image.name}`);
        await deleteObject(imagedel);
        const imageRef = ref(storage, `images/${values.image.name}`);
        const snapshot = await uploadBytes(imageRef, values.image);
        const downloadURL = await getDownloadURL(snapshot.ref);
            const projectdata = {
                newtitle: values.newtitle,
                newinfo: values.newinfo,
                newtechnology: values.newtechnology,
                newgithub: values.newgithub,
                newimage: {
                  name:values.image.name,
                  link:downloadURL
                },
                newsummary: values.newsummary,
                newlivedemo: values.newlivedemo
            };  
            await fetch(`/api/projects/${project._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(projectdata),
            });
          }
          router.refresh();
      }
        // console.log(values,project._id)
        toast.promise((postapi(values)), {
          loading: "Project updateing to database",
          success: "Project Updated Successfully",
          error: " Failed To update"
        });
        action.resetForm();

      }
      ),
    });

  return (

    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
      <div className="rounded-t bg-white mb-0 px-14 py-5">
      <div className="text-center flex justify-between">
            <Link href={`/admin/project`} title="back">
                    <IoChevronBack className="text-black" size={25}/>
                  </Link> 
                    <h6 className="text-black text-xl font-bold">{project.title}</h6>
            
              <DelProjBtn id={project._id} name={project.image.name}/>
            
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
                  placeholder='portfolio'
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
                  placeholder='http://github.com/tuathadelugh/portfolio'
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
                  type="file"
                  accept="image/png, .svg"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder='https://umangsailor.vercel.app/code.png'
                  name='newimage'
                  onChange={(e) => {
                    setFieldValue('image', e.currentTarget.files[0])
                  }}
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
                <RichTextEditor
            value={values.newsummary}
            onChange={(value) => setFieldValue('newsummary', value)}
            onBlur={handleBlur}
          />
                {errors.newsummary && touched.newsummary ? (
                  <p className=" text-red-600 text-sm">* {errors.newsummary}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full gap-3 flex mb-3">
                  <Link href={'/admin/project'} className=' bg-white  text-green-600 border border-green-600 rounded px-8 py-[0.58rem] hover:bg-green-800 hover:text-green-50'> Back</Link>
                <button type='submit' className=' bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900'> Update</button>

              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditProjectForm
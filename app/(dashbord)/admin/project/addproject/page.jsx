"use client";

import { useState } from 'react'
import { useRouter } from "next/navigation";
import {toast } from 'react-toastify';



function AddProject() {

  const [title,setTitle] = useState("");
  const [info,setInfo] = useState("");
  const [technology,setTechnology] = useState("");
  const [github,setGithub] = useState("");
  const [summary,setSummary] = useState("");
  const [image,setimage] = useState("");
  const [livedemo,setlivedemo] = useState("");


  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !info||!technology||!github||!summary) {
      toast.error('Data dal de');
      return;
    }
    try {
      const res = await fetch(`/api/projects`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title,info,technology,github,summary,image,livedemo }),
      });
      // console.log({ title,info,technology,github,summary });
      if (res.ok) {
          router.refresh();
          router.push("/admin/project");
        return;
      } else {
        throw new Error("Failed to create a Project");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=' gap-2 my-2 mx-2'>

    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      
        <input 
        onChange={(e)=> setTitle(e.target.value) }value={title} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter Title" type="text"/>
        <input 
        onChange={(e)=> setInfo(e.target.value) }value={info} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter info" type="text"/>
        <input 
        onChange={(e)=> setTechnology(e.target.value) }value={technology} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter technology" type="text"/>
        <input 
        onChange={(e)=> setGithub(e.target.value) }value={github} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter github" type="text"/>
        <input 
        onChange={(e)=> setSummary(e.target.value) }value={summary} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter summary" type="text"/>
        <input 
        onChange={(e)=> setimage(e.target.value) }value={image} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter summary" type="text"/>
        <input 
        onChange={(e)=> setlivedemo(e.target.value) }value={livedemo} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter summary" type="text"/>
    
        <button type='submit' className=" bg-green-600 font-bold text-white py-3 px-6 rounded">Add Project</button>
    </form>
        </div>
  )
}

export default AddProject
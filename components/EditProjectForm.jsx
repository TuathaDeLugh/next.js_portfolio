"use client";

import { useState } from 'react'
import { useRouter } from "next/navigation";
import {toast } from 'react-toastify';



function EditProjectForm({project}) {
    
  const [newtitle,setnewTitle] = useState(project.title);
  const [newinfo,setnewInfo] = useState(project.info);
  const [newtechnology,setnewTechnology] = useState(project.technology);
  const [newgithub,setnewGithub] = useState(project.github);
  const [newsummary,setnewSummary] = useState(project.summary);
console.log({ newtitle,newinfo,newtechnology,newgithub,newsummary });
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newtitle || !newinfo||!newtechnology||!newgithub||!newsummary) {
      toast.error('Data bhar de');
      return;
    }
    try {
      const res = await fetch(`/api/projects/${project._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newtitle,newinfo,newtechnology,newgithub,newsummary }),
      });
      // console.log({ title,info,technology,github,summary });
      if (res.ok) {
          toast.info("Project updated");
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
        onChange={(e)=> setnewTitle(e.target.value) }value={newtitle} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter Title" type="text"/>
        <input 
        onChange={(e)=> setnewInfo(e.target.value) }value={newinfo} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter info" type="text"/>
        <input 
        onChange={(e)=> setnewTechnology(e.target.value) }value={newtechnology} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter technology" type="text"/>
        <input 
        onChange={(e)=> setnewGithub(e.target.value) }value={newgithub} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter github" type="text"/>
        <input 
        onChange={(e)=> setnewSummary(e.target.value) }value={newsummary} 
        className=" border border-slate-500 px-8 py-2 rounded"
        placeholder="Enter summary" type="text"/>
    
        <button type='submit' className=" bg-green-600 font-bold text-white py-3 px-6 rounded">Add Project</button>
    </form>
        </div>
  )
}

export default EditProjectForm
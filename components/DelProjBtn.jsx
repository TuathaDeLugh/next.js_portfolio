"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";



export default function DelProjBtn({ id }) {
  const router = useRouter();

  async function handleDeleteCourse() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      toast.success('Item Deleted');
      router.push('/admin/project');
      router.refresh();
    }
  }
  return (
    <button onClick={handleDeleteCourse}>
      <MdOutlineDelete size={25} className='text-red-600' title="delete"/>
    </button>
  );
}
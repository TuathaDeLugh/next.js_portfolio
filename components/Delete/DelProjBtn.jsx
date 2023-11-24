"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-hot-toast';
import { MdOutlineDelete } from "react-icons/md";
import { ref, deleteObject } from "firebase/storage";
import { storage } from "@/database/firebase";


export default function DelProjBtn({ id , name }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const imagedel = ref(storage, `images/${name}`);
      await deleteObject(imagedel);
      await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      toast.success('Project Deleted');
      router.push('/admin/project');
      router.refresh();
    }
  }
  return (
    <button onClick={handleDelete}>
      <MdOutlineDelete size={25} className='text-red-600' title="delete"/>
    </button>
  );
}
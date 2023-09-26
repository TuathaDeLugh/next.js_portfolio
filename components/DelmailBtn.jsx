"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import {toast } from 'react-toastify';
import { MdOutlineDelete } from "react-icons/md";

function DelmailBtn({ id }) {
    const router = useRouter();
    const delapi = async() => {
      await fetch(`/api/email?id=${id}`, {
        method: "DELETE",
      });
    }
    async function handleDeleteCourse() {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        toast.promise(delapi, {
          pending: "Deleting Mail",
          success: "mail deleted Successfully",
          error: " Failed To Delete"});
        router.push('/admin/contact');
        router.refresh();
      }
    }
    return (
      <button onClick={handleDeleteCourse}>
        <MdOutlineDelete size={25} className='text-red-600' />
      </button>
    );
  }

export default DelmailBtn
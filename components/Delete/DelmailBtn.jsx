"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import {toast } from 'react-hot-toast';
import { MdOutlineDelete } from "react-icons/md";

function DelmailBtn({ id }) {
    const router = useRouter();
    
  async function handleDelete() {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        await fetch(`/api/email?id=${id}`, {
          method: "DELETE",
        });
      toast.success('Contact request Deleted');
        router.push('/admin/contact');
        router.refresh();
      }
    }
    return (
      <button onClick={handleDelete}>
        <MdOutlineDelete size={25} className='text-red-600' />
      </button>
    );
  }

export default DelmailBtn
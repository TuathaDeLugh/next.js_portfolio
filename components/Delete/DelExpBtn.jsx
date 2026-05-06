"use client";
import { useRouter } from "next/navigation";
import React from "react";
import {toast } from 'react-hot-toast';
import { MdOutlineDelete } from "react-icons/md";



export default function DelExpBtn({ id }) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`/api/exp?id=${id}`, {
        method: "DELETE",
      });
      toast.success('Experience Deleted');
      router.push('/admin/content');
      router.refresh();
    }
  }
  return (
    <button onClick={handleDelete} className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-150" title="Delete">
      <MdOutlineDelete size={20} />
    </button>
  );
}
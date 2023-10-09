"use client"
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
import {toast } from 'react-hot-toast';

export default function DelSkillBtn({ id }) {
    const router = useRouter();
  
    async function handleDelete() {
      const confirmed = confirm("Are you sure?");
      if (confirmed) {
        await fetch(`/api/skill?id=${id}`, {
          method: "DELETE",
        });
        toast.success('skill Deleted');
        router.push('/admin/content');
        router.refresh();
      }
    }
    return (
      <button onClick={handleDelete}>
        <TiDelete size={20} title="delete"/>
      </button>
    );
  }
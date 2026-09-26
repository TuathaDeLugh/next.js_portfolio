"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { TiDelete } from "react-icons/ti";
import { toast } from "react-hot-toast";

interface DelSkillBtnProps {
  id: string;
}

const DelSkillBtn: React.FC<DelSkillBtnProps> = ({ id }) => {
  const router = useRouter();

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`/api/skills?id=${id}`, {
        method: "DELETE",
      });
      toast.success("skill Deleted");
      router.push("/admin/content");
      router.refresh();
    }
  }

  return (
    <button onClick={handleDelete} className="cursor-pointer" title="delete">
      <TiDelete size={20} />
    </button>
  );
};

export default DelSkillBtn;

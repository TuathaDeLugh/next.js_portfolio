"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

interface DelmailBtnProps {
  id: string;
}

const DelmailBtn: React.FC<DelmailBtnProps> = ({ id }) => {
  const router = useRouter();

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`/api/email?id=${id}`, {
        method: "DELETE",
      });
      toast.success("Contact request Deleted");
      router.push("/admin/contact");
      router.refresh();
    }
  }

  return (
    <button onClick={handleDelete} className="cursor-pointer" title="Delete">
      <MdOutlineDelete size={25} className="text-red-600" />
    </button>
  );
};

export default DelmailBtn;

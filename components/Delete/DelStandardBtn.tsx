"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

interface DelStandardBtnProps {
  id: string;
}

const DelStandardBtn: React.FC<DelStandardBtnProps> = ({ id }) => {
  const router = useRouter();

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure you want to delete this standard?");
    if (confirmed) {
      await fetch(`/api/standards?id=${id}`, {
        method: "DELETE",
      });
      toast.success("Standard Deleted");
      router.push("/admin/content");
      router.refresh();
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="p-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors duration-150 cursor-pointer"
      title="Delete"
    >
      <MdOutlineDelete size={20} />
    </button>
  );
};

export default DelStandardBtn;

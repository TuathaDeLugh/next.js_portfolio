"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

interface DelServiceBtnProps {
  id: string;
}

const DelServiceBtn: React.FC<DelServiceBtnProps> = ({ id }) => {
  const router = useRouter();

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure you want to delete this service?");
    if (confirmed) {
      await fetch(`/api/services?id=${id}`, {
        method: "DELETE",
      });
      toast.success("Service Deleted");
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

export default DelServiceBtn;

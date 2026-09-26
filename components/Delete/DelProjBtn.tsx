"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";
import { deleteFilesFromBucket } from "@/utils/bucketApi";

interface DelProjBtnProps {
  id: string;
  name?: string;
}

const DelProjBtn: React.FC<DelProjBtnProps> = ({ id, name }) => {
  const router = useRouter();

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      if (name) {
        try {
          await deleteFilesFromBucket([name]);
        } catch (err) {
          console.error("Bucket deletion error:", err);
        }
      }
      await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      toast.success("Project Deleted");
      router.push("/admin/project");
      router.refresh();
    }
  }

  return (
    <button onClick={handleDelete} className="cursor-pointer" title="delete">
      <MdOutlineDelete size={25} className="text-red-600" />
    </button>
  );
};

export default DelProjBtn;

"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";
import { deleteFilesFromBucket } from "@/utils/bucketApi";

interface DelProjBtnProps {
  id: string;
  name?: string;
}

export const DelProjBtn: React.FC<DelProjBtnProps> = ({ id, name }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleDelete(): Promise<void> {
    const confirmed = confirm(
      "Are you sure you want to permanently delete this project artifact?"
    );
    if (!confirmed) return;

    setLoading(true);
    try {
      if (name) {
        try {
          await deleteFilesFromBucket([name]);
        } catch (err) {
          console.error("Bucket deletion error:", err);
        }
      }
      const res = await fetch(`/api/projects?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Project artifact deleted");
        router.push("/admin/project");
        router.refresh();
      } else {
        toast.error("Failed to delete project");
      }
    } catch {
      toast.error("Network error while deleting");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-2 rounded-lg text-pearl-dim hover:text-red-400 hover:bg-red-500/10 transition-colors duration-150 cursor-pointer disabled:opacity-50"
      title="Delete project"
      aria-label="Delete project"
    >
      <FiTrash2 size={16} />
    </button>
  );
};

export default DelProjBtn;

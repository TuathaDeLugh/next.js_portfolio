"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

interface DelmailBtnProps {
  id: string;
}

export const DelmailBtn: React.FC<DelmailBtnProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure you want to delete this transmission?");
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/email?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Transmission deleted");
        router.push("/admin/contact");
        router.refresh();
      } else {
        toast.error("Failed to delete transmission");
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
      title="Delete transmission"
      aria-label="Delete transmission"
    >
      <FiTrash2 size={16} />
    </button>
  );
};

export default DelmailBtn;

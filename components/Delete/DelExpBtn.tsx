"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FiTrash2 } from "react-icons/fi";

interface DelExpBtnProps {
  id: string;
}

export const DelExpBtn: React.FC<DelExpBtnProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure you want to delete this career milestone?");
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/exp?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Career milestone deleted");
        router.refresh();
      } else {
        toast.error("Failed to delete milestone");
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
      title="Delete milestone"
      aria-label="Delete milestone"
    >
      <FiTrash2 size={16} />
    </button>
  );
};

export default DelExpBtn;

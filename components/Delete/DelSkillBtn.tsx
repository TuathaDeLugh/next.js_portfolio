"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-hot-toast";

interface DelSkillBtnProps {
  id: string;
}

export const DelSkillBtn: React.FC<DelSkillBtnProps> = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleDelete(): Promise<void> {
    const confirmed = confirm("Are you sure you want to remove this skill?");
    if (!confirmed) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/skills?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Skill removed from registry");
        router.refresh();
      } else {
        toast.error("Failed to delete skill");
      }
    } catch {
      toast.error("Network error while deleting skill");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
      className="p-1 rounded-md text-pearl-dim hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer disabled:opacity-50"
      title="Delete skill"
      aria-label="Delete skill"
    >
      <FiTrash2 size={13} />
    </button>
  );
};

export default DelSkillBtn;

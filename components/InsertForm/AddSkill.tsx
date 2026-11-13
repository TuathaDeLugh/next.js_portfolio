"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

interface SkillFormValues {
  lang: string;
}

export const AddSkill: React.FC = () => {
  const router = useRouter();

  const initialValues: SkillFormValues = {
    lang: "",
  };

  const postapi = async (ogvalues: SkillFormValues): Promise<void> => {
    const res = await fetch(`/api/skills`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ogvalues),
    });
    if (!res.ok) throw new Error("Failed to register skill");
    router.refresh();
  };

  const { values, handleChange, handleSubmit, isSubmitting } =
    useFormik<SkillFormValues>({
      initialValues,
      onSubmit: async (formValues, action) => {
        if (!formValues.lang.trim()) return;
        await toast.promise(postapi(formValues), {
          loading: "Registering competency...",
          success: "Skill registered successfully",
          error: "Failed to add skill",
        });
        action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="w-full sm:w-auto">
      <div className="flex items-center gap-2">
        <input
          type="text"
          name="lang"
          placeholder="Add technology (e.g. NestJS, Docker)..."
          value={values.lang}
          onChange={handleChange}
          required
          className="px-3.5 py-2 rounded-xl bg-obsidian border border-luxury-gold/20 text-pearl text-xs placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono transition-all w-full sm:w-64"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-md cursor-pointer disabled:opacity-50 flex-shrink-0"
        >
          <FiPlus size={14} />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default AddSkill;

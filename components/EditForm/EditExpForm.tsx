"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { upExpSchema } from "@/Schemas";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import DelExpBtn from "../Delete/DelExpBtn";
import { IExperience } from "@/types";

interface EditExpFormProps {
  exp: IExperience;
}

interface ExpFormValues {
  newOrgName: string;
  newAddress: string;
  newPosition: string;
  newDurationStart: string;
  newDurationEnd: string;
  newSummary: string;
}

const EditExpForm: React.FC<EditExpFormProps> = ({ exp }) => {
  const router = useRouter();
  const [isPresent, setIsPresent] = useState<boolean>(
    exp?.duration?.end?.toLowerCase() === "present"
  );

  const initialValues: ExpFormValues = {
    newOrgName: exp?.orgName ?? "",
    newAddress: exp?.address ?? "",
    newPosition: exp?.position ?? "",
    newDurationStart: exp?.duration?.start ?? "",
    newDurationEnd: exp?.duration?.end ?? "",
    newSummary: exp?.summary ?? "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = useFormik<ExpFormValues>({
    initialValues,
    validationSchema: upExpSchema,
    onSubmit: async (formValues) => {
      const payload = {
        newOrgName: formValues.newOrgName,
        newAddress: formValues.newAddress,
        newPosition: formValues.newPosition,
        newDurationStart: formValues.newDurationStart,
        newDurationEnd: isPresent ? "Present" : formValues.newDurationEnd,
        newSummary: formValues.newSummary,
      };

      const postapi = async (): Promise<void> => {
        const res = await fetch(`/api/exp/${exp._id}`, {
          method: "PUT",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Failed to update milestone");
        router.push("/admin/content");
        router.refresh();
      };

      await toast.promise(postapi(), {
        loading: "Updating career milestone...",
        success: "Milestone updated successfully",
        error: "Failed to update",
      });
    },
  });

  const handlePresentToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsPresent(checked);
    if (checked) {
      setFieldValue("newDurationEnd", "Present");
    } else {
      setFieldValue("newDurationEnd", "");
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      {/* Top action bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/content"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-carbon hover:bg-plate border border-luxury-gold/15 text-pearl-muted hover:text-pearl font-mono text-xs transition-colors"
        >
          <FiArrowLeft size={14} />
          <span>Return to Content</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-pearl-dim">
            MUTATION PROTOCOL // MILESTONE
          </span>
          <DelExpBtn id={exp._id} />
        </div>
      </div>

      {/* Main Form Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Edit Milestone: {exp.orgName}
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Update organization, responsibilities, and systems tenure
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} autoComplete="off" className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organization Name */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-exp-org"
              >
                Organization / Company <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-exp-org"
                type="text"
                name="newOrgName"
                value={values.newOrgName}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.newOrgName && touched.newOrgName && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newOrgName}</p>
              )}
            </div>

            {/* Position */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-exp-pos"
              >
                Engineering Role / Title <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-exp-pos"
                type="text"
                name="newPosition"
                value={values.newPosition}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.newPosition && touched.newPosition && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newPosition}</p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-exp-addr"
              >
                Location &amp; Work Model <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-exp-addr"
                type="text"
                name="newAddress"
                value={values.newAddress}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.newAddress && touched.newAddress && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newAddress}</p>
              )}
            </div>

            {/* Duration Start */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-exp-start"
              >
                Start Date <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-exp-start"
                type="date"
                name="newDurationStart"
                value={values.newDurationStart}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono transition-all"
              />
              {errors.newDurationStart && touched.newDurationStart && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newDurationStart}</p>
              )}
            </div>

            {/* Duration End */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  className="font-mono text-[11px] uppercase tracking-wider text-pearl-muted"
                  htmlFor="edit-exp-end"
                >
                  End Date
                </label>
                <label className="flex items-center gap-2 cursor-pointer font-mono text-xs text-luxury-gold">
                  <input
                    type="checkbox"
                    checked={isPresent}
                    onChange={handlePresentToggle}
                    className="accent-luxury-gold rounded"
                  />
                  <span>Present Role</span>
                </label>
              </div>
              <input
                id="edit-exp-end"
                type={isPresent ? "text" : "date"}
                name="newDurationEnd"
                disabled={isPresent}
                value={isPresent ? "Present" : values.newDurationEnd}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono transition-all ${
                  isPresent ? "opacity-40 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Summary */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-exp-summ"
              >
                Architecture Scope &amp; Responsibilities <span className="text-luxury-gold">*</span>
              </label>
              <textarea
                id="edit-exp-summ"
                rows={4}
                name="newSummary"
                value={values.newSummary}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all leading-relaxed"
              />
              {errors.newSummary && touched.newSummary && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newSummary}</p>
              )}
            </div>
          </div>

          <div className="pt-6 border-t border-luxury-gold/15 flex items-center justify-end gap-4">
            <Link
              href="/admin/content"
              className="px-6 py-3 rounded-2xl bg-plate hover:bg-plate-elevated border border-luxury-gold/20 text-pearl font-mono text-xs transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20 cursor-pointer disabled:opacity-50"
            >
              <FiCheck size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExpForm;

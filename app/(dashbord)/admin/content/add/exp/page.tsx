"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { experienceSchema } from "@/Schemas";

interface ExperienceFormValues {
  orgName: string;
  address: string;
  position: string;
  durationStart: string;
  durationEnd: string;
  summary: string;
}

const ExperienceForm: React.FC = () => {
  const router = useRouter();
  const today = new Date().toISOString().split("T")[0];
  const [isPresent, setIsPresent] = useState<boolean>(false);

  const formik = useFormik<ExperienceFormValues>({
    initialValues: {
      orgName: "",
      address: "",
      position: "",
      durationStart: "",
      durationEnd: today,
      summary: "",
    },
    validationSchema: experienceSchema,
    onSubmit: async (values, actions) => {
      const formattedValues = {
        orgName: values.orgName,
        address: values.address,
        position: values.position,
        duration: {
          start: values.durationStart,
          end: isPresent ? "Present" : values.durationEnd || "",
        },
        summary: values.summary,
      };

      try {
        const res = await fetch(`/api/exp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedValues),
        });
        if (res.ok) {
          toast.success("Career milestone registered successfully");
          actions.resetForm();
          setIsPresent(false);
          router.push("/admin/content");
          router.refresh();
        } else {
          toast.error("Failed to add milestone.");
        }
      } catch {
        toast.error("Network error while adding milestone.");
      }
    },
  });

  const handlePresentToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsPresent(checked);
    if (checked) {
      formik.setFieldValue("durationEnd", today);
    } else {
      formik.setFieldValue("durationEnd", "");
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
        <div className="font-mono text-[11px] text-pearl-dim">
          TRAJECTORY PROTOCOL // MILESTONE
        </div>
      </div>

      {/* Main Form Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Add Career Trajectory Milestone
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Record a leadership role, senior engineering responsibility, or systems tenure
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
        </div>

        <form onSubmit={formik.handleSubmit} autoComplete="off" className="p-6 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Organization Name */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="exp-org"
              >
                Organization / Company <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="exp-org"
                type="text"
                name="orgName"
                placeholder="e.g. WeeTech Solution"
                value={formik.values.orgName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {formik.touched.orgName && formik.errors.orgName && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {formik.errors.orgName}</p>
              )}
            </div>

            {/* Position */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="exp-position"
              >
                Engineering Role / Title <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="exp-position"
                type="text"
                name="position"
                placeholder="e.g. Senior Frontend Systems Engineer"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {formik.touched.position && formik.errors.position && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {formik.errors.position}</p>
              )}
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="exp-address"
              >
                Location &amp; Work Model <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="exp-address"
                type="text"
                name="address"
                placeholder="e.g. Surat, Gujarat, India (Hybrid / Remote)"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {formik.errors.address}</p>
              )}
            </div>

            {/* Duration Start */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="exp-start"
              >
                Start Date <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="exp-start"
                type="date"
                name="durationStart"
                value={formik.values.durationStart}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono transition-all"
              />
              {formik.touched.durationStart && formik.errors.durationStart && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {formik.errors.durationStart}</p>
              )}
            </div>

            {/* Duration End */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  className="font-mono text-[11px] uppercase tracking-wider text-pearl-muted"
                  htmlFor="exp-end"
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
                id="exp-end"
                type="date"
                name="durationEnd"
                disabled={isPresent}
                value={isPresent ? "" : formik.values.durationEnd}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono transition-all ${
                  isPresent ? "opacity-40 cursor-not-allowed" : ""
                }`}
              />
            </div>

            {/* Summary */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="exp-summary"
              >
                Architecture Scope &amp; Responsibilities <span className="text-luxury-gold">*</span>
              </label>
              <textarea
                id="exp-summary"
                rows={4}
                name="summary"
                placeholder="Core developer engineering production React.js and modern frontend architectures with Material UI, TypeScript, and state management pipelines..."
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all leading-relaxed"
              />
              {formik.touched.summary && formik.errors.summary && (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {formik.errors.summary}</p>
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
              disabled={formik.isSubmitting}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-luxury-gold to-luxury-champagne text-obsidian font-mono text-xs font-bold hover:brightness-110 transition-all btn-press shadow-xl shadow-luxury-gold/20 cursor-pointer disabled:opacity-50"
            >
              <FiCheck size={16} />
              <span>Register Milestone</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExperienceForm;

"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { projectSchema } from "@/Schemas";
import Link from "next/link";
import { FiArrowLeft, FiUploadCloud, FiCheck } from "react-icons/fi";
import { uploadFilesToBucket } from "@/utils/bucketApi";
import RichTextEditor from "@/components/RichTextArea";

interface ProjectFormValues {
  title: string;
  info: string;
  technology: string;
  github: string;
  image: File | string;
  summary: string;
  livedemo: string;
  archived: boolean;
}

const AddProject: React.FC = () => {
  const router = useRouter();
  const [fileName, setFileName] = useState<string>("");

  const initialValues: ProjectFormValues = {
    title: "",
    info: "",
    technology: "",
    github: "",
    image: "",
    summary: "",
    livedemo: "",
    archived: false,
  };

  const formik = useFormik<ProjectFormValues>({
    initialValues,
    validationSchema: projectSchema,
    onSubmit: async (values, action) => {
      const postapi = async () => {
        let imageData = { name: "placeholder.png", link: "/code.png" };
        if (values.image && typeof values.image !== "string") {
          const uploadedFiles = await uploadFilesToBucket([values.image]);
          if (uploadedFiles && uploadedFiles[0]) {
            imageData = {
              name: uploadedFiles[0].name,
              link: uploadedFiles[0].link,
            };
          }
        }

        const projectdata = {
          title: values.title,
          info: values.info,
          technology: values.technology,
          github: values.github,
          image: imageData,
          summary: values.summary,
          livedemo: values.livedemo,
          archived: values.archived,
        };

        const res = await fetch(`/api/projects`, {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(projectdata),
        });

        if (!res.ok) {
          throw new Error("Failed to deploy project");
        }
        router.push("/admin/project");
        router.refresh();
      };

      await toast.promise(postapi(), {
        loading: "Deploying artifact to database...",
        success: "Project registered successfully",
        error: "Failed to deploy project",
      });

      action.resetForm();
    },
  });

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = formik;

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      {/* Top action bar */}
      <div className="flex items-center justify-between">
        <Link
          href="/admin/project"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-carbon hover:bg-plate border border-luxury-gold/15 text-pearl-muted hover:text-pearl font-mono text-xs transition-colors"
        >
          <FiArrowLeft size={14} />
          <span>Return to Projects</span>
        </Link>
        <div className="font-mono text-[11px] text-pearl-dim">
          DEPLOYMENT PROTOCOL // ARTIFACT
        </div>
      </div>

      {/* Main Form Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Deploy New Project Artifact
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Publish an engineering case study to the public catalog
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} autoComplete="off" className="p-6 sm:p-8 lg:p-10 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="project-title"
              >
                Artifact Title <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="project-title"
                type="text"
                name="title"
                placeholder="e.g. Vibe Message"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.title && touched.title ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.title}</p>
              ) : null}
            </div>

            {/* Information snippet */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="project-info"
              >
                Architecture Scope &amp; Subtitle <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="project-info"
                type="text"
                name="info"
                placeholder="e.g. Modern Push Notification Infrastructure & Real-Time Delivery SDK"
                value={values.info}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.info && touched.info ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.info}</p>
              ) : null}
            </div>

            {/* Technologies */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="project-tech"
              >
                Technology Stack (Comma separated) <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="project-tech"
                type="text"
                name="technology"
                placeholder="React 19, Next.js 16, TypeScript, Nest.js, PostgreSQL"
                value={values.technology}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono text-xs transition-all"
              />
              {errors.technology && touched.technology ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.technology}</p>
              ) : null}
            </div>

            {/* GitHub URL */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="project-github"
              >
                Source Repository URL
              </label>
              <input
                id="project-github"
                type="url"
                name="github"
                placeholder="https://github.com/TuathaDeLugh/..."
                value={values.github}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono text-xs transition-all"
              />
              {errors.github && touched.github ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.github}</p>
              ) : null}
            </div>

            {/* Live Demo URL */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="project-livedemo"
              >
                Live Production Endpoint URL
              </label>
              <input
                id="project-livedemo"
                type="url"
                name="livedemo"
                placeholder="https://project.umangsailor.com"
                value={values.livedemo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono text-xs transition-all"
              />
              {errors.livedemo && touched.livedemo ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.livedemo}</p>
              ) : null}
            </div>

            {/* File Upload Box */}
            <div className="md:col-span-2">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2">
                Artifact Visual Screenshot
              </label>
              <div className="relative border-2 border-dashed border-luxury-gold/20 hover:border-luxury-gold/50 rounded-2xl p-6 text-center bg-obsidian/60 transition-colors">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.currentTarget.files?.[0];
                    if (file) {
                      setFieldValue("image", file);
                      setFileName(file.name);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="space-y-2 pointer-events-none">
                  <FiUploadCloud size={28} className="mx-auto text-luxury-gold" />
                  <p className="font-mono text-xs text-pearl">
                    {fileName ? (
                      <span className="text-luxury-gold font-bold">{fileName}</span>
                    ) : (
                      "Click or drop screenshot to upload (PNG, JPG, WebP)"
                    )}
                  </p>
                  <p className="font-mono text-[10px] text-pearl-dim">
                    Recommended resolution: 1200x800 · Max 5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Archive state switch */}
            <div className="md:col-span-2 flex items-center justify-between p-4 rounded-2xl bg-obsidian border border-luxury-gold/15">
              <div>
                <span className="font-mono text-xs font-bold text-pearl block">
                  Catalog Status: {values.archived ? "Archived (Hidden from Public)" : "Active (Public Catalog)"}
                </span>
                <span className="font-mono text-[11px] text-pearl-dim">
                  Toggle whether this artifact is showcased on the public portfolio.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="archived"
                  checked={values.archived}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-plate peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-pearl after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-luxury-gold"></div>
              </label>
            </div>

            {/* Rich Text Editor for Summary */}
            <div className="md:col-span-2">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2">
                Technical Case Study &amp; Architectural Summary <span className="text-luxury-gold">*</span>
              </label>
              <div className="rounded-2xl overflow-hidden border border-luxury-gold/20 bg-obsidian">
                <RichTextEditor
                  value={values.summary}
                  onChange={(content) => setFieldValue("summary", content)}
                />
              </div>
              {errors.summary && touched.summary ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.summary}</p>
              ) : null}
            </div>
          </div>

          <div className="pt-6 border-t border-luxury-gold/15 flex items-center justify-end gap-4">
            <Link
              href="/admin/project"
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
              <span>Deploy Artifact</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;

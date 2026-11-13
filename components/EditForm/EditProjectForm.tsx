"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { upprojectSchema } from "@/Schemas";
import Link from "next/link";
import { FiArrowLeft, FiUploadCloud, FiCheck } from "react-icons/fi";
import DelProjBtn from "../Delete/DelProjBtn";
import { uploadFilesToBucket, deleteFilesFromBucket } from "@/utils/bucketApi";
import RichTextEditor from "../RichTextArea";
import { IProject } from "@/types";

interface EditProjectFormProps {
  project: IProject;
}

interface ProjectFormValues {
  newtitle: string;
  newinfo: string;
  newtechnology: string;
  newgithub: string;
  newimage: { name: string; link: string };
  newsummary: string;
  newlivedemo: string;
  newarchived: boolean;
  image?: File | null;
}

const EditProjectForm: React.FC<EditProjectFormProps> = ({ project }) => {
  const [fileName, setFileName] = useState<string>("");
  const router = useRouter();

  const initialValues: ProjectFormValues = {
    newtitle: project.title,
    newinfo: project.info,
    newtechnology: project.technology,
    newgithub: project.github,
    newimage: project.image,
    newsummary: project.summary,
    newlivedemo: project.livedemo,
    newarchived: project.archived || false,
    image: null,
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
  } = useFormik<ProjectFormValues>({
    initialValues,
    validationSchema: upprojectSchema,
    onSubmit: async (formValues) => {
      const postapi = async (): Promise<void> => {
        if (!formValues.image) {
          const projectdata = {
            newtitle: formValues.newtitle,
            newinfo: formValues.newinfo,
            newtechnology: formValues.newtechnology,
            newgithub: formValues.newgithub,
            newsummary: formValues.newsummary,
            newlivedemo: formValues.newlivedemo,
            newarchived: formValues.newarchived,
          };
          const res = await fetch(`/api/projects/${project._id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(projectdata),
          });
          if (!res.ok) throw new Error("Failed to update project");
        } else {
          if (project.image?.name) {
            try {
              await deleteFilesFromBucket([project.image.name]);
            } catch (err) {
              console.warn("Old bucket file delete warn:", err);
            }
          }
          const uploadedFiles = await uploadFilesToBucket([formValues.image]);
          const newImageInfo = uploadedFiles[0];
          const projectdata = {
            newtitle: formValues.newtitle,
            newinfo: formValues.newinfo,
            newtechnology: formValues.newtechnology,
            newgithub: formValues.newgithub,
            newimage: {
              name: newImageInfo.name,
              link: newImageInfo.link,
            },
            newsummary: formValues.newsummary,
            newlivedemo: formValues.newlivedemo,
            newarchived: formValues.newarchived,
          };
          const res = await fetch(`/api/projects/${project._id}`, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(projectdata),
          });
          if (!res.ok) throw new Error("Failed to update project");
        }
        router.push("/admin/project");
        router.refresh();
      };

      await toast.promise(postapi(), {
        loading: "Updating artifact...",
        success: "Project updated successfully",
        error: "Failed to update project",
      });
    },
  });

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
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-pearl-dim">
            MUTATION PROTOCOL // ARTIFACT
          </span>
          <DelProjBtn
            id={String(project._id)}
            name={project.image?.name}
          />
        </div>
      </div>

      {/* Main Form Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Edit Project Artifact: {project.title}
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Update technical specs, case study, and live deployments
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
                htmlFor="edit-title"
              >
                Artifact Title <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-title"
                type="text"
                name="newtitle"
                value={values.newtitle}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.newtitle && touched.newtitle ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newtitle}</p>
              ) : null}
            </div>

            {/* Information */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-info"
              >
                Architecture Scope &amp; Subtitle <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-info"
                type="text"
                name="newinfo"
                value={values.newinfo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
              {errors.newinfo && touched.newinfo ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newinfo}</p>
              ) : null}
            </div>

            {/* Technologies */}
            <div className="md:col-span-2">
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-tech"
              >
                Technology Stack <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-tech"
                type="text"
                name="newtechnology"
                value={values.newtechnology}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono text-xs transition-all"
              />
              {errors.newtechnology && touched.newtechnology ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newtechnology}</p>
              ) : null}
            </div>

            {/* GitHub */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-github"
              >
                Source Repository URL
              </label>
              <input
                id="edit-github"
                type="url"
                name="newgithub"
                value={values.newgithub}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono text-xs transition-all"
              />
              {errors.newgithub && touched.newgithub ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newgithub}</p>
              ) : null}
            </div>

            {/* Live Demo */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-livedemo"
              >
                Live Production Endpoint URL
              </label>
              <input
                id="edit-livedemo"
                type="url"
                name="newlivedemo"
                value={values.newlivedemo}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono text-xs transition-all"
              />
              {errors.newlivedemo && touched.newlivedemo ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newlivedemo}</p>
              ) : null}
            </div>

            {/* File Upload Box */}
            <div className="md:col-span-2">
              <label className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2">
                Replace Visual Screenshot (Optional)
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
                      "Click or drop new screenshot to replace existing"
                    )}
                  </p>
                  <p className="font-mono text-[10px] text-pearl-dim">
                    Existing: {values.newimage?.name || "code.png"}
                  </p>
                </div>
              </div>
            </div>

            {/* Archive state switch */}
            <div className="md:col-span-2 flex items-center justify-between p-4 rounded-2xl bg-obsidian border border-luxury-gold/15">
              <div>
                <span className="font-mono text-xs font-bold text-pearl block">
                  Catalog Status: {values.newarchived ? "Archived (Hidden from Public)" : "Active (Public Catalog)"}
                </span>
                <span className="font-mono text-[11px] text-pearl-dim">
                  Toggle whether this artifact is showcased on the public portfolio.
                </span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  name="newarchived"
                  checked={values.newarchived}
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
                  value={values.newsummary}
                  onChange={(content) => setFieldValue("newsummary", content)}
                />
              </div>
              {errors.newsummary && touched.newsummary ? (
                <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.newsummary}</p>
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
              <span>Save Changes</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProjectForm;

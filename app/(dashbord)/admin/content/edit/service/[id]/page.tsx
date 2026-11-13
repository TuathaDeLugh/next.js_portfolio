"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { FiArrowLeft, FiCheck } from "react-icons/fi";

interface ServiceEditFormData {
  newTitle: string;
  newDesc: string;
  newColor: string;
  newIcon: string;
}

interface EditServiceProps {
  params: Promise<{ id: string }>;
}

const EditService: React.FC<EditServiceProps> = ({ params }) => {
  const router = useRouter();
  const { id } = use(params);
  const [loading, setLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState<ServiceEditFormData>({
    newTitle: "",
    newDesc: "",
    newColor: "",
    newIcon: "",
  });

  useEffect(() => {
    async function fetchService() {
      try {
        const res = await fetch(`/api/services/${id}`);
        if (res.ok) {
          const { data } = await res.json();
          if (data) {
            setFormData({
              newTitle: data.title || "",
              newDesc: data.desc || "",
              newColor: data.color || "bg-luxury-gold",
              newIcon: data.icon || "PiDesktopTowerBold",
            });
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
    if (id) {
      fetchService();
    }
  }, [id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`/api/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Domain updated successfully!");
        router.push("/admin/content");
        router.refresh();
      } else {
        toast.error("Failed to update domain.");
      }
    } catch {
      toast.error("Network error while updating domain.");
    } finally {
      setLoading(false);
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
          MUTATION PROTOCOL // DOMAIN
        </div>
      </div>

      {/* Main Form Card */}
      <div className="rounded-3xl bg-carbon border border-luxury-gold/20 shadow-2xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-luxury-gold/15 bg-obsidian/60 flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-pearl tracking-tight">
              Edit Architectural Domain
            </h2>
            <p className="font-mono text-xs text-pearl-dim mt-0.5">
              Update scope and technical deliverables
            </p>
          </div>
          <span className="w-2.5 h-2.5 rounded-full bg-luxury-gold animate-pulse" />
        </div>

        <form onSubmit={handleSubmit} autoComplete="off" className="p-6 sm:p-8 space-y-6">
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-svc-title"
              >
                Domain Title <span className="text-luxury-gold">*</span>
              </label>
              <input
                id="edit-svc-title"
                type="text"
                name="newTitle"
                value={formData.newTitle}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all"
              />
            </div>

            {/* Description */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-svc-desc"
              >
                Technical Scope &amp; Deliverables <span className="text-luxury-gold">*</span>
              </label>
              <textarea
                id="edit-svc-desc"
                rows={4}
                name="newDesc"
                value={formData.newDesc}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-sans transition-all leading-relaxed"
              />
            </div>

            {/* Icon Selection */}
            <div>
              <label
                className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
                htmlFor="edit-svc-icon"
              >
                Symbolic Icon Designation
              </label>
              <select
                id="edit-svc-icon"
                name="newIcon"
                value={formData.newIcon}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl bg-obsidian border border-luxury-gold/20 text-pearl text-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/40 font-mono transition-all"
              >
                <option value="PiDesktopTowerBold">PiDesktopTowerBold (Fullstack / Systems)</option>
                <option value="PiTreeStructure">PiTreeStructure (Distributed Architecture)</option>
                <option value="PiChalkboardBold">PiChalkboardBold (UI / Design Engineering)</option>
                <option value="PiFileTextBold">PiFileTextBold (Technical Specs / Performance)</option>
              </select>
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
              disabled={loading}
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

export default EditService;

"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";

export default function AddService() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    color: "bg-green-500",
    icon: "PiChalkboardBold",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Service added successfully!");
        router.push("/admin/content");
        router.refresh();
      } else {
        toast.error("Failed to add service.");
      }
    } catch (error) {
      toast.error("Failed to add service.");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8 mt-6">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center bg-white gap-4">
        <Link href="/admin/content" className="p-2 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors duration-150" title="Back">
          <IoChevronBack size={20} />
        </Link>
        <h6 className="text-gray-900 text-lg font-bold">Add Service</h6>
      </div>

      {/* Form */}
      <div className="p-6 sm:p-8 bg-gray-50/30">
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Title</label>
            <input type="text" name="title" required value={formData.title} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700" placeholder="e.g. UI/UX Design" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Description</label>
            <textarea name="desc" required value={formData.desc} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700" placeholder="Detail about this service..." rows={3} />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Tailwind Color Class</label>
            <input type="text" name="color" required value={formData.color} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700" placeholder="e.g. bg-blue-500" />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Icon Name</label>
            <input type="text" name="icon" required value={formData.icon} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700" placeholder="e.g. PiChalkboardBold" />
          </div>
          
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
            <Link href={"/admin/content"} className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors duration-200">Cancel</Link>
            <button type="submit" className="px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-sm hover:shadow transition-all duration-200">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

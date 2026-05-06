"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { experienceSchema } from "@/Schemas";

function ExperienceForm() {
  const router = useRouter();

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  const [isPresent, setIsPresent] = useState(false);

  const formik = useFormik({
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
        await fetch(`/api/exp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formattedValues),
        });
        toast.success("Experience added successfully!");
        actions.resetForm();
        setIsPresent(false);
        router.push("/admin/content");
      } catch (error) {
        toast.error("Failed to add experience.");
      }
    },
  });

  // Handle "Currently working here" toggle
  const handlePresentToggle = (e) => {
    const checked = e.target.checked;
    setIsPresent(checked);
    if (checked) {
      formik.setFieldValue("durationEnd", today);
    } else {
      formik.setFieldValue("durationEnd", "");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8 mt-6">
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center bg-white gap-4">
        <Link href="/admin/content" className="p-2 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors duration-150" title="Back">
          <IoChevronBack size={20} />
        </Link>
        <h6 className="text-gray-900 text-lg font-bold">Add Experience</h6>
      </div>

      {/* Form */}
      <div className="p-6 sm:p-8 bg-gray-50/30">
        <form onSubmit={formik.handleSubmit} autoComplete="off" className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Organization Name */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Organization Name</label>
              <input
                type="text"
                name="orgName"
                placeholder="e.g. Google"
                value={formik.values.orgName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700"
              />
              {formik.touched.orgName && formik.errors.orgName && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.orgName}</p>
              )}
            </div>

            {/* Position */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">Position</label>
              <input
                type="text"
                name="position"
                placeholder="e.g. Senior Developer"
                value={formik.values.position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700"
              />
              {formik.touched.position && formik.errors.position && (
                <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.position}</p>
              )}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Address</label>
            <input
              type="text"
              name="address"
              placeholder="e.g. New York, USA"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700"
            />
            {formik.touched.address && formik.errors.address && (
              <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.address}</p>
            )}
          </div>

          {/* Duration */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Duration</label>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <input
                type="date"
                name="durationStart"
                value={formik.values.durationStart}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full sm:w-auto px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700"
              />
              <span className="text-gray-400 font-medium hidden sm:block">to</span>
              <input
                type="date"
                name="durationEnd"
                value={formik.values.durationEnd}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={isPresent}
                className="w-full sm:w-auto px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700 disabled:bg-gray-100 disabled:text-gray-400"
              />
              <label className="flex items-center gap-2 cursor-pointer mt-2 sm:mt-0 sm:ml-2">
                <input
                  type="checkbox"
                  checked={isPresent}
                  onChange={handlePresentToggle}
                  className="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-500"
                />
                <span className="text-sm font-medium text-gray-700 select-none">Present</span>
              </label>
            </div>
            {formik.touched.durationEnd && formik.errors.durationEnd && (
              <p className="text-red-500 text-xs mt-1 font-medium">{formik.errors.durationEnd}</p>
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="block text-gray-700 text-sm font-semibold mb-2">Summary</label>
            <textarea
              name="summary"
              placeholder="Detail your responsibilities and achievements..."
              value={formik.values.summary}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700"
              rows={4}
            />
          </div>

          {/* Submit */}
          <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
            <Link href={"/admin/content"} className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors duration-200">Cancel</Link>
            <button type="submit" className="px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-sm hover:shadow transition-all duration-200">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExperienceForm;

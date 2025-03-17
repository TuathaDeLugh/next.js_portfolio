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
    <div className="relative flex flex-col max-w-xl w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
      {/* Header */}
      <div className="rounded-t bg-white mb-0 px-14 py-5">
        <div className="text-center flex justify-between">
          <Link href="/admin/content" title="back">
            <IoChevronBack className="text-black" size={25} />
          </Link>
          <h6 className="text-black text-xl font-bold">Add Experience</h6>
          <div></div>
        </div>
      </div>

      {/* Form */}
      <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div className="flex flex-wrap mt-5">
            {/* Organization Name */}
            <div className="w-full px-4">
              <div className="mb-3">
                <label className="block text-gray-600 text-xs font-bold mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="orgName"
                  placeholder="Abc Pvt Ltd."
                  value={formik.values.orgName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border px-3 py-2 rounded w-full"
                />
                {formik.touched.orgName && formik.errors.orgName && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.orgName}
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div className="w-full px-4">
              <div className="mb-3">
                <label className="block text-gray-600 text-xs font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="123, Abc Road, Abc City"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border px-3 py-2 rounded w-full"
                />
                {formik.touched.address && formik.errors.address && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.address}
                  </p>
                )}
              </div>
            </div>

            {/* Position */}
            <div className="w-full px-4">
              <div className="mb-3">
                <label className="block text-gray-600 text-xs font-bold mb-2">
                  Position
                </label>
                <input
                  type="text"
                  name="position"
                  placeholder="Software developer"
                  value={formik.values.position}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border px-3 py-2 rounded w-full"
                />
                {formik.touched.position && formik.errors.position && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.position}
                  </p>
                )}
              </div>
            </div>

            {/* Duration */}
            <div className="w-full px-4">
              <div className="mb-3">
                <label className="block text-gray-600 text-xs font-bold mb-2">
                  Duration
                </label>
                <div className="flex gap-4">
                  <input
                    type="date"
                    name="durationStart"
                    value={formik.values.durationStart}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border px-3 py-2 rounded w-full"
                  />
                  <input
                    type="date"
                    name="durationEnd"
                    value={formik.values.durationEnd}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={isPresent}
                    className="border px-3 py-2 rounded w-full"
                  />
                </div>
                {formik.touched.durationEnd && formik.errors.durationEnd && (
                  <p className="text-red-600 text-sm">
                    {formik.errors.durationEnd}
                  </p>
                )}
                <div className="mt-2">
                  <input
                    type="checkbox"
                    checked={isPresent}
                    onChange={handlePresentToggle}
                  />
                  <span className="ml-2">Currently working here</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="w-full px-4">
            <label className="block text-gray-600 text-xs font-bold mb-2">
            Detail
            </label>
              <textarea
                name="summary"
                placeholder="Worked as a software engineer, also worked as a data scientist"
                value={formik.values.summary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border px-3 py-2 rounded w-full"
                rows={4}
              />
            </div>

            {/* Submit */}
            <div className="relative w-full gap-3 flex mb-3">
              <Link
                href={"/admin/content"}
                className=" bg-white   text-green-600 border border-green-600 rounded px-8 py-[0.58rem] hover:bg-green-800  hover:text-green-50"
              >
                {" "}
                Back
              </Link>
              <button
                type="submit"
                className=" bg-green-600  text-white border rounded px-6 py-2 hover:bg-green-900"
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ExperienceForm;

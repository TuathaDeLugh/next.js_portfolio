"use client";
import React from 'react';
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import { upExpSchema } from '@/Schemas';
import Link from 'next/link';
import { IoChevronBack } from "react-icons/io5";

export default function EditExpForm({ exp }) {
    const router = useRouter();

    const initialValues = {
        newOrgName: exp?.orgName ?? '',
        newAddress: exp?.address ?? '',
        newPosition: exp?.position ?? '',
        newDurationStart: exp?.duration?.start ?? '',
        newDurationEnd: exp?.duration?.end ?? '',
        newSummary: exp?.summary ?? '',
    };

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues,
            validationSchema: upExpSchema,
            onSubmit: async (values, action) => {
                router.push("/admin/content");
                const postapi = async () => {
                    await fetch(`/api/exp/${exp._id}`, {
                        method: "PUT",
                        headers: { "Content-type": "application/json" },
                        body: JSON.stringify(values),
                    });
                    router.refresh();
                };
                toast.promise(postapi(), {
                    loading: "Updating experience…",
                    success: "Experience updated successfully",
                    error: "Failed to update",
                });
                action.resetForm();
            },
        });

    const inputCls = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 outline-none text-gray-700";
    const labelCls = "block text-gray-700 text-sm font-semibold mb-2";
    const errorCls = "text-red-500 text-xs mt-1 font-medium";

    return (
        <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden mb-8 mt-6">
            {/* Header */}
            <div className="px-6 py-5 border-b border-gray-100 flex items-center bg-white gap-4">
                <Link href="/admin/content" className="p-2 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors duration-150" title="Back">
                    <IoChevronBack size={20} />
                </Link>
                <h6 className="text-gray-900 text-lg font-bold">Edit Experience</h6>
            </div>

            {/* Form */}
            <div className="p-6 sm:p-8 bg-gray-50/30">
                <form onSubmit={handleSubmit} autoComplete="off" className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        {/* Organization Name */}
                        <div>
                            <div className="relative w-full">
                                <label className={labelCls}>Organization Name</label>
                                <input
                                    type="text"
                                    className={inputCls}
                                    placeholder="Acme Corp"
                                    name="newOrgName"
                                    value={values.newOrgName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.newOrgName && touched.newOrgName && (
                                    <p className={errorCls}>{errors.newOrgName}</p>
                                )}
                            </div>
                        </div>

                        {/* Position */}
                        <div>
                            <div className="relative w-full">
                                <label className={labelCls}>Position / Role</label>
                                <input
                                    type="text"
                                    className={inputCls}
                                    placeholder="Software Engineer"
                                    name="newPosition"
                                    value={values.newPosition}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.newPosition && touched.newPosition && (
                                    <p className={errorCls}>{errors.newPosition}</p>
                                )}
                            </div>
                        </div>
                    </div>

                        {/* Address */}
                        <div>
                            <div className="relative w-full">
                                <label className={labelCls}>Address / Location</label>
                                <input
                                    type="text"
                                    className={inputCls}
                                    placeholder="Surat, Gujarat, India"
                                    name="newAddress"
                                    value={values.newAddress}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.newAddress && touched.newAddress && (
                                    <p className={errorCls}>{errors.newAddress}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Duration Start */}
                            <div>
                                <div className="relative w-full">
                                    <label className={labelCls}>Start Date</label>
                                    <input
                                        type="date"
                                        className={inputCls}
                                        name="newDurationStart"
                                        value={values.newDurationStart}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.newDurationStart && touched.newDurationStart && (
                                        <p className={errorCls}>{errors.newDurationStart}</p>
                                    )}
                                </div>
                            </div>

                            {/* Duration End */}
                            <div>
                                <div className="relative w-full">
                                    <label className={labelCls}>End Date (or "Present")</label>
                                    <input
                                        type="text"
                                        className={inputCls}
                                        placeholder="Present"
                                        name="newDurationEnd"
                                        value={values.newDurationEnd}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.newDurationEnd && touched.newDurationEnd && (
                                        <p className={errorCls}>{errors.newDurationEnd}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div>
                            <div className="relative w-full">
                                <label className={labelCls}>Summary / Responsibilities</label>
                                <textarea
                                    className={inputCls}
                                    rows="5"
                                    placeholder="Describe your role and key responsibilities…"
                                    name="newSummary"
                                    value={values.newSummary}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.newSummary && touched.newSummary && (
                                    <p className={errorCls}>{errors.newSummary}</p>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                            <Link
                                href="/admin/content"
                                className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-semibold hover:bg-gray-50 transition-colors duration-200"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-6 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-sm hover:shadow transition-all duration-200"
                            >
                                Update
                            </button>
                        </div>
                </form>
            </div>
        </div>
    );
}

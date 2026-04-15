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

    const inputCls = "border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150";
    const labelCls = "block uppercase text-gray-600 text-xs font-bold mb-2";
    const errorCls = "text-red-600 text-sm";

    return (
        <div className="relative flex flex-col max-w-2xl min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-green-50 border-0">
            {/* Header */}
            <div className="rounded-t bg-white mb-0 px-10 py-5">
                <div className="flex items-center justify-between">
                    <Link href="/admin/content" title="back">
                        <IoChevronBack className="text-black" size={25} />
                    </Link>
                    <h6 className="text-black text-xl font-bold">Edit Experience</h6>
                    <div />
                </div>
            </div>

            {/* Form */}
            <div className="flex-auto px-6 lg:px-10 py-8">
                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="flex flex-wrap gap-y-4">

                        {/* Organization Name */}
                        <div className="w-full px-4">
                            <div className="relative w-full mb-1">
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
                                    <p className={errorCls}>* {errors.newOrgName}</p>
                                )}
                            </div>
                        </div>

                        {/* Position */}
                        <div className="w-full px-4">
                            <div className="relative w-full mb-1">
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
                                    <p className={errorCls}>* {errors.newPosition}</p>
                                )}
                            </div>
                        </div>

                        {/* Address */}
                        <div className="w-full px-4">
                            <div className="relative w-full mb-1">
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
                                    <p className={errorCls}>* {errors.newAddress}</p>
                                )}
                            </div>
                        </div>

                        {/* Duration Start */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-1">
                                <label className={labelCls}>Start Date</label>
                                <input
                                    type="text"
                                    className={inputCls}
                                    placeholder="Jan 2022"
                                    name="newDurationStart"
                                    value={values.newDurationStart}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.newDurationStart && touched.newDurationStart && (
                                    <p className={errorCls}>* {errors.newDurationStart}</p>
                                )}
                            </div>
                        </div>

                        {/* Duration End */}
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-1">
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
                                    <p className={errorCls}>* {errors.newDurationEnd}</p>
                                )}
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="w-full px-4">
                            <div className="relative w-full mb-1">
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
                                    <p className={errorCls}>* {errors.newSummary}</p>
                                )}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="w-full px-4">
                            <div className="flex gap-3">
                                <Link
                                    href="/admin/content"
                                    className="bg-white text-green-600 border border-green-600 rounded px-8 py-2 hover:bg-green-800 hover:text-green-50 transition-colors duration-150"
                                >
                                    Back
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-green-600 text-white border rounded px-6 py-2 hover:bg-green-900 transition-colors duration-150"
                                >
                                    Update
                                </button>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

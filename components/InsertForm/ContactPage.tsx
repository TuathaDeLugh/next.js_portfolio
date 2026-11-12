"use client";

import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { emailSchema } from "@/Schemas";

interface ContactFormValues {
  fullname: string;
  email: string;
  subject: string;
  details: string;
}

const initialValues: ContactFormValues = {
  fullname: "",
  email: "",
  subject: "",
  details: "",
};

const ContactPage: React.FC = () => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const router = useRouter();

  const postapi = async (ogvalues: ContactFormValues): Promise<void> => {
    const res = await fetch(`/api/email`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ogvalues),
    });
    if (!res.ok) throw new Error("Failed to dispatch");
    router.refresh();
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<ContactFormValues>({
      initialValues,
      validationSchema: emailSchema,
      onSubmit: async (formValues, action) => {
        setDisabled(true);
        try {
          await toast.promise(postapi(formValues), {
            loading: "Dispatching transmission to Umang Sailor...",
            success: "Transmission sent successfully! Expect a reply within 24h.",
            error: "Failed to dispatch transmission. Please try direct email.",
          });
          action.resetForm();
        } finally {
          setDisabled(false);
        }
      },
    });

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
              htmlFor="contact-fullname"
            >
              Your Name <span className="text-[#CAAD8E]">*</span>
            </label>
            <input
              id="contact-fullname"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Alex Vance"
              className="w-full px-4 py-3 rounded-2xl bg-obsidian/70 border border-[#CAAD8E]/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-[#CAAD8E] focus:ring-1 focus:ring-[#CAAD8E]/40 transition-all font-sans"
            />
            {errors.fullname && touched.fullname ? (
              <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.fullname}</p>
            ) : null}
          </div>

          {/* Email */}
          <div>
            <label
              className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
              htmlFor="contact-email"
            >
              Email Address <span className="text-[#CAAD8E]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="alex@company.com"
              className="w-full px-4 py-3 rounded-2xl bg-obsidian/70 border border-[#CAAD8E]/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-[#CAAD8E] focus:ring-1 focus:ring-[#CAAD8E]/40 transition-all font-sans"
            />
            {errors.email && touched.email ? (
              <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.email}</p>
            ) : null}
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
            htmlFor="contact-subject"
          >
            Subject / Inquiry <span className="text-[#CAAD8E]">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Engineering Collaboration / Senior Frontend Role"
            className="w-full px-4 py-3 rounded-2xl bg-obsidian/70 border border-[#CAAD8E]/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-[#CAAD8E] focus:ring-1 focus:ring-[#CAAD8E]/40 transition-all font-sans"
          />
          {errors.subject && touched.subject ? (
            <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.subject}</p>
          ) : null}
        </div>

        {/* Details */}
        <div>
          <label
            className="block font-mono text-[11px] uppercase tracking-wider text-pearl-muted mb-2"
            htmlFor="contact-details"
          >
            Message Scope &amp; Details <span className="text-[#CAAD8E]">*</span>
          </label>
          <textarea
            id="contact-details"
            name="details"
            rows={5}
            value={values.details}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell me about your product, project roadmap, timeline, or engineering opportunity..."
            className="w-full px-4 py-3 rounded-2xl bg-obsidian/70 border border-[#CAAD8E]/20 text-pearl text-sm placeholder:text-pearl-dim focus:outline-none focus:border-[#CAAD8E] focus:ring-1 focus:ring-[#CAAD8E]/40 transition-all font-sans resize-none"
          />
          {errors.details && touched.details ? (
            <p className="text-red-400 font-mono text-xs mt-1.5">* {errors.details}</p>
          ) : null}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={disabled}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#CAAD8E] text-[#14100E] font-extrabold text-sm hover:bg-[#EBE3DA] disabled:opacity-50 disabled:cursor-not-allowed transition-all btn-press shadow-xl shadow-[#CAAD8E]/15 cursor-pointer"
          >
            {disabled ? (
              <>
                <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                <span>Transmitting...</span>
              </>
            ) : (
              <>
                <span>Transmit Message</span>
                <span className="font-mono">→</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;

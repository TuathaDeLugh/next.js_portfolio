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
    await fetch(`/api/email`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(ogvalues),
    });
    router.refresh();
    router.push("/");
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik<ContactFormValues>({
      initialValues,
      validationSchema: emailSchema,
      onSubmit: async (formValues, action) => {
        setDisabled(true);
        toast.promise(postapi(formValues), {
          loading: "Sending Message To Umang Sailor...",
          success: "Message Sent Successfully!",
          error: "Failed To Send Message.",
        });
        action.resetForm();
      },
    });

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full">
      <div className="flex-auto py-2">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-wrap mt-2">
            <div className="w-full lg:w-6/12 px-2 mb-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="contact-fullname"
              >
                Full Name
              </label>
              <input
                id="contact-fullname"
                type="text"
                className="border border-gray-200 px-4 py-3 placeholder-gray-400 text-gray-900 bg-white rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 w-full transition-all"
                placeholder="Umang Sailor"
                name="fullname"
                value={values.fullname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.fullname && touched.fullname ? (
                <p className="text-red-500 text-xs mt-1">* {errors.fullname}</p>
              ) : null}
            </div>

            <div className="w-full lg:w-6/12 px-2 mb-4">
              <label
                className="block uppercase text-xs text-gray-700 font-bold mb-2"
                htmlFor="contact-email"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="text"
                className="border border-gray-200 px-4 py-3 placeholder-gray-400 text-gray-900 bg-white rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 w-full transition-all"
                placeholder="umangsailor@hotmail.com"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="text-red-500 text-xs mt-1">* {errors.email}</p>
              ) : null}
            </div>

            <div className="w-full px-2 mb-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="contact-subject"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                className="border border-gray-200 px-4 py-3 placeholder-gray-400 text-gray-900 bg-white rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 w-full transition-all"
                placeholder="Collaborate with you"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.subject && touched.subject ? (
                <p className="text-red-500 text-xs mt-1">* {errors.subject}</p>
              ) : null}
            </div>

            <div className="w-full px-2 mb-4">
              <label
                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                htmlFor="contact-details"
              >
                Message Details
              </label>
              <textarea
                id="contact-details"
                className="border border-gray-200 px-4 py-3 placeholder-gray-400 text-gray-900 bg-white rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 w-full transition-all"
                rows={6}
                name="details"
                value={values.details}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Hey I want to collaborate with you on a project..."
              />
              {errors.details && touched.details ? (
                <p className="text-red-500 text-xs mt-1">* {errors.details}</p>
              ) : null}
            </div>

            <div className="w-full px-2 mt-2">
              <button
                type="submit"
                disabled={disabled}
                className="disabled:cursor-not-allowed disabled:bg-gray-400 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-8 py-3 shadow-md shadow-green-200 hover:shadow-lg transition-all cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

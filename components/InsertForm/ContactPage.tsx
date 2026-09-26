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
          loading: "Sending Message To Umang Sailor",
          success: "Message Sent Successfully",
          error: " Failed To Send",
        });
        action.resetForm();
      },
    });

  return (
    <div className="relative flex flex-col min-w-0 break-words w-full">
      <div className="flex-auto py-4">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-wrap mt-5">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="contact-fullname"
                >
                  Full Name
                </label>
                <input
                  id="contact-fullname"
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Umang Sailor"
                  name="fullname"
                  value={values.fullname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.fullname && touched.fullname ? (
                  <p className="text-red-600 text-sm">* {errors.fullname}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-xs text-gray-600 font-bold mb-2"
                  htmlFor="contact-email"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="umangsailor@hotmail.com"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <p className="text-red-600 text-sm">* {errors.email}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="contact-subject"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Collaborate with you"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.subject && touched.subject ? (
                  <p className="text-red-600 text-sm">* {errors.subject}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-600 text-xs font-bold mb-2"
                  htmlFor="contact-details"
                >
                  Detail
                </label>
                <textarea
                  id="contact-details"
                  className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded text-base shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  rows={8}
                  name="details"
                  value={values.details}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Hey I want to collaborate with you on a Next.js project"
                />
                {errors.details && touched.details ? (
                  <p className="text-red-600 text-sm">* {errors.details}</p>
                ) : null}
              </div>
            </div>
            <div className="w-full lg:w-12/12 px-4">
              <div className="relative w-full mb-3">
                <button
                  type="submit"
                  disabled={disabled}
                  className="disabled:cursor-not-allowed disabled:bg-gray-500 bg-green-600 text-white border rounded px-6 py-2 hover:bg-green-900 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

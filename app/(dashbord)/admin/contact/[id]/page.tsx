import React from "react";
import getSingleEmail from "@/controllers/singleEmail";
import DelmailBtn from "@/components/Delete/DelmailBtn";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { IEmail } from "@/types";

interface CdetailsProps {
  params: Promise<{ id: string }>;
}

const Cdetails = async ({ params }: CdetailsProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const email: IEmail | null = await getSingleEmail(id);

  if (!email) {
    return (
      <div className="w-full px-4 py-8">
        <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
          <p className="text-gray-500 mb-4">Message not found</p>
          <Link
            href="/admin/contact"
            className="inline-flex items-center gap-2 text-green-600 hover:underline font-medium"
          >
            <IoChevronBack size={18} /> Back to Messages
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-4">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 bg-white rounded-lg border-0 shadow-sm">
        <div className="rounded-t mb-0 px-6 py-6 border-b border-gray-100">
          <div className="text-center flex justify-between items-center">
            <Link
              href="/admin/contact"
              title="back"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <IoChevronBack className="text-gray-700" size={24} />
            </Link>
            <h6 className="text-gray-900 text-xl font-bold truncate max-w-md">
              {email.subject}
            </h6>
            <DelmailBtn id={String(email._id)} />
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10">
          <div className="w-full px-4">
            <div className="relative w-full mb-3 space-y-4">
              <div className="block uppercase text-gray-600 text-sm font-bold my-3">
                Full Name :{" "}
                <label className="font-normal capitalize text-gray-900">
                  {email.fullname}
                </label>
              </div>
              <hr className="border-gray-100" />
              <div className="block uppercase text-gray-600 text-sm font-bold my-3">
                Email :{" "}
                <label className="font-normal text-gray-900">{email.email}</label>
              </div>
              <hr className="border-gray-100" />
              <div className="block uppercase text-gray-600 text-sm font-bold my-3">
                Subject :{" "}
                <label className="font-normal text-gray-900">{email.subject}</label>
              </div>
              <hr className="border-gray-100" />
              <div className="block uppercase text-gray-600 text-sm font-bold my-3">
                Details :{" "}
                <p className="font-normal normal-case text-gray-800 mt-2 whitespace-pre-wrap">
                  {email.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cdetails;

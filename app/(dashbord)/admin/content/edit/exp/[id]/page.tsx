import EditExpForm from "@/components/EditForm/EditExpForm";
import getSingleExp from "@/controllers/singleexp";
import React from "react";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
import { IExperience } from "@/types";

interface EditExpPageProps {
  params: Promise<{ id: string }>;
}

const EditExpPage = async ({
  params,
}: EditExpPageProps): Promise<React.JSX.Element> => {
  const { id } = await params;
  const exp: IExperience | null = await getSingleExp(id);

  if (!exp) {
    return (
      <div className="w-full px-4 py-8">
        <div className="bg-white rounded-xl p-8 text-center border border-gray-200">
          <p className="text-gray-500 mb-4">Experience not found</p>
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 text-green-600 hover:underline font-medium"
          >
            <IoChevronBack size={18} /> Back to Content
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-6">
      <EditExpForm exp={exp} />
    </div>
  );
};

export default EditExpPage;

"use client";
import dynamic from "next/dynamic";
import React from "react";
import "react-quill-new/dist/quill.snow.css";

const DynamicReactQuill = dynamic(() => import("react-quill-new"), {
  ssr: false,
});

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ value, onChange }) => {
  const toolbarOptions = [
    ["bold", "italic", "underline"],
    ["blockquote", "code-block"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ header: [2, 3, false] }],
    [{ script: "sub" }, { script: "super" }],
    [{ align: [] }],
    ["clean"],
  ];

  return (
    <DynamicReactQuill
      style={{ fontSize: "20px" }}
      theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: toolbarOptions,
      }}
      className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    />
  );
};

export default RichTextEditor;

"use client"

import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = ({ value, onChange  }) => {
  const toolbarOptions = [
    ['bold', 'italic', 'underline'],     
    ['blockquote', 'code-block'],            
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'header': [ 2, 3, false] }],
    [{ 'script': 'sub' }, { 'script': 'super' }],     
    [{ 'align': [] }],

    ['clean']                                        
  ];

  return (
    <ReactQuill
    style={{ fontSize: '20px' }}
       theme="snow"
      value={value}
      onChange={onChange}
      modules={{
        toolbar: toolbarOptions
      }}
      className="border-0 px-3 py-2 placeholder-gray-400 text-black bg-white rounded shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
    />
  );
};

export default RichTextEditor;
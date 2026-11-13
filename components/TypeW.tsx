"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const TypeW: React.FC = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Web Developer",
          "Full Stack Developer",
          "Backend-API Builder ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeW;

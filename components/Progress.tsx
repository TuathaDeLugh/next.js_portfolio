"use client";
import "./progress.css";
import React, { useEffect, useState } from "react";

const Progress: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((preProgress) =>
        preProgress >= 100 ? 0 : preProgress + 10
      );
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="loadingContainer overflow-hidden">
        <div className="loadingBar" style={{ width: `${progress}%` }} />
      </div>
      <div className="flex items-center justify-center w-[calc(100vw-4rem)] h-screen overflow-hidden">
        <span className="loader" />
      </div>
    </>
  );
};

export default Progress;

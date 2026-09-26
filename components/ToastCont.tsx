import React from "react";
import { Toaster } from "react-hot-toast";

const ToastCont: React.FC = () => {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
        }}
      />
    </div>
  );
};

export default ToastCont;

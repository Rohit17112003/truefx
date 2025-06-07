



"use client";
import { useEffect } from "react";

const SuccessPopup = ({ onClose, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="relative bg-white dark:bg-gray-800 text-gray-800 dark:text-white
        p-6 rounded-2xl shadow-lg w-[90%] max-w-sm text-center 
        animate-slide-in-right"
      >
        <p className="text-lg font-medium mb-4">
          {message || "Your form has been submitted successfully !!!"}
        </p>

        <div className="flex justify-center">
          <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center animate-pulse-fast">
            <svg
              className="w-8 h-8 text-white z-10"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>

            {/* Spark effect */}
            <div className="absolute w-full h-full rounded-full border-4 border-green-400 opacity-70 animate-burst z-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;

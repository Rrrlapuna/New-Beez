"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AuthModal = ({ isOpen, onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div
        className="bg-white p-8 rounded-lg shadow-xl w-[90%] max-w-[400px] min-h-[450px] relative flex flex-col items-center space-y-4"
        style={{
          backgroundImage: "url('/assets/image/bgimage.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>

        {/* Modal Header */}
        <h2 className="text-3xl font-semibold text-[#004274] text-center">
          Let's Get In
        </h2>
        <p className="text-sm text-gray-600 text-center">
          We'll never share your email with anyone else.
        </p>

        {/* Input Fields */}
        <form className="flex flex-col items-center w-full space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded-full focus:outline-none focus:border-[#004274]"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border px-4 py-2 rounded-full focus:outline-none focus:border-[#004274]"
          />
          <Link
            href="/dashboard"
            className="w-full bg-[#004274] text-white py-2 rounded-full font-semibold text-center hover:bg-[#00325b] block"
          >
            Continue
          </Link>
          <p className="text-sm text-gray-600 underline cursor-pointer">
            Login with E-mail and password
          </p>
        </form>

        {/* Google Login Button */}
        <div className="w-full mt-3">
          <button className="w-full flex font-bold text-sm text-[#413F3F] items-center justify-center gap-2 border py-2 rounded-full hover:bg-gray-100">
            <Image
              src="/assets/image/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;

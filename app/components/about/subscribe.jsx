"use client";
import React from "react";

const Subscribe = () => {
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-4xl font-semibold text-center text-black mb-6">
        Subscribe To Our Newsletter
      </h2>

      <div className="max-w-3xl mx-auto">
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full sm:w-2/3 px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-[#004274] hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-md transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

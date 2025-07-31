"use client";
import React from "react";

const FeaturedStory = () => {
  return (
    <section className="w-full bg-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-14">
        {/* Image Section - Left */}
        <div className="w-full md:w-[27%]">
          <img
            src="assets/image/heroblog.png"
            alt="BonV Aero Drone"
            className="w-full rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Content Section - Right */}
        <div className="w-full md:w-[65%] ">
          <p className="text-lg text-gray-600 tracking-widest uppercase ">
            Featured Story
          </p>

          <h2 className="text-[1.75rem] md:text-[rem] font-extrabold text-[#003b73] leading-snug mb-3">
            BonV Aero: Revolutionizing Aerial Mobility with Cutting-Edge Drone Technology
          </h2>

          <p className="text-[1rem] md:text-[1rem] text-black leading-relaxed">
            BonV Aero is pioneering the future of aerial mobility with self-flying drone
            technology. Their innovative approach integrates advanced AI, multi-utility
            smart cargo pods, and fail-safe systems to revolutionize logistics,
            transportation, and industrial applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedStory;

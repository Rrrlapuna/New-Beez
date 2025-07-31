"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const features = [
  {
    title: "Sign Up for Free",
    description: "Create a free account in minutes.",
    image: "/assets/image/Images1.png",
    bgColor: "bg-green-100",
  },
  {
    title: "Add Your Business",
    description: "Enter Business name, category, contact info, and photos.",
    image: "/assets/image/Images2.png",
    bgColor: "bg-blue-100",
  },
  {
    title: "Get Verified & Go Live",
    description: "Our team will verify your details for approval.",
    image: "/assets/image/Images3.png",
    bgColor: "bg-pink-100",
  },
  {
    title: "Start Getting Customers",
    description: "Once approved, your business appears in search results!",
    image: "/assets/image/Images4.png",
    bgColor: "bg-yellow-100",
  },
];

const CardSection = () => {
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = slider.offsetWidth * 0.9; // 90% of width
    const intervalTime = 3500;
    let scrollPosition = 0;

    scrollInterval.current = setInterval(() => {
      if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth - 10) {
        scrollPosition = 0;
      } else {
        scrollPosition += scrollStep;
      }

      slider.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }, intervalTime);

    return () => clearInterval(scrollInterval.current);
  }, []);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Slider */}
        <div
          ref={sliderRef}
          className="sm:hidden flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-5 px-2 pb-4 scrollbar-hide"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="snap-start min-w-[90%] max-w-[90%] bg-white rounded-3xl shadow-md p-6 h-[300px] flex flex-col justify-center items-center text-center"
            >
              <div className="flex flex-col items-center space-y-3">
                <div
                  className={`w-[90px] h-[90px] flex items-center justify-center rounded-full ${feature.bgColor}`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-base font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="h-[300px] w-full rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-white shadow-[0_0px_0px_rgba(0,0,0,0.0)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition-shadow duration-300 cursor-pointer"
    >
      <div className="flex flex-col items-center space-y-3">
        <div
          className={`w-[90px] h-[90px] flex items-center justify-center rounded-full ${feature.bgColor}`}
        >
          <Image
            src={feature.image}
            alt={feature.title}
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <h3 className="text-base font-semibold text-black">{feature.title}</h3>
        <p className="text-sm text-gray-700">{feature.description}</p>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default CardSection;

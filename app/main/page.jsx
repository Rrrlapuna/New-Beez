"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const FeatureSection = ({ imageSrc, title, description, features }) => {
  const [showAll, setShowAll] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md p-3 md:p-4 m-2 md:m-3 items-center relative overflow-hidden">
      <div className="md:w-1/3 flex flex-col items-center text-center md:text-left px-2 md:px-3">
        <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px]">
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-transparent rounded-lg blur-lg scale-110" />
          <Image
            src={imageSrc}
            alt={title}
            width={120}
            height={120}
            className="relative z-10 transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        <div className="w-full md:w-4/5 mt-2">
          <h2 className="text-base md:text-xl font-semibold text-gray-800 mb-1">
            {title}
          </h2>
          <p className="text-gray-600 hidden md:block text-sm leading-snug">
            {description}
          </p>
        </div>
      </div>

      <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 px-2 md:px-3 py-1.5 md:py-2.5">
        {features
          .slice(0, showAll || screenWidth >= 768 ? features.length : 3)
          .map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 md:space-x-2.5"
            >
              <div className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center bg-[#004274] text-white text-xs font-semibold rounded-md shadow-md">
                {index + 1}
              </div>
              <span className="text-gray-700 text-xs md:text-sm font-medium">
                {feature}
              </span>
            </div>
          ))}

        {!showAll && features.length > 3 && screenWidth < 768 && (
          <button
            className="mt-1 text-[#004274] font-medium md:hidden flex justify-center items-center gap-1 text-sm"
            onClick={() => setShowAll(true)}
          >
            Show More Features <ChevronDown size={16} />
          </button>
        )}
        {showAll && screenWidth < 768 && (
          <button
            className="mt-1 text-[#004274] font-medium md:hidden flex justify-center items-center gap-1 text-sm"
            onClick={() => setShowAll(false)}
          >
            Show Less Features <ChevronUp size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <div className="w-full mx-auto ">
      <FeatureSection
        imageSrc="assets/image/businessman.svg"
        title="Why choose us?"
        description="We offer high-quality service, 24/7 customer support."
        features={[
          "Free Business Listings",
          "Digital e-Cards",
          "Lead Generation",
          "Customer Reviews & Ratings",
          "Business Insights & Analytics",
          "Priority Listing Options",
          "Website & SEO Services",
          "Social Media Promotion",
          "Discount Coupons & Offers",
          "Personalized Support",
        ]}
      />
      <FeatureSection
        imageSrc="assets/image/businessman2.svg"
        title="What we provide?"
        description="We provide custom solutions, dedicated support."
        features={[
          "Trusted by many businesses",
          "User-friendly interface",
          "Verified listings",
          "Real-time updates",
          "Community-driven reviews",
          "Efficient business listing",
          "Support for local businesses",
          "Commitment to quality",
          "Personalized Support",
        ]}
      />
    </div>
  );
};

export default FeaturesSection;

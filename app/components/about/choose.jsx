"use client";
import React from "react";
import { Megaphone, Star, ClipboardList, BarChart, Smile, Headphones } from "lucide-react";

const features = [
  {
    icon: <Megaphone size={32} className="text-[#004274]" />,
    title: "Provide Free Listing",
    description: "Get your business listed for free and reach a wide audience effortlessly.",
  },
  {
    icon: <Star size={32} className="text-[#004274]" />,
    title: "Best Ads Ratings",
    description: "Boost your visibility with the best ad ratings on our platform.",
  },
  {
    icon: <ClipboardList size={32} className="text-[#004274]" />,
    title: "Post Failure Alerts",
    description: "Get notified of any posting issues to ensure seamless updates.",
  },
  {
    icon: <BarChart size={32} className="text-[#004274]" />,
    title: "Track Ad Progress",
    description: "Monitor your ad performance and optimize for better results.",
  },
  {
    icon: <Smile size={32} className="text-[#004274]" />,
    title: "User-Friendly Interface",
    description: "Our platform is designed for simplicity, making it easy to manage listings.",
  },
  {
    icon: <Headphones size={32} className="text-[#004274]" />,
    title: "24/7 Support",
    description: "Our dedicated support team is here to assist you anytime, anywhere.",
  },
];

const ChooseUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-[#004274] text-center mb-4">Why Choose Us?</h2>
      <p className="text-center text-black mb-12">
        We provide excellent features to help your business grow and connect with the right audience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-2 group"
          >
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;

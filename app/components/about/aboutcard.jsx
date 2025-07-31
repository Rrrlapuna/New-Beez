"use client";
import React from "react";
import { UserCheck, Server, MapPin, Users } from "lucide-react";

const steps = [
  {
    icon: <UserCheck size={36} className="text-blue-500" />,
    title: "Create an Account",
    description: "Sign up on Beezinfo to get started.",
  },
  {
    icon: <Server size={36} className="text-green-500" />,
    title: "Build Your Profile",
    description: "Showcase your business and its offerings to potential customers.",
  },
  {
    icon: <MapPin size={36} className="text-red-500" />,
    title: "List Your Business for Free",
    description: "Reach out to customers at no cost and start growing your visibility.",
  },
  {
    icon: <Users size={36} className="text-yellow-500" />,
    title: "Connect with Customers",
    description: "Use our platform to build strong relationships and drive customer engagement.",
  },
];

const Aboutcard = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-[#004274] text-center mb-10 transition-colors duration-300">
        How It Works?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-xl text-center px-6 py-8 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl group"
          >
            {/* Decorative Hover Ring Glow */}
            <div className="absolute -inset-1 z-[-1] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500  blur-lg"></div>

            {/* Icon Section */}
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white shadow-lg w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-[#004274]/60">
                {step.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold mb-2 transition-colors duration-300 group-hover:text-[#004274]">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutcard;

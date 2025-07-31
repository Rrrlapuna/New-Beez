"use client";
import React from "react";
import { Check, X } from "lucide-react";
import Dsidebar from "../components/common/dsidebar";
import Dnavbar from "../components/common/dnavbar";

const pricingData = [
  {
    title: "Basic",
    price: 0,
    description: "Best for solo & small teams. Essentials to get you started.",
    features: [
      "1 Listing Upload",
      "2 Gallery Photo",
      "No Video",
      "No Featured Listing",
      "Email Support",
    ],
    button: "Try it now",
    btnClass: "border border-blue-500 text-blue-500 hover:bg-blue-100",
  },
  {
    title: "Standard",
    price: 20,
    description: "Best for small & medium-sized teams. Simple yet powerful.",
    features: [
      "3 Listing Upload",
      "6 Gallery Photo",
      "Yes Video",
      "1 Featured Listing",
      "24x7 Email Support",
    ],
    button: "Get Started",
    btnClass: "bg-pink-500 text-white hover:bg-pink-600",
  },
  {
    title: "Premium",
    price: 60,
    description: "Best for medium to large teams. Access to power features.",
    features: [
      "8 Listing Upload",
      "16 Gallery Photo",
      "Yes Video",
      "2 Featured Listing",
      "Priority Email",
    ],
    button: "Get Started",
    btnClass: "bg-pink-500 text-white hover:bg-pink-600",
  },
];

export default function PricingPlan() {
  return (
    <>
      <Dnavbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Dsidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#004274] mt-4 sm:mt-6">
              Pricing Plans
            </h2>
            <p className="text-gray-500 mb-6">
              Choose a plan that best fits your needs.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-start">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md flex flex-col justify-between p-6 hover:shadow-lg transition-shadow duration-300 w-full text-left"
              >
                <div className="pb-4 border-b">
                  <div className="text-4xl font-semibold text-[#004274]">
                    <sup className="text-lg font-medium">$</sup>
                    {plan.price}
                    <span className="text-2xl font-medium">/Month</span>
                  </div>
                  <h3 className="text-2xl font-medium text-[#004274] mt-2">
                    {plan.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{plan.description}</p>
                </div>

                <div className="py-4">
                  <ul className="space-y-2 mb-4">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 justify-start"
                      >
                        {feature.includes("No") ? (
                          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
                            <X className="text-gray-600 w-4 h-4" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <Check className="text-white w-4 h-4" />
                          </div>
                        )}
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-2 mt-2 rounded-md ${plan.btnClass} text-sm`}
                  >
                    {plan.button}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

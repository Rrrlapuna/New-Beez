"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqData = [
  {
    question:
      "What is a business profile platform, and how can it benefit my brand?",
    answer:
      "Beezinfo’s business profile platform allows you to create a centralized and customizable profile for your company...",
  },
  {
    question:
      "How does the customer rating and review system work with Beezinfo?",
    answer:
      "Beezinfo offers a customer rating system where your clients can rate their experiences and leave reviews...",
  },
  {
    question:
      "What insights can I gain from customer feedback through Beezinfo?",
    answer:
      "Beezinfo’s platform provides detailed analytics on customer feedback",
  },
  {
    question: "How will Beezinfo improve my search engine rankings?",
    answer:
      "Beezinfo optimizes your business profiles and customer reviews for search engines",
  },
  {
    question:
      "Can I use customer reviews from Beezinfo to boost my marketing efforts?",
    answer:
      "Absolutely! Positive customer reviews gathered through Beezinfo serve as powerful social proof",
  },
  {
    question:
      "Can I use customer reviews from Beezinfo to boost my marketing efforts?",
    answer:
      "Absolutely! Positive customer reviews gathered through Beezinfo serve as powerful social proof",
  },
];

const FaqSection = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleIndex = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((i) => i !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const firstColumn = faqData.filter((_, index) => index % 2 === 0);
  const secondColumn = faqData.filter((_, index) => index % 2 !== 0);

  const renderColumn = (items, offset = 0) =>
    items.map((item, i) => {
      const index = i * 2 + offset;
      const isOpen = activeIndexes.includes(index);
      return (
        <div
          key={index}
          className="mb-4 border border-gray-200 rounded-xl shadow-sm transition-all duration-300 bg-white hover:shadow-md"
        >
          <button
            onClick={() => toggleIndex(index)}
            className="w-full flex justify-between items-start gap-4 text-left p-4 sm:p-5 text-base sm:text-lg font-medium text-gray-800 hover:text-[#004274]"
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-[#004274]">
                <HelpCircle size={18} />
              </div>
              <span>{item.question}</span>
            </div>
            <div className="flex-shrink-0 p-1 rounded-full">
              {isOpen ? (
                <ChevronUp className="text-indigo-500 w-6 h-6 sm:w-5 sm:h-5" />
              ) : (
                <ChevronDown className="text-indigo-500 w-6 h-6 sm:w-5 sm:h-5" />
              )}
            </div>
          </button>
          <div
            className={`px-4 sm:px-5 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-96 pb-4 sm:pb-5 bg-indigo-50" : "max-h-0 pb-0 bg-white"
            }`}
          >
            <div
              className={`text-sm sm:text-base text-gray-700 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#004274] mb-2 sm:mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-black max-w-2xl text-sm sm:text-base">
          Have questions? We’ve got answers. Learn more about how Beezinfo can
          empower your business.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
        <div className="flex-1">{renderColumn(firstColumn, 0)}</div>
        <div className="flex-1">{renderColumn(secondColumn, 1)}</div>
      </div>
    </div>
  );
};

export default FaqSection;

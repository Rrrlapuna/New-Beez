import React from "react";

export default function Key() {
  const keywords = [
    "Chartered Accountants Firms in Bhubaneswar",
    "Top Chartered Accountants Firms in Bhubaneswar",
    "Best Chartered Accountants Firms near Bhubaneswar",
    "Contact details for Chartered Accountants Firms in Bhubaneswar",
    "Photos of Chartered Accountants Firms in Bhubaneswar",
    "Chartered Accountants Firms services in Bhubaneswar",
    "Find trusted Chartered Accountants Firms in Bhubaneswar",
    "Local Chartered Accountants Firms directory in Bhubaneswar",
  ];

  return (
    <div className="mt-6 p-4 w-full mx-auto text-center">
      <h3 className="text-lg font-semibold text-[#004274] mb-2">
        Best Related Keywords
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="text-gray-700 text-sm cursor-pointer hover:text-sky-500 transition"
          >
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

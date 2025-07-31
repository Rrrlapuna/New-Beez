"use client";
import React from "react";
import { Star } from "lucide-react";
import Dsidebar from "../components/common/dsidebar";
import Dnavbar from "../components/common/dnavbar";

export default function ReviewsSection() {
  return (
    <>
      <Dnavbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Dsidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="p-4 sm:p-6 lg:p-8 rounded-lg">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
              <div className="w-full sm:w-auto text-left">
                <h2 className="text-xl sm:text-3xl font-semibold text-[#004274]">
                  Reviews
                </h2>
                <p className="text-gray-600 mt-1 text-sm">
                  In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.
                </p>
              </div>
              <button className="bg-[#004274] text-white py-2 px-4 rounded-md text-sm sm:text-base w-full sm:w-auto">
                Ask Reviews
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-left">
                <h3 className="text-lg sm:text-xl font-medium text-[#004274] mb-2">
                  Reviews
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-3xl sm:text-4xl font-semibold text-[#004274]">
                    5
                  </span>
                  <Star className="text-[#004274] w-6 h-6" />
                </div>
              </div>
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-left">
                <h3 className="text-lg sm:text-xl font-medium text-[#004274] mb-2">
                  Average Rating
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-3xl sm:text-4xl font-semibold text-[#004274]">
                    4.9
                  </span>
                  <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6 text-left">
              <select className="p-2 bg-white rounded-md border text-[#004274] flex-1 text-sm">
                <option>Listing Name</option>
                <option>Workspace A</option>
                <option>Workspace B</option>
                <option>Workspace C</option>
                <option>Meeting Room 1</option>
                <option>Meeting Room 2</option>
              </select>
              <select className="p-2 bg-white rounded-md border text-[#004274] flex-1 text-sm">
                <option>Sort</option>
                <option>Newest First</option>
                <option>Oldest First</option>
                <option>Highest Rating</option>
                <option>Lowest Rating</option>
              </select>
              <button className="bg-[#004274] text-white py-2 px-6 rounded-md text-sm w-full sm:w-auto">
                Search
              </button>
            </div>

            {/* Reviews List */}
            <div className="mt-4 text-left">
              <h3 className="text-lg sm:text-xl font-medium text-[#004274] mb-3">
                All Reviews
              </h3>
              {["Doris Knapp", "Praveen Johel", "Joey Heathcote"].map((name, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 text-left"
                >
                  <div className="flex flex-col sm:flex-row justify-between gap-3">
                    <h3 className="text-lg sm:text-xl font-medium text-[#004274]">
                      {name}
                    </h3>
                    <div className="flex gap-3 text-sm">
                      <label className="text-gray-600">
                        <input type="checkbox" className="mr-1" /> Hidden
                      </label>
                      <label className="text-gray-600">
                        <input type="checkbox" className="mr-1" /> Featured
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400 mt-2">
                    ⭐⭐⭐⭐⭐{" "}
                    <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">
                      {index === 0 ? "4.5" : "5.0"}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-medium mt-2">
                    {index === 0 ? "Good budget workspace" : "Review Heading Title"}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {index === 0
                      ? "I highly recommend this place. Lorem dignissim at. Nunc quis magna non miquis magna eleifend vestibulum quis magna."
                      : "Pellentesque non imperdiet ante, non vehicula neque. Maecenas volutpat cursus lorem a dignissim."}
                  </p>
                  <button className="bg-[#004274] text-white py-1 px-4 mt-3 rounded-md text-sm">
                    Respond
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

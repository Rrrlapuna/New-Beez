"use client";
import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Edit } from "lucide-react";
import Dnavbar from "../components/common/dnavbar";

export default function MyRatings() {
  const [showResponseForm, setShowResponseForm] = useState(null);
  const [responses, setResponses] = useState({
    1: null,
    2: null,
  });
  const [responseTexts, setResponseTexts] = useState({});
  const [editingResponse, setEditingResponse] = useState(null);

  const toggleResponse = (id) => {
    setShowResponseForm(showResponseForm === id ? null : id);
    setEditingResponse(null);
  };

  const handleResponseChange = (id, text) => {
    setResponseTexts({ ...responseTexts, [id]: text });
  };

  const submitResponse = (id) => {
    if (responseTexts[id]?.trim()) {
      setResponses({ ...responses, [id]: responseTexts[id] });
      setShowResponseForm(null);
      setEditingResponse(null);
      setResponseTexts({ ...responseTexts, [id]: "" });
    }
  };

  const editResponse = (id) => {
    setEditingResponse(id);
    setShowResponseForm(id);
    setResponseTexts({ ...responseTexts, [id]: responses[id] });
  };

  const ratings = [
    {
      id: 1,
      user: "Rashmi Ranjan Rout",
      date: "2 days ago",
      stars: 5,
      comment: "Excellent service! The team was very professional and delivered beyond expectations.",
      response: responses[1],
    },
    {
      id: 2,
      user: "Rashmi",
      date: "1 week ago",
      stars: 4,
      comment: "Good experience overall, but there was a slight delay in delivery.",
      response: responses[2],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Dnavbar />
      
      {/* Main Content */}
      <main className="pt-16 md:pt-20 pb-24 px-4 md:px-6"> {/* Increased bottom padding to prevent overlap */}
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#004274]">
            My Ratings
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and respond to customer feedback
          </p>
        </div>

        {/* Stats Cards - Full width on mobile, content-width on desktop */}
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4 mb-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm sm:w-fit w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#eff6ff] p-3 rounded-full">
                <Star className="w-5 h-5 text-[#004274]" fill="#004274" />
              </div>
              <div className="text-left">
                <p className="text-xl md:text-2xl font-semibold text-[#004274]">12</p>
                <p className="text-sm text-gray-500">Total Ratings</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm sm:w-fit w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#eff6ff] p-3 rounded-full">
                <Star className="w-5 h-5 text-[#004274]" fill="#004274" />
              </div>
              <div className="text-left">
                <p className="text-xl md:text-2xl font-semibold text-[#004274]">4.8</p>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <select className="p-2 bg-white rounded-md border border-gray-300 text-[#004274] text-sm focus:outline-none focus:ring-2 focus:ring-[#004274]">
            <option>All Ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars</option>
            <option>2 Stars</option>
            <option>1 Star</option>
          </select>
          
          <select className="p-2 bg-white rounded-md border border-gray-300 text-[#004274] text-sm focus:outline-none focus:ring-2 focus:ring-[#004274]">
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>

        {/* Ratings List */}
        <div className="space-y-4">
          {ratings.map((rating) => (
            <div key={rating.id} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                <div className="text-left">
                  <h3 className="text-lg font-medium text-[#004274]">
                    {rating.user}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {rating.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[#004274]">
                    {rating.stars}.0
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 text-sm mb-4 text-left">
                {rating.comment}
              </p>
              
              {!rating.response || editingResponse === rating.id ? (
                <>
                  {(!rating.response || editingResponse === rating.id) && (
                    <button
                      className="flex items-center gap-2 text-[#004274] hover:text-[#00315a] text-sm mb-2"
                      onClick={() => toggleResponse(rating.id)}
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{editingResponse === rating.id ? "Editing Response" : "Respond"}</span>
                    </button>
                  )}

                  {showResponseForm === rating.id && (
                    <div className="mt-2">
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#004274]"
                        placeholder="Write your response..."
                        rows="3"
                        value={responseTexts[rating.id] || ""}
                        onChange={(e) => handleResponseChange(rating.id, e.target.value)}
                      ></textarea>
                      <div className="flex gap-3 mt-3">
                        <button
                          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm hover:bg-gray-100"
                          onClick={() => {
                            toggleResponse(rating.id);
                            setEditingResponse(null);
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className="px-4 py-2 bg-[#004274] text-white rounded-md text-sm hover:bg-[#00315a]"
                          onClick={() => submitResponse(rating.id)}
                        >
                          {editingResponse === rating.id ? "Update Response" : "Submit Response"}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-4 pt-4 border-t border-gray-200 text-left">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-medium text-[#004274]">
                        Your Response
                      </h4>
                      <button 
                        onClick={() => editResponse(rating.id)}
                        className="text-[#004274] hover:text-[#00315a]"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">
                      Just now
                    </p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {rating.response}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8 mb-8">
          <button className="p-2 text-[#004274] hover:bg-gray-100 rounded-md">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="px-3 py-1 bg-[#004274] text-white rounded-md text-sm">
            1
          </button>
          <button className="px-3 py-1 text-[#004274] hover:bg-gray-100 rounded-md text-sm">
            2
          </button>
          <button className="px-3 py-1 text-[#004274] hover:bg-gray-100 rounded-md text-sm">
            3
          </button>
          <button className="p-2 text-[#004274] hover:bg-gray-100 rounded-md">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </main>
    </div>
  );
}
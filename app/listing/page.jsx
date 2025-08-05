"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Star, Settings } from "lucide-react";
import Dnavbar from "../components/common/dnavbar";

const ListingManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const itemsPerPage = 4;

  // Sample data
  const listings = [
    {
      id: 1,
      title: "Rout Automobiles",
      location: "Chandikhol",
      date: "10 November 2024",
      reviews: 1,
      rating: 5,
      status: "approved",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Rout Motors",
      location: "Bhubaneswar",
      date: "15 November 2024",
      reviews: 0,
      rating: 4,
      status: "pending",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Rout Auto Care",
      location: "Cuttack",
      date: "20 November 2024",
      reviews: 3,
      rating: 5,
      status: "approved",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Rout Spare Parts",
      location: "Puri",
      date: "25 November 2024",
      reviews: 0,
      rating: 0,
      status: "deleted",
      image: "https://via.placeholder.com/100",
    },
  ];

  // Filter listings based on active tab
  const filteredListings =
    activeTab === "all"
      ? listings
      : listings.filter((listing) => listing.status === activeTab);

  // Pagination
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);
  const currentListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToPage = (page) => setCurrentPage(page);

  // Word counter for description
  const wordCount =
    description.trim() === "" ? 0 : description.trim().split(/\s+/).length;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Dnavbar />

      <main className="pt-16 md:pt-20 pb-16 px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-[#004274]">
                Listing Management
              </h1>
              <p className="text-gray-500 text-sm">
                Manage your business listings in one single dashboard
              </p>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#004274] text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium hover:bg-[#00315a] transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Listing</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto mb-6 pb-2 gap-1">
          {[
            { id: "all", label: "All" },
            { id: "approved", label: "Approved" },
            { id: "pending", label: "Pending" },
            { id: "deleted", label: "Deleted" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-[#004274] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Table  */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Listing Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reviews
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentListings.map((listing) => (
                  <tr
                    key={listing.id}
                    className="hover:bg-[#eff6ff] transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-16 h-16 rounded object-cover"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{listing.title}</div>
                      <div className="text-gray-500 text-sm">
                        {listing.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {listing.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= listing.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-gray-500 text-xs mt-1">
                        {listing.reviews}{" "}
                        {listing.reviews === 1 ? "review" : "reviews"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          listing.status === "approved"
                            ? "bg-green-100 text-green-800"
                            : listing.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {listing.status.charAt(0).toUpperCase() +
                          listing.status.slice(1)}
                      </span>
                    </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
  <Link
    href={`/listings/manage/${listing.id}`}
    className="flex flex-col items-center text-xs text-[#004274] hover:text-[#00315a] transform -translate-x-7"
  >
    <Settings className="w-4 h-4 mb-1" />
    <span>Manage</span>
  </Link>
</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-[#004274] hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-lg text-sm font-medium ${
                  currentPage === page
                    ? "bg-[#004274] text-white"
                    : "bg-white text-[#004274] hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              currentPage === totalPages || totalPages === 0
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white text-[#004274] hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default ListingManagement;

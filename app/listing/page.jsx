"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Star, Settings } from "lucide-react";
import Dnavbar from "../components/common/dnavbar";
import Select from "react-select";

const ListingManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Category options for Select2
  const categoryOptions = [
    { value: "automobile", label: "Automobile" },
    { value: "restaurant", label: "Restaurant" },
    { value: "retail", label: "Retail" },
    { value: "service", label: "Service" }
  ];

  // Sample data
  const listings = [
    {
      id: 1,
      title: "Rout Automobiles",
      location: "Chandikhol",
      date: "10 Nov 2024",
      reviews: 1,
      rating: 5,
      status: "approved",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Rout Motors",
      location: "Bhubaneswar",
      date: "15 Nov 2024",
      reviews: 0,
      rating: 4,
      status: "pending",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Rout Auto Care",
      location: "Cuttack",
      date: "20 Nov 2024",
      reviews: 3,
      rating: 5,
      status: "approved",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Rout Spare Parts",
      location: "Puri",
      date: "25 Nov 2024",
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

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Dnavbar />

      <main className="pt-16 md:pt-20 pb-16 px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold text-[#004274]">
                Listing Management
              </h1>
              <p className="text-xs md:text-sm text-gray-500">
                Manage your business listings in one single dashboard
              </p>
            </div>
            <Link
              href="/list" 
              className="bg-[#004274] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-xs md:text-sm font-medium hover:bg-[#00315a] transition-colors"
            >
              <Plus className="w-3 h-3 md:w-4 md:h-4" />
              <span>Add New Listing</span>
            </Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto mb-6 pb-2 gap-1">
          {[
            { id: "all", label: "All", color: "bg-blue-100 text-blue-800" },
            { id: "approved", label: "Approved", color: "bg-green-100 text-green-800" },
            { id: "pending", label: "Pending", color: "bg-yellow-100 text-yellow-800" },
            { id: "deleted", label: "Deleted", color: "bg-red-100 text-red-800" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-xs font-medium transition-colors ${
                activeTab === tab.id
                  ? `${tab.color} shadow-sm`
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop Table - Compact Version */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reviews
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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
                    <td className="px-4 py-3 whitespace-nowrap">
                      <img
                        src={listing.image}
                        alt={listing.title}
                        className="w-10 h-10 rounded object-cover"
                      />
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="font-medium">{listing.title}</div>
                      <div className="text-xs text-gray-500">
                        {listing.location}
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      {listing.date}
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-3 h-3 ${
                                star <= listing.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">
                          ({listing.reviews})
                        </span>
                      </div>
                    </td>
                    <td className="px-3 py-3 whitespace-nowrap">
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
                    <td className="px-3 py-3 whitespace-nowrap">
                      <Link
                        href={`/listings/manage/${listing.id}`}
                        className="text-[#004274] hover:text-[#00315a] flex items-center gap-1 text-xs"
                      >
                        <Settings className="w-4 h-4" />
                        <span>Manage</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {currentListings.map((listing) => (
            <div key={listing.id} className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-start gap-4 mb-3">
                <img 
                  src={listing.image} 
                  alt={listing.title} 
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{listing.title}</h3>
                  <p className="text-xs text-gray-500">{listing.location}</p>
                  <span className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-medium ${
                    listing.status === 'approved' 
                      ? 'bg-green-100 text-green-800' 
                      : listing.status === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800' 
                        : 'bg-red-100 text-red-800'
                  }`}>
                    {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div>
                  <p className="text-xs text-gray-500">Listing Date</p>
                  <p className="text-xs">{listing.date}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Reviews</p>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-3 h-3 ${star <= listing.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({listing.reviews})
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center border-t pt-3">
                <Link 
                  href={`/listings/manage/${listing.id}`}
                  className="bg-[#004274] text-white text-xs font-medium flex items-center gap-2 px-4 py-2 rounded-lg w-full justify-center"
                >
                  <Settings className="w-4 h-4" />
                  <span>Manage Listing</span>
                </Link>
              </div>
            </div>
          ))}
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
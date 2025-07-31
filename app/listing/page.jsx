"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowDownUp, MoreHorizontal } from "lucide-react";
import Dsidebar from "../components/common/dsidebar";
import Dnavbar from "../components/common/dnavbar";

const tabs = ["Add Listing", "Pending", "Approved", "Removed"];

const listings = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  title: "Heading Title Office Space Title",
  location: "Ahmedabad, Gujarat, India",
  date: "19 June, 2019",
  reviews: 2,
  rq: 3,
  status:
    i % 4 === 0
      ? "Pending"
      : i % 4 === 1
      ? "Approved"
      : i % 4 === 2
      ? "Removed"
      : "Pending",
  image: "assets/image/mall.png",
}));

export default function ListingManagement() {
  const [activeTab, setActiveTab] = useState("All Listing");
  const [menuIndex, setMenuIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const itemsPerPage = 4;

  const filteredListings =
    activeTab === "All Listing" || activeTab === "Add Listing"
      ? listings
      : listings.filter((listing) => listing.status === activeTab);

  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

  const currentListings = filteredListings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const toggleMenu = (idx) => setMenuIndex(menuIndex === idx ? null : idx);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-btn")) setMenuIndex(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Dnavbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Dsidebar />
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-30 md:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 w-full p-4 md:p-8 overflow-hidden">
          {/* Heading and Button - Flex Row for Desktop */}
          <div className="mb-6">
            <div className="md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-medium text-[#004274]">
                  Listing Management
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-0">
                  Manage your office space listings in one dashboard.
                </p>
              </div>

              {/* Desktop Add Button */}
              <div className="hidden md:block">
                <Link
                  href="/list"
                  className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md text-sm whitespace-nowrap"
                >
                  Add new listing
                </Link>
              </div>
            </div>

            {/* Mobile Add Button */}
            <div className="md:hidden mt-2 w-full">
              <Link
                href="/list"
                className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold px-5 py-2 rounded-md text-center text-sm"
              >
                Add new listing
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-md shadow-md p-4">
            {/* Tabs */}
            <div className="flex w-full justify-between mb-4 border-b pb-2 text-sm">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCurrentPage(1);
                  }}
                  className={`flex-1 text-center px-1 py-2 text-[13px] md:text-sm truncate ${
                    activeTab === tab
                      ? "border-b-2 border-[#004274] text-[#004274]"
                      : "text-gray-600 hover:text-[#004274]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-gray-600 whitespace-nowrap">
                    {[
                      "Image",
                      "Title",
                      "Date",
                      "Reviews",
                      "ID",
                      "Status",
                      "Action",
                    ].map((col) => (
                      <th key={col} className="py-2 font-medium px-2">
                        <div className="flex items-center gap-2">
                          {col}
                          {col !== "Action" && (
                            <ArrowDownUp size={18} className="text-gray-400" />
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentListings.map((listing, idx) => (
                    <tr key={listing.id} className="border-b text-left">
                      <td className="py-2 px-2">
                        <img
                          src={listing.image}
                          alt="Listing"
                          className="w-20 h-16 rounded-md object-cover"
                        />
                      </td>
                      <td className="py-2 px-2">
                        {listing.title}
                        <br />
                        <span className="text-gray-500 text-xs">
                          {listing.location}
                        </span>
                      </td>
                      <td className="py-2 px-2">{listing.date}</td>
                      <td className="py-2 px-2">{listing.reviews}</td>
                      <td className="py-2 px-2">{listing.rq}</td>
                      <td className="py-2 px-2">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-md text-white ${
                            listing.status === "Approved"
                              ? "bg-green-500"
                              : listing.status === "Removed"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                          }`}
                        >
                          {listing.status}
                        </span>
                      </td>
                      <td className="relative py-2 px-2">
                        <button
                          onClick={() => toggleMenu(idx)}
                          className="menu-btn"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                        {menuIndex === idx && (
                          <div className="absolute right-0 mt-1 w-28 bg-white shadow-md rounded-md z-10 text-left">
                            <button className="w-full px-4 py-2 hover:bg-gray-100">
                              Edit
                            </button>
                            <button className="w-full px-4 py-2 hover:bg-gray-100">
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

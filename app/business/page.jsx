"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, MapPin, Phone } from "lucide-react";
import BizSlider from "../components/common/bizads";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import AdSlider from "../components/common/offer";
import CityCarousel from "../components/common/caraousal";
import BusinessHighlights from "../components/common/business";
import Sidebar from "../components/common/sidebar";
import Footerbar from "../components/common/footerbar";

const listings = [
  {
    id: 1,
    name: "SMM SHIPPING INDIA",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Jaipur,302034",
    image: "/assets/image/image3.jpg",
    link: "/business/almamate_info_tech7969",
  },
  {
    id: 2,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 3,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 4,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 5,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 6,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 7,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 8,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 9,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 10,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 11,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 12,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 13,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 14,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 15,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 16,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 17,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 18,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 19,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 20,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 21,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 22,
    name: "R M JHA STANDARD MANPOWER and SECURITY SERVICES",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Parganas,700039",
    image: "/assets/image/image3.jpg",
    link: "/business/unimak_school_of_tech8437",
  },
];

export default function Listing() {
  const ITEMS_PER_PAGE = 22;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(listings.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentListings = listings.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getPageNumbers = () => {
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + 4);
    if (end - start < 4) start = Math.max(1, end - 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
    <Navbar />
    <BizSlider />
  
    <div className="px-4 sm:px-6 lg:px-10 py-4 sm:py-6 lg:py-8 w-full mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4">
        <div className="order-1 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentListings.map(
            ({ id, name, rating, reviews, location, image, link }) => (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md p-3 sm:p-4 border hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={image}
                      alt={name || "Business Image"}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-1">
                      {name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <span className="flex items-center gap-1 font-bold px-2 py-1 rounded-full text-gray-800 bg-white border border-[#FFD700]">
                        <span className="bg-[#FFD700] p-1 rounded-full">
                          <Star size={14} className="text-white" />
                        </span>
                        {rating}
                      </span>
                      <span className="text-gray-500">{reviews}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mt-1">
                      <MapPin size={14} className="text-blue-600" />
                      <span className="ml-1 truncate">{location}</span>
                    </div>
                  </div>
                </div>
  
                <div className="flex flex-row gap-2 mt-3 sm:mt-4">
                  <Link
                    href="/profile"
                    className="flex-1 bg-[#004274] text-white py-2 rounded-md text-sm font-medium text-center hover:bg-[#00365a] transition-all duration-300"
                  >
                    View Profile
                  </Link>
                  <button
                    className="flex-1 flex items-center justify-center gap-1 bg-[#339D3A] text-white py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-all duration-300"
                    onClick={() => alert("Phone number hidden")}
                  >
                    <span className="bg-white p-1 rounded-full">
                      <Phone size={14} className="text-[#339D3A]" />
                    </span>
                    Show Number
                  </button>
                </div>
              </div>
            )
          )}
        </div>
  
        <div className="order-1 lg:order-2 w-full">
          <Sidebar />
        </div>
      </div>
    </div>
  
    {/* Pagination */}
    <div className="mt-2 flex justify-center items-center gap-2 flex-wrap">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>
  
      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`px-3 py-1 border rounded ${
            page === currentPage
              ? "bg-[#004274] text-white"
              : "hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}
  
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  
    <BusinessHighlights />
    <CityCarousel />
    <AdSlider />
    <Footer />
    <Footerbar/>
  </>
  
  );
}

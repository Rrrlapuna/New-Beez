"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import AuthModal from "../../modal/page";
import { Cantora_One } from "next/font/google";

const cantoraOne = Cantora_One({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const categories = [
    "Advertising Agencies",
    "Antiques and Collectibles",
    "Art Galleries",
    "Auto Repair and Maintenance",
    "Banks",
    "Crisis Management Services",
    "Cultural Organizations",
    "Custom Printing Services",
    "Beauty and Spa Services",
    "Catering Services",
    "Chiropractic Services",
    "Clothing Stores",
    "Craft Breweries and Wineries",
    "Mobile, Electricals Retail Shop",
    "Vehicle Sales and Services",
    "Software Development",
    "Watch and Jewelry Repair",
  ];

  const cities = [
    "Bangalore",
    "Mumbai",
    "Pune",
    "Hyderabad",
    "Delhi",
    "Bhubaneswar",
    "Ahmedabad",
    "Jaipur",
    "Thane",
    "Gurgaon",
    "Kolkata",
    "Surat",
  ];

  return (
    <>
      <nav className="bg-white shadow-lg px-4 lg:px-12 py-3 flex items-center justify-between">
        <Link
          href="/"
          className={`${cantoraOne.className} flex items-center space-x-1`}
        >
          <Image
            src="/assets/image/beezlogo.svg"
            alt="BeezInfo Logo"
            width={35}
            height={35}
          />
          <span className="text-4xl sm:text-5xl font-medium text-[#ed7d31]">
            Beez
          </span>
          <span className="text-4xl sm:text-5xl font-medium text-[#0f1341]">
            info
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/business"
              className="flex items-center text-blue-900"
            >
              <i className="fa-solid fa-magnifying-glass-location text-lg mr-1"></i>
              Find Business
            </Link>
            <Link href="/blog" className="flex items-center text-blue-900">
              <FontAwesomeIcon icon={faBookOpen} className="text-lg mr-1" />
              BizStory
            </Link>
            <Link
              href="/list-business"
              className="bg-[#ffede8] text-[#004279] font-medium px-3 py-1.5 rounded-md flex items-center border-b-2 border-[#004279]"
            >
              List Your Business
              <span className="bg-[#ed7d31] text-white ml-1 px-2 py-0.5 text-xs font-bold rounded">
                Free
              </span>
            </Link>
          </div>

          <button
            className="p-2 flex items-center justify-center"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={26} />
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#004274] text-white text-[13px] font-[620] px-2 py-2 rounded-md border-2 border-[#004274] hover:bg-white hover:text-[#004274]"
          >
            Login/Signup
          </button>
        </div>
      </nav>

      {/* Slide-Out Menu */}
      <div
        className={`fixed top-0 right-0 h-[65vh] z-50 transition-all duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } w-full bg-gradient-to-br from-[#0c3b53]/95 to-[#031b28]/95 backdrop-blur-lg shadow-2xl`}
      >
        <div className="flex justify-end px-4 py-3">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-yellow-400"
          >
            <X size={32} />
          </button>
        </div>

        <div className="px-4 sm:px-6 pb-6 h-[calc(100%-3rem)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            {/* Top Categories */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
                Top Categories
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {categories.map((cat, i) => (
                  <p
                    key={i}
                    className="text-white/90 hover:text-yellow-300 cursor-pointer text-sm sm:text-[15px]"
                  >
                    {cat}
                  </p>
                ))}
              </div>
            </div>

            {/* Top Cities */}
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-yellow-400 border-b border-yellow-400 pb-2 mb-4">
                Top Cities
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {cities.map((city, i) => (
                  <p
                    key={i}
                    className="text-white/90 hover:text-yellow-300 cursor-pointer text-sm sm:text-[15px]"
                  >
                    {city}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default Navbar;

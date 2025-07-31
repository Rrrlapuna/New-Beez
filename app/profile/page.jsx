"use client";

import { useState } from "react";
import {
  MapPin,
  Globe,
  Mail,
  Phone,
  Star,
  Share2,
  MessageSquare,
  User,
  X,
} from "lucide-react";
import { FaWhatsapp, FaTelegram, FaFacebook } from "react-icons/fa";
import Navbar from "../components/common/navbar";
import PhotoGallery from "../components/common/prohero";
import Footer from "../components/common/footer";
import ImgSlider from "../components/common/imgslide";
import CityCarousel from "../components/common/caraousal";
import AdSlider from "../components/common/offer";
import Catalogue from "../components/common/cataloge";
import CurrentOffers from "../components/common/current";
import Key from "../components/common/key";
import BusinessList from "../components/common/bizsolution";
import Footerbar from "../components/common/footerbar";

const BusinessListing = () => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  return (
    <>
      <Navbar />
      <PhotoGallery />
      <div className="px-4 py-6 w-full mx-2 flex flex-col lg:flex-row ">
        <div className="lg:w-3/4 bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center border-b pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-semibold">
                ✔ Beezinfo Verified
              </span>
              <button className="bg-[#004274] text-white px-3 py-1 text-xs rounded">
                Claim Now
              </button>
            </div>
            <button
              className="flex items-center gap-1 text-[#004274]"
              onClick={() => setIsShareOpen(true)}
            >
              <Share2 size={18} /> Share
            </button>
          </div>
          <h2 className="text-xl font-semibold text-[#004274]">
            Dmd Online Solutions
          </h2>
          <p className="text-gray-600 flex items-center gap-2">
            <Globe size={16} /> Business Services
          </p>
          <p className="text-gray-700 flex items-center gap-2">
            <MapPin size={16} /> H No 1-7-43/28/102, Sai Leela Avenue,
            Secunderabad, Hyderabad, Telangana, 500062
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            <button className="flex items-center gap-2 bg-[#004274] text-white px-3 py-2 rounded-md w-full sm:w-auto">
              Show Number
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-md w-full sm:w-auto">
              Show WhatsApp
            </button>
            <button className="flex items-center gap-2 bg-gray-700 text-white px-3 py-2 rounded-md w-full sm:w-auto">
              Enquire Now
            </button>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#004274]">
              Description
            </h3>
            <p className="text-gray-700 mt-2">
              S2S Biz Solutions provides easy and one-stop access for customers
              and entrepreneurs, ensuring compliance and returns with priority
              and customer satisfaction.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-[#004274]">
              Reviews and Ratings
            </h3>
            <textarea
              placeholder="Write a review..."
              className="mt-3 p-2 w-full rounded border border-gray-300"
              rows="3"
            ></textarea>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className="text-gray-400 cursor-pointer hover:text-yellow-500"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/4 w-full mt-4 lg:mt-0">
          <ImgSlider />
        </div>
      </div>
      <Catalogue />
      <CurrentOffers />
      <Key />
      <BusinessList />
      <CityCarousel />
      <AdSlider />
      <Footer />
      <Footerbar/>

      {/* Share Popup */}
      {isShareOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-5 w-80 relative">
            <div className="flex justify-between items-center border-b pb-2 mb-3">
              <h3 className="text-lg font-semibold">Share Business</h3>
              <button onClick={() => setIsShareOpen(false)}>
                <X size={22} className="text-gray-600 hover:text-gray-900" />
              </button>
            </div>
            <div className="flex justify-center gap-4">
              <a href="#" className="p-3 bg-green-500 rounded-full text-white">
                <FaWhatsapp size={24} />
              </a>
              <a href="#" className="p-3 bg-blue-400 rounded-full text-white">
                <FaTelegram size={24} />
              </a>
              <a href="#" className="p-3 bg-blue-600 rounded-full text-white">
                <FaFacebook size={24} />
              </a>
              <button
                className=" bg-blue-500 rounded-md text-white text-sm flex items-center gap-1"
                onClick={() => {
                  navigator.clipboard.writeText("https://beezinfo.com");
                  alert("Link Copied!");
                }}
              >
                📋 Copy Link
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BusinessListing;

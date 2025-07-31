"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Star, Phone } from "lucide-react";
import { useRouter } from "next/navigation";

const listings = [
  {
    id: 1,
    name: "AlmaMate Info Tech",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Noida, Uttar Pradesh",
    image: "/assets/image/image1.jpeg",
    link: "/business/almamate_info_tech7969",
  },
  {
    id: 2,
    name: "Unimak School of Tech",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Madurai, Tamil Nadu",
    image: "/assets/image/image2.jpeg",
    link: "/business/unimak_school_of_tech8437",
  },
  {
    id: 3,
    name: "Dhanur Textiles",
    rating: "0.0",
    reviews: "0 reviews",
    location: "Panchkula, Haryana",
    image: "/assets/image/image3.jpg",
    link: "/business/dhanur_textiles1080",
  },
  {
    id: 4,
    name: "Brand Bazooka Advertising",
    rating: "5.0",
    reviews: "1 review",
    location: "Gurgaon, Haryana",
    image: "/assets/image/image4.png",
    link: "/business/brand_bazooka_advertising9057",
  },
  {
    id: 5,
    name: "Mutha Sports Co",
    rating: "4.5",
    reviews: "5 reviews",
    location: "Bengaluru, Karnataka",
    image: "/assets/image/image3.jpg",
    link: "/business/mutha_sports_co385",
  },
  {
    id: 6,
    name: "Cafe Asian Street Thai",
    rating: "4.2",
    reviews: "12 reviews",
    location: "Delhi, Delhi",
    image: "/assets/image/image3.jpg",
    link: "/business/maruthi_traders_hyderabad_wholesale_pooja_samagri_store8212",
  },
  {
    id: 7,
    name: "Maruthi Traders HYD",
    rating: "4.8",
    reviews: "8 reviews",
    location: "Telangana, Telangana",
    image: "/assets/image/image3.jpg",
    link: "/business/cafe_asian_street_thai_and_chinese_restaurant2519",
  },
  {
    id: 8,
    name: "Team Variance",
    rating: "4.0",
    reviews: "3 reviews",
    location: "Noida, Uttar Pradesh",
    image: "/assets/image/image5.jpg",
    link: "/business/team_variance239",
  },
  {
    id: 9,
    name: "Foot 360° Care",
    rating: "4.7",
    reviews: "15 reviews",
    location: "Chennai, Tamil Nadu",
    image: "/assets/image/image6.png",
    link: "/business/foot_360°_care_-_the_complete_reflexology_-_gmogappair_-_chennai8487",
  },
];

const ListingCard = ({ name, rating, reviews, location, image, link }) => {
  const router = useRouter();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-all duration-300 border">
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-100">
          <Image src={image} alt={name} width={80} height={80} />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name}
          </h3>

          <div className="flex items-center gap-1 text-sm mt-1">
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

      <div className="flex gap-2 mt-4">
        <Link
          href={link}
          className="flex-1 bg-[#004274] text-white py-2 rounded-md text-sm font-medium text-center hover:bg-[#00365a] transition-all duration-300"
        >
          View
        </Link>
        <button className="flex-1 flex items-center justify-center gap-1 bg-[#339D3A] text-white py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-700">
          <span className="bg-white p-1 rounded-full">
            <Phone size={16} className="text-[#339D3A]" />
          </span>
          09725349239
        </button>
      </div>
    </div>
  );
};

const ListingsSection = () => {
  
  return (
    <div className="w-full mx-auto ">
    
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-[#004274]">
            New Listings in Our Directory
          </h2>
          <p className="text-black text-sm">
            Discover our latest listings around the country
          </p>
        </div>
        <Link
          href="/all-businesses"
          className="text-medium font-medium text-[#004274] mt-3 md:mt-0 hover:underline"
        >
          View More →
        </Link>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </div>
    </div>
  );
};

export default ListingsSection;

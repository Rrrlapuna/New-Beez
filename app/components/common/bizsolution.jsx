import React from "react";
import { MapPin, Briefcase } from "lucide-react";

const similarBusinesses = [
  { name: "Singla Associates", category: "Chartered Accountants", location: "Chandigarh, 160101" },
  { name: "CA Preparation Insti...", category: "Chartered Accountants", location: "Gurgaon, 122002" },
  { name: "The Institute of Cha...", category: "Chartered Accountants", location: "Delhi, 110019" },
  { name: "R G Bhilare and Comp...", category: "Chartered Accountants", location: "Pune, 411037" },
  { name: "A B C Accountancy Se...", category: "Chartered Accountants", location: "Jaipur, 302017" },
  { name: "A K Bajaj and Compan...", category: "Chartered Accountants", location: "Delhi, 110034" },
  { name: "D P Agarwal and Co", category: "Chartered Accountants", location: "Mumbai, 400001" },
  { name: "P Ganesh", category: "Chartered Accountants", location: "Mumbai, 400101" },
];

const nearbyBusinesses = [
  { name: "Friendsbakery India", category: "Others", location: "Bhubaneswar, 751010" },
  { name: "Samvardhh Associates", category: "Others", location: "Bhubaneswar, 751002" },
  { name: "SADHABA ACADEMY OF F...", category: "Community, Personal and Social Services", location: "Khorda, 751015" },
  { name: "Deccan Holidays", category: "Travel Agency", location: "Khorda, 751006" },
  { name: "Nine Energy Techmed", category: "Others", location: "Bhubaneswar, 751025" },
  { name: "Indo Png Coffee", category: "Others", location: "Bhubaneswar, 751002" },
];

export default function BusinessList() {
  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-bold text-[#004274] mb-4">Similar Businesses Like S2S Biz Solutions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {similarBusinesses.map((business, index) => (
          <div key={index} className="bg-white shadow-md border border-gray-200 p-3 rounded-lg">
            <h3 className="text-lg font-semibold text-[#004274]">{business.name}</h3>
            <p className="text-gray-600 flex items-center gap-1">
              <Briefcase size={16} className="text-[#004274]" />
              <span className="font-medium">{business.category}</span>
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              <MapPin size={16} className="text-[#339D3A]" />
              {business.location}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[#004274] mt-8 mb-4">Businesses Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {nearbyBusinesses.map((business, index) => (
          <div key={index} className="bg-white shadow-md border border-gray-200 p-3 rounded-lg">
            <h3 className="text-lg font-semibold text-[#004274]">{business.name}</h3>
            <p className="text-gray-600 flex items-center gap-1">
              <Briefcase size={16} className="text-[#004274]" />
              <span className="font-medium">{business.category}</span>
            </p>
            <p className="text-gray-500 flex items-center gap-1">
              <MapPin size={16} className="text-[#339D3A]" />
              {business.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

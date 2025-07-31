"use client";
import React from "react";

const categories = [
  "Advertising Agencies",
  "Antiques and Collectibles",
  "Art Galleries",
  "Arts Entertainment and Recreation",
  "Auto Repair and Maintenance",
  "Banks",
  "Catering Services",
  "Chartered Accountants Firms",
  "Chiropractic Services",
  "Clothing Stores",
  "Co workspace",
  "Consultancy",
  "Corporate Gifts",
  "Craft Breweries and Wineries",
  "Crisis Management Services",
  "Cultural Organizations",
  "Custom Printing Services",
  "Cybersecurity Firms",
  "Data Analytics Services",
  "Drone Services",
  "Eco-Friendly Products",
  "Education Institution",
  "Factories",
  "Financial Advisory Services",
  "Florists",
  "Furniture Stores",
  "Game and Hobby Stores",
  "General Contractors",
  "Hardware Stores",
  "Health",
  "Health and Wellness Products",
  "Home Appliances",
  "Home Cleaning Services",
  "Home Utility Store",
  "Hotel",
  "Hotel and Restaurants",
  "Internet service provider",
  "IT and Software development",
  "IT Sales and Services",
  "Jewellery",
  "Language Schools",
  "Laundry and Dry Cleaning",
  "Legal and Consulting",
  "Local Guides and Tour Operators",
  "Massage Therapy",
  "Medical and Health Care",
  "Mobile Retail Shop",
  "Mobile, Electricals Retail Shop",
  "Newspapers",
  "Non-Profit and Community Organizations",
  "Nutrition and Wellness Coaching",
  "Online Courses and Tutoring",
  "Others",
  "Packers and Movers Service",
  "Photographers",
  "Pooja shop",
  "Pooja store",
  "Public Relations Agencies",
  "Public Speaking and Coaching",
  "Real Estate",
  "Reflexology",
  "Relocation Services",
  "Rental Clothing",
  "Restaurant and Art Cafe",
  "Salon Service",
  "Social Media Management",
  "Software Development",
  "Solar Energy Solutions",
  "Spa and Beauty Services",
  "Sporting Goods Stores",
  "Sports shop",
  "Technical Support Services",
  "Thrift and Consignment Shops",
  "Towing Services",
  "Translation Services",
  "Transportation",
  "Travel Agency",
  "Utilities for Wholesale and Retail Store",
  "Valve Manufacturer",
  "Vehicle Sales and Services",
  "Venture Capital and Investment Firms",
  "Watch and Jewelry Repair",
  "Yoga and Meditation Studios",
];

const cities = [
  "Bangalore",
  "Mumbai",
  "Delhi",
  "Pune",
  "Hyderabad",
  "Jaipur",
  "Ahmedabad",
  "Thane",
  "Gurgaon",
  "Kolkata",
  "Chennai",
  "Gautam Buddha Nagar",
  "Lucknow",
  "Patna",
  "K.V.Rangareddy",
  "Ernakulam",
  "Ghaziabad",
  "South Delhi",
  "Kanpur",
  "Kanchipuram",
  "North West Delhi",
  "Coimbatore",
  "Surat",
  "West Delhi",
  "South West Delhi",
  "Indore",
  "Nagar",
  "Nagpur",
  "Khorda",
  "Vadodara",
  "Faridabad",
  "Chandigarh",
  "Tiruvallur",
  "Maharashtra",
  "North 24 Parganas",
  "Nashik",
  "Aurangabad",
  "Bhopal",
  "East Delhi",
  "Central Delhi",
  "Gwalior",
  "Ranchi",
  "Rajkot",
  "Thiruvananthapuram",
  "Raigarh(MH)",
  "Ludhiana",
  "Varanasi",
  "Dehradun",
  "Raipur",
  "Visakhapatnam",
  "New Delhi",
  "Kamrup",
  "Agra",
  "Uttar Pradesh",
  "Udaipur",
  "Kanpur Nagar",
  "Rupnagar",
  "Thrissur",
  "Kolhapur",
  "Parganas",
  "Kozhikode",
  "Karnataka",
  "Cuttack",
  "Krishna",
  "Jammu",
  "Guntur",
  "Jodhpur",
  "Howrah",
  "Allahabad",
  "NOIDA",
  "Shahdara",
  "Tamil Nadu",
  "Gorakhpur",
  "South 24 Parganas",
  "Telangana",
  "Meerut",
  "Bardhaman",
  "Mysore",
  "West Bengal",
  "North Delhi",
  "Jalna",
  "Gujarat",
  "Bareilly",
  "Sonipat",
  "Vijayawada",
  "Solapur",
  "Malappuram",
  "Gandhi Nagar",
  "Haryana",
  "Sangli",
  "Srinagar",
  "Mohali",
  "Madurai",
  "Ahmed Nagar",
  "Medak",
  "Rangareddy",
  "Jabalpur",
  "Satara",
  "Panchkula",
];
const LinkSection = ({ title, items }) => {
  return (
    <div className="bg-white rounded-md p-2 mb-1">
      {" "}
      <div className="relative group w-fit">
        <h2 className="text-3xl text-[#004274] font-bold mb-4">{title}</h2>
        <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#004274] transition-all duration-300 ease-in-out group-hover:w-full"></span>
      </div>
      <div className="flex flex-wrap justify-start gap-0 text-black text-[12px] md:text-xs font-lg ">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <a href="#" className="hover:text-sky-500 hover:underline px-2">
              {item}
            </a>
            {index !== items.length - 1 && (
              <span className="text-black"> | </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const CategoriesCitiesSection = () => {
  return (
    <div className="w-full mx-auto">
      <div className="mt-6">
        <LinkSection title="Top Categories" items={categories} />
      </div>
      <div className=""> 
        <LinkSection title="Top Cities" items={cities} />
      </div>
    </div>
  );
};


export default CategoriesCitiesSection;
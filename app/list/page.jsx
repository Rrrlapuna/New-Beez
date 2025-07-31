"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { X } from "lucide-react";
import Link from "next/link";
import Select from "react-select";

// SweetAlert success popup
const showAlert = () => {
  Swal.fire({
    title: "Success!",
    text: "Added successfully",
    icon: "success",
    confirmButtonText: "OK",
  });
};
const categoryOptions = [
  { value: "Restaurant", label: "Restaurant" },
  { value: "Retail", label: "Retail" },
  { value: "Service", label: "Service" },
];

const statesList = [
  { value: "New York", label: "[US] New York" },
  { value: "California", label: "[US] California" },
  { value: "Nevada", label: "[US] Nevada" },
  { value: "Washington", label: "[US] Washington" },
  { value: "Delhi", label: "[IN] Delhi" },
  { value: "Maharashtra", label: "[IN] Maharashtra" },
  { value: "Karnataka", label: "[IN] Karnataka" },
  { value: "Tamil Nadu", label: "[IN] Tamil Nadu" },
  { value: "Uttar Pradesh", label: "[IN] Uttar Pradesh" },
  { value: "Telangana", label: "[IN] Telangana" },
  { value: "Andhra Pradesh", label: "[IN] Andhra Pradesh" },
  { value: "Punjab", label: "[IN] Punjab" },
  { value: "Haryana", label: "[IN] Haryana" },
  { value: "West Bengal", label: "[IN] West Bengal" },
  { value: "Bihar", label: "[IN] Bihar" },
  { value: "Gujarat", label: "[IN] Gujarat" },
  { value: "Odisha", label: "[IN] Odisha" },
];

const formatOptionLabel = ({ label, flag }) => (
  <div className="flex items-center">
    <span className="mr-2 text-xl">{flag}</span>
    <span>{label}</span>
  </div>
);

const BusinessForm = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption); // save full object

    switch (selectedOption?.value) {
      case "Restaurant":
        setSubcategories([
          "Fast Food",
          "Fine Dining",
          "Cafe",
          "Buffet",
          "Casual Dining",
        ]);
        break;
      case "Retail":
        setSubcategories([
          "Clothing",
          "Electronics",
          "Grocery",
          "Furniture",
          "Books",
        ]);
        break;
      case "Service":
        setSubcategories([
          "Plumbing",
          "Electrical",
          "Cleaning",
          "Landscaping",
          "Consulting",
        ]);
        break;
      default:
        setSubcategories([]);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormVisible(false);
    showAlert();
  };

  return (
    <>
      {isFormVisible && (
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto px-4 py-8 text-left"
        >
          {/* Mobile Close Button */}
          <div className="flex justify-end md:hidden mb-2">
            <Link href="/listing">
              <button
                type="button"
                className="text-gray-500 hover:text-red-600 transition"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </Link>
          </div>

          {/* Heading + Desktop Close Button */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start items-start">
            <div>
              <h1 className="text-3xl font-semibold text-[#004274] mb-1">
                Add New Listing
              </h1>
              <p className="text-sm text-gray-500">
                Fill in the details to add a new listing.
              </p>
            </div>
            <div className="hidden md:block">
              <Link href="/listing">
                <button
                  type="button"
                  className="text-gray-500 hover:text-red-600 transition"
                  aria-label="Close"
                >
                  <X size={28} />
                </button>
              </Link>
            </div>
          </div>

          {/* General Info */}
          <h2 className="text-xl font-semibold text-[#004274] mt-10 mb-4">
            General Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Floating Label Input for Name */}
            <div className="relative w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=" "
                required
                className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent px-3 pt-4 pb-1.5 text-sm rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-2 text-xs bg-white px-1 text-[#004274] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                Name
              </label>
            </div>

            <div className="w-full mt-1 ">
              {/* <label className="block text-gray-700 mb-1">Category</label> */}
              <Select
                options={categoryOptions}
                placeholder="Select Category"
                value={category}
                onChange={handleCategoryChange}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
          </div>

          {/* Subcategories */}
          {subcategories.length > 0 && (
            <div className="mt-6">
              <label className="block text-gray-700 mb-2">Subcategories</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subcategories.map((subcategory, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={subcategory}
                      name={subcategory}
                      value={subcategory}
                    />
                    <label htmlFor={subcategory} className="ml-2 text-gray-700">
                      {subcategory}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="relative mt-6 w-full">
            <textarea
              id="description"
              name="description"
              placeholder=" "
              rows="4"
              required
              className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent p-4 rounded-xl focus:outline-none focus:border-[#004274]"
            ></textarea>
            <label
              htmlFor="description"
              className="absolute left-4 -top-2 text-sm bg-white px-1 text-[#004274] peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#004274]"
            >
              Description
            </label>
          </div>

          {/* Location Heading */}
          <h2 className="text-xl font-semibold text-[#004274] mt-10 mb-4">
            Add Location
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Address */}
            {/* Address */}
            <div className="relative w-full">
              <input
                type="text"
                name="address"
                id="address"
                placeholder=" "
                required
                className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent px-3 pt-4 pb-1.5 text-sm rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="address"
                className="absolute left-3 -top-2 text-xs bg-white px-1 text-[#004274] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                Address
              </label>
            </div>

            {/* City */}
            <div className="relative w-full">
              <input
                type="text"
                name="city"
                id="city"
                placeholder=" "
                required
                className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent px-3 pt-4 pb-1.5 text-sm rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="city"
                className="absolute left-3 -top-2 text-xs bg-white px-1 text-[#004274] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                City
              </label>
            </div>

            <div className="mt-1">
              {/* <label className="block text-gray-700 mb-1">State</label> */}
              <Select
                options={statesList}
                placeholder="Select or search state"
                value={selectedState}
                onChange={setSelectedState}
                formatOptionLabel={formatOptionLabel}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </div>
    
            {/* PIN Code */}
            <div className="relative w-full">
              <input
                type="number"
                name="pincode"
                id="pincode"
                placeholder=" "
                required
                className="peer w-full border border-gray-300 text-gray-900 placeholder-transparent px-3 pt-4 pb-1.5 text-sm rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="pincode"
                className="absolute left-3 -top-2 text-xs bg-white px-1 text-[#004274] peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                PIN Code
              </label>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#004274] mt-10 mb-4 ">
            Details Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder=" "
                required
                className="peer w-full px-3 pt-4 pb-1.5 text-sm border border-gray-300 text-gray-900 bg-transparent rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-2 text-xs text-[#004274] bg-white px-1 transition-all
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                E-mail
              </label>
            </div>

            {/* Website */}
            <div className="relative">
              <input
                type="text"
                id="website"
                placeholder=" "
                className="peer w-full px-3 pt-4 pb-1.5 text-sm border border-gray-300 text-gray-900 bg-transparent rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="website"
                className="absolute left-3 -top-2 text-xs text-[#004274] bg-white px-1 transition-all
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                Website
              </label>
            </div>

            {/* WhatsApp */}
            <div className="relative">
              <input
                type="number"
                id="whatsapp"
                placeholder=" "
                required
                className="peer w-full px-3 pt-4 pb-1.5 text-sm border border-gray-300 text-gray-900 bg-transparent rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="whatsapp"
                className="absolute left-3 -top-2 text-xs text-[#004274] bg-white px-1 transition-all
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                WhatsApp Number
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="number"
                id="phone"
                placeholder=" "
                required
                className="peer w-full px-3 pt-4 pb-1.5 text-sm border border-gray-300 text-gray-900 bg-transparent rounded-md focus:outline-none focus:border-[#004274]"
              />
              <label
                htmlFor="phone"
                className="absolute left-3 -top-2 text-xs text-[#004274] bg-white px-1 transition-all
      peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400
      peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#004274]"
              >
                Phone Number
              </label>
            </div>
          </div>

          {/* File Upload */}
          <div className="mt-10 p-6 border-2 border-solid border-green-500 rounded-lg text-center">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />
            <label htmlFor="fileUpload" className="cursor-pointer block">
              <span className="text-gray-500">
                Drag & drop files or{" "}
                <span className="text-blue-500 underline">browse</span>
              </span>
              {file && (
                <p className="text-green-500 mt-2 font-medium">{file.name}</p>
              )}
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Supported formats: JPG, PNG, GIF
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-8 bg-[#004274] text-white px-6 py-3 rounded-md w-full hover:bg-[#003256] transition"
          >
            ADD BUSINESS
          </button>
        </form>
      )}
    </>
  );
};

export default BusinessForm;

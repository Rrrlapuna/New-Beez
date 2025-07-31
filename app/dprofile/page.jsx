"use client";
import React, { useState } from "react";
import Dsidebar from "../components/common/dsidebar";
import Dnavbar from "../components/common/dnavbar";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState("editprofile");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Dnavbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Dsidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">
          <div className="mb-4 text-left">
            <h2 className="text-3xl font-semibold text-[#004274]">Profile</h2>
            <p className="text-gray-600">
              In commodo lorem ut erat sagittis variusm euismod lectus vehicula
              cursus est.
            </p>
          </div>

          <div className="bg-white rounded-md shadow-md p-4 sm:p-6">
            {/* Tabs */}
            <div className="flex border-b overflow-x-auto no-scrollbar flex-nowrap">
              {["Edit profile", "Update photo", "Change password"].map(
                (tab, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setActiveTab(tab.toLowerCase().replace(" ", ""))
                    }
                    className={`py-2 px-4 transition-colors duration-200 whitespace-nowrap text-sm sm:text-base ${
                      activeTab === tab.toLowerCase().replace(" ", "")
                        ? "border-b-2 border-[#004274] text-[#004274]"
                        : "text-gray-600 hover:text-[#004274]"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {activeTab === "editprofile" && (
              <div className="pt-6 text-left">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="firstName"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                    >
                      First Name
                    </label>
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="lastName"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                    >
                      Last Name
                    </label>
                  </div>

                  {/* Email Address */}
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
        peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
        peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <div className="flex gap-2">
                      <select className="border border-gray-300 rounded-md px-2 py-1.5 w-20 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]">
                        <option>+91</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <div className="relative flex-1">
                        <input
                          type="text"
                          id="phone"
                          className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                          placeholder=" "
                        />
                        <label
                          htmlFor="phone"
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                        >
                          Phone Number
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#004274] hover:bg-[#003359] text-white rounded-md transition-colors duration-200"
                  >
                    Save
                  </button>
                </div>
              </div>
            )}
            {activeTab === "updatephoto" && (
              <div className="pt-6 text-left">
                <div className="flex justify-center items-center p-10 sm:p-20 border-2 border-gray-300 rounded-sm">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    {selectedFile ? (
                      <img
                        src={selectedFile}
                        alt="Preview"
                        className="w-32 h-32 object-cover rounded"
                      />
                    ) : (
                      <p className="text-gray-600">Click to upload a photo</p>
                    )}
                  </label>
                </div>
              </div>
            )}
            {activeTab === "changepassword" && (
              <div className="pt-4 text-left">
                <div className="space-y-5">
                  {/* Old Password */}
                  <div className="relative">
                    <input
                      type="password"
                      id="oldPassword"
                      className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="oldPassword"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                    >
                      Old Password
                    </label>
                  </div>

                  {/* New Password */}
                  <div className="relative">
                    <input
                      type="password"
                      id="newPassword"
                      className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="newPassword"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                    >
                      New Password
                    </label>
                  </div>

                  {/* Confirm Password */}
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      className="peer w-full border border-gray-300 rounded-md px-3 pt-5 pb-1 text-xs focus:outline-none focus:ring-2 focus:ring-[#004274]"
                      placeholder=" "
                    />
                    <label
                      htmlFor="confirmPassword"
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-500 transition-all duration-200 
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 
            peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-[10px] peer-focus:text-[#004274]"
                    >
                      Confirm New Password
                    </label>
                  </div>

                  {/* Save Button */}
                  <div>
                    <button className="mt-1 w-full sm:w-auto text-center px-5 py-1.5 bg-[#004274] hover:bg-[#003359] text-white text-sm rounded transition-colors duration-200">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

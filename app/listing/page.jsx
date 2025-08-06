"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, Star, Settings } from "lucide-react";
import Dnavbar from "../components/common/dnavbar";
import Select from "react-select";

const ListingManagement = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    businessName: "",
    businessCategory: null,
    businessDescription: "",
    businessAddress: "",
    businessCity: "",
    businessState: "",
    businessPincode: "",
    businessEmail: "",
    businessWebsite: "",
    businessWhatsapp: "",
    businessPhone: "",
    businessImage: null
  });
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

  // Word counter for description
  const wordCount =
    description.trim() === "" ? 0 : description.trim().split(/\s+/).length;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });
  };

  // Handle category selection
  const handleCategoryChange = (selectedOption) => {
    setFormData({
      ...formData,
      businessCategory: selectedOption
    });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.businessName.trim()) errors.businessName = "Business name is required";
    if (!formData.businessCategory) errors.businessCategory = "Category is required";
    if (!formData.businessDescription.trim()) errors.businessDescription = "Description is required";
    if (!formData.businessAddress.trim()) errors.businessAddress = "Address is required";
    if (!formData.businessCity.trim()) errors.businessCity = "City is required";
    if (!formData.businessState.trim()) errors.businessState = "State is required";
    if (!formData.businessPincode.trim()) errors.businessPincode = "Pincode is required";
    if (!formData.businessEmail.trim()) errors.businessEmail = "Email is required";
    if (!formData.businessPhone.trim()) errors.businessPhone = "Phone number is required";
    if (!formData.businessImage) errors.businessImage = "Image is required";
    if (wordCount > 200) errors.businessDescription = "Description exceeds 200 words";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      setIsModalOpen(false);
      // Reset form
      setFormData({
        businessName: "",
        businessCategory: null,
        businessDescription: "",
        businessAddress: "",
        businessCity: "",
        businessState: "",
        businessPincode: "",
        businessEmail: "",
        businessWebsite: "",
        businessWhatsapp: "",
        businessPhone: "",
        businessImage: null
      });
      setDescription("");
    }
  };

  // Close modal and reset form
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormErrors({});
  };

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
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#004274] text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-xs md:text-sm font-medium hover:bg-[#00315a] transition-colors"
            >
              <Plus className="w-3 h-3 md:w-4 md:h-4" />
              <span>Add New Listing</span>
            </button>
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

      {/* Add Listing Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 border-b p-4 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-[#004274]">Add New Listing</h3>
              <button 
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-4">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar - Hidden on mobile */}
                <div className="hidden md:block md:w-1/3 bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">
                    Please fill out all required fields to create your business
                    listing. The more complete and accurate your information, the
                    better your listing will perform. All fields marked with * are
                    required.
                  </p>
                </div>
                
                {/* Main Form */}
                <div className="w-full md:w-2/3">
                  <h5 className="text-lg font-medium text-[#004274] mb-4">General Information</h5>
                  
                  <div className="mb-4">
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessName ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your business name"
                    />
                    {formErrors.businessName && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessName}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="businessCategory" className="block text-sm font-medium text-gray-700 mb-1">
                      Category *
                    </label>
                    <Select
                      id="businessCategory"
                      name="businessCategory"
                      options={categoryOptions}
                      value={formData.businessCategory}
                      onChange={handleCategoryChange}
                      className={`basic-single ${
                        formErrors.businessCategory ? "border-red-500" : ""
                      }`}
                      classNamePrefix="select"
                      placeholder="Select a category"
                    />
                    {formErrors.businessCategory && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessCategory}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Description *
                    </label>
                    <textarea
                      id="businessDescription"
                      name="businessDescription"
                      value={formData.businessDescription}
                      onChange={(e) => {
                        handleInputChange(e);
                        setDescription(e.target.value);
                      }}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessDescription ? "border-red-500" : "border-gray-300"
                      }`}
                      rows={5}
                      placeholder="Describe your business"
                    ></textarea>
                    <div className={`text-xs mt-1 ${
                      wordCount > 200 || formErrors.businessDescription ? 'text-red-500' : 'text-gray-500'
                    }`}>
                      {wordCount}/200 words {wordCount > 200 && '(Exceeded limit)'}
                    </div>
                    {formErrors.businessDescription && wordCount <= 200 && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessDescription}</p>
                    )}
                  </div>
                  
                  <h5 className="text-lg font-medium text-[#004274] mb-4 mt-6">Location</h5>
                  
                  <div className="mb-4">
                    <label htmlFor="businessAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="businessAddress"
                      name="businessAddress"
                      value={formData.businessAddress}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessAddress ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your business address"
                    />
                    {formErrors.businessAddress && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessAddress}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="businessCity" className="block text-sm font-medium text-gray-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        id="businessCity"
                        name="businessCity"
                        value={formData.businessCity}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          formErrors.businessCity ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter city"
                      />
                      {formErrors.businessCity && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.businessCity}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="businessState" className="block text-sm font-medium text-gray-700 mb-1">
                        State *
                      </label>
                      <input
                        type="text"
                        id="businessState"
                        name="businessState"
                        value={formData.businessState}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          formErrors.businessState ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter state"
                      />
                      {formErrors.businessState && (
                        <p className="text-xs text-red-500 mt-1">{formErrors.businessState}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="businessPincode" className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      id="businessPincode"
                      name="businessPincode"
                      value={formData.businessPincode}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessPincode ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter pincode"
                    />
                    {formErrors.businessPincode && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessPincode}</p>
                    )}
                  </div>
                  
                  <h5 className="text-lg font-medium text-[#004274] mb-4 mt-6">Other Details</h5>
                  
                  <div className="mb-4">
                    <label htmlFor="businessEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="businessEmail"
                      name="businessEmail"
                      value={formData.businessEmail}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessEmail ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter email"
                    />
                    {formErrors.businessEmail && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessEmail}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="businessWebsite" className="block text-sm font-medium text-gray-700 mb-1">
                      Website
                    </label>
                    <input
                      type="url"
                      id="businessWebsite"
                      name="businessWebsite"
                      value={formData.businessWebsite}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter website URL"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="businessWhatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="businessWhatsapp"
                      name="businessWhatsapp"
                      value={formData.businessWhatsapp}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter WhatsApp number"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="businessPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="businessPhone"
                      name="businessPhone"
                      value={formData.businessPhone}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessPhone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter phone number"
                    />
                    {formErrors.businessPhone && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessPhone}</p>
                    )}
                  </div>
                  
                  <h5 className="text-lg font-medium text-[#004274] mb-4 mt-6">Upload Image</h5>
                  
                  <div className="mb-4">
                    <label htmlFor="businessImage" className="block text-sm font-medium text-gray-700 mb-1">
                      Business Image *
                    </label>
                    <input
                      type="file"
                      id="businessImage"
                      name="businessImage"
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        formErrors.businessImage ? "border-red-500" : "border-gray-300"
                      }`}
                      accept="image/*"
                    />
                    {formErrors.businessImage && (
                      <p className="text-xs text-red-500 mt-1">{formErrors.businessImage}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="sticky bottom-0 bg-white border-t p-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-[#004274] text-[#004274] rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 bg-[#004274] text-white rounded-md hover:bg-[#00315a]"
                  disabled={wordCount > 200}
                >
                  Save Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListingManagement;
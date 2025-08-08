"use client";
import { useState, useEffect } from "react";
import Dnavbar from "../components/common/dnavbar";
import {
  Edit,
  Phone,
  MapPin,
  Calendar,
  User,
  Eye,
  EyeOff,
  Upload,
  LogOut,
  Check,
} from "lucide-react";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("personal-info");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [formErrors, setFormErrors] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    // Validate new password against requirements
    const validations = {
      length: newPassword.length >= 8,
      uppercase: /[A-Z]/.test(newPassword),
      lowercase: /[a-z]/.test(newPassword),
      number: /\d/.test(newPassword),
      specialChar: /[@$!%*?&]/.test(newPassword),
    };
    setPasswordValid(validations);

    // Check if passwords match only if confirm password has value
    if (confirmPassword) {
      setPasswordsMatch(newPassword === confirmPassword);
    } else {
      setPasswordsMatch(false);
    }
  }, [newPassword, confirmPassword]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  const validatePasswordForm = () => {
    const errors = {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };

    if (!currentPassword) {
      errors.currentPassword = "Current password is required";
    }

    if (!newPassword) {
      errors.newPassword = "New password is required";
    } else if (!Object.values(passwordValid).every(Boolean)) {
      errors.newPassword = "Password doesn't meet requirements";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your new password";
    } else if (!passwordsMatch) {
      errors.confirmPassword = "Passwords don't match";
    }

    setFormErrors(errors);
    return Object.values(errors).every(error => !error);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePasswordForm()) {
      // Submit the form
      alert("Password changed successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const isPasswordValid = Object.values(passwordValid).every(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Dnavbar />

      <main className="pt-16 md:pt-20 pb-8 px-4 md:px-6 mx-auto">
        {/* Page Header */}
        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-semibold text-[#004274]">
                Account Settings
              </h1>
              <p className="text-sm md:text-base text-gray-500 mt-1">
                Manage your profile and account preferences
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          {/* Profile Card */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-blue-50">
                <h3 className="text-lg font-semibold text-gray-900">
                  Profile Information
                </h3>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#004274] flex items-center gap-1 text-sm hover:text-[#00315a] transition-colors"
                >
                  <Edit className="w-4 h-4" />
                  <span>Edit</span>
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="/uploads/6819b1d9b500a-IMG20250117174452.jpg"
                      alt="Profile"
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">
                      Rashmi Ranjan Rout
                    </h4>
                    <p className="text-sm text-gray-500 truncate">
                      rashmiranjana.rout2001@gmail.com
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                    <div className="p-1.5 bg-blue-100 rounded-full text-[#004274]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span className="text-sm">7077077547</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                    <div className="p-1.5 bg-red-100 rounded-full text-red-600">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Bhubaneswar, Odisha</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                    <div className="p-1.5 bg-green-100 rounded-full text-green-600">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <span className="text-sm">March 2, 2001</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-md">
                    <div className="p-1.5 bg-indigo-100 rounded-full text-indigo-600">
                      <User className="w-4 h-4" />
                    </div>
                    <span className="text-sm">Male</span>
                  </div>
                </div>

                <div className="mt-6 mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-700">
                      Profile Completeness
                    </span>
                    <span className="text-sm font-semibold text-[#004274]">
                      100%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-[#004274] h-2 rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>

                {/* Logout Button */}
                <div className="mt-5">
                  <a
                    href="/logout"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-red-200 text-red-600 rounded-md hover:bg-red-50 transition-colors text-sm font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
              <div className="p-4 border-b border-gray-200 bg-blue-50">
                <h3 className="text-lg font-semibold text-gray-900">
                  Account Settings
                </h3>
              </div>
              <div className="p-1">
                {/* Mobile Tabs - Stacked */}
                <div className="lg:hidden grid grid-cols-1 border-b border-gray-200">
                  <button
                    onClick={() => handleTabChange("personal-info")}
                    className={`px-4 py-2.5 text-sm font-medium text-left ${
                      activeTab === "personal-info"
                        ? "text-[#004274] bg-blue-50"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Personal Information
                  </button>
                  <button
                    onClick={() => handleTabChange("password")}
                    className={`px-4 py-2.5 text-sm font-medium text-left ${
                      activeTab === "password"
                        ? "text-[#004274] bg-blue-50"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Password
                  </button>
                  <button
                    onClick={() => handleTabChange("preferences")}
                    className={`px-4 py-2.5 text-sm font-medium text-left ${
                      activeTab === "preferences"
                        ? "text-[#004274] bg-blue-50"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Preferences
                  </button>
                </div>

                {/* Desktop Tabs - Horizontal */}
                <div className="hidden lg:flex border-b border-gray-200">
                  <button
                    onClick={() => handleTabChange("personal-info")}
                    className={`px-4 py-3 text-sm font-medium relative ${
                      activeTab === "personal-info"
                        ? "text-[#004274]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Personal Information
                    {activeTab === "personal-info" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004274]"></div>
                    )}
                  </button>
                  <button
                    onClick={() => handleTabChange("password")}
                    className={`px-4 py-3 text-sm font-medium relative ${
                      activeTab === "password"
                        ? "text-[#004274]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Password
                    {activeTab === "password" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004274]"></div>
                    )}
                  </button>
                  <button
                    onClick={() => handleTabChange("preferences")}
                    className={`px-4 py-3 text-sm font-medium relative ${
                      activeTab === "preferences"
                        ? "text-[#004274]"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    Preferences
                    {activeTab === "preferences" && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#004274]"></div>
                    )}
                  </button>
                </div>

                {/* Personal Info Tab */}
                <div
                  className={`p-4 ${activeTab !== "personal-info" && "hidden"}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: "First Name", value: "Rashmi Ranjan" },
                      { label: "Last Name", value: "Rout" },
                      {
                        label: "Email",
                        value: "rashmiranjana.rout2001@gmail.com",
                      },
                      { label: "Phone", value: "7077077547" },
                      { label: "Date of Birth", value: "March 2, 2001" },
                      { label: "Gender", value: "Male" },
                      { label: "City", value: "Bhubaneswar" },
                      { label: "State", value: "Odisha" },
                      { label: "Pin Code", value: "751024" },
                      { label: "Locality", value: "Raghunathpur" },
                    ].map((field) => (
                      <div key={field.label} className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:ring-1 focus:ring-blue-100 focus:border-blue-500 text-sm"
                          value={field.value}
                          disabled
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Password Tab */}
                <div className={`p-4 ${activeTab !== "password" && "hidden"}`}>
                  <form onSubmit={handlePasswordSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current Password
                      </label>
                      <div className="relative">
                        <input
                          type={showCurrentPassword ? "text" : "password"}
                          className={`w-full px-3 py-2 border rounded-md focus:ring-1 focus:border-blue-500 text-sm ${
                            formErrors.currentPassword ? "border-red-500 focus:ring-red-100" : "border-gray-200 focus:ring-blue-100"
                          }`}
                          value={currentPassword}
                          onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        >
                          {showCurrentPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {formErrors.currentPassword && (
                        <p className="mt-1 text-xs text-red-500">
                          {formErrors.currentPassword}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          className={`w-full px-3 py-2 border rounded-md focus:ring-1 focus:border-blue-500 text-sm ${
                            formErrors.newPassword ? "border-red-500 focus:ring-red-100" : 
                            isPasswordValid ? "border-green-500 focus:ring-green-100" : "border-gray-200 focus:ring-blue-100"
                          }`}
                          placeholder="Enter New Password"
                          value={newPassword}
                          onChange={(e) => setNewPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {formErrors.newPassword && (
                        <p className="mt-1 text-xs text-red-500">
                          {formErrors.newPassword}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          className={`w-full px-3 py-2 border rounded-md focus:ring-1 focus:border-blue-500 text-sm ${
                            formErrors.confirmPassword ? "border-red-500 focus:ring-red-100" : 
                            passwordsMatch && isPasswordValid ? "border-green-500 focus:ring-green-100" : "border-gray-200 focus:ring-blue-100"
                          }`}
                          placeholder="Confirm New Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                      {formErrors.confirmPassword && (
                        <p className="mt-1 text-xs text-red-500">
                          {formErrors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <div className={`p-3 rounded-md border ${
                      isPasswordValid ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                    }`}>
                      <p className={`text-xs font-medium mb-2 ${
                        isPasswordValid ? "text-green-800" : "text-red-800"
                      }`}>
                        Password must contain:
                      </p>
                      <ul className={`text-xs space-y-1 ${
                        isPasswordValid ? "text-green-700" : "text-red-700"
                      }`}>
                        <li className="flex items-center gap-1">
                          <Check className={`w-3 h-3 ${
                            passwordValid.length ? "text-green-600" : "text-red-600"
                          }`} />
                          Minimum 8 characters
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className={`w-3 h-3 ${
                            passwordValid.uppercase ? "text-green-600" : "text-red-600"
                          }`} />
                          At least one uppercase letter
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className={`w-3 h-3 ${
                            passwordValid.lowercase ? "text-green-600" : "text-red-600"
                          }`} />
                          At least one lowercase letter
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className={`w-3 h-3 ${
                            passwordValid.number ? "text-green-600" : "text-red-600"
                          }`} />
                          At least one number
                        </li>
                        <li className="flex items-center gap-1">
                          <Check className={`w-3 h-3 ${
                            passwordValid.specialChar ? "text-green-600" : "text-red-600"
                          }`} />
                          At least one special character (@$!%*?&)
                        </li>
                      </ul>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#004274] text-white px-4 py-2.5 rounded-md font-medium hover:bg-[#00315a] transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!isPasswordValid || !passwordsMatch || !currentPassword}
                    >
                      Update Password
                    </button>
                  </form>
                </div>

                {/* Preferences Tab */}
                <div
                  className={`p-4 ${activeTab !== "preferences" && "hidden"}`}
                >
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Language
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-100 focus:border-blue-500 text-sm">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Odia</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Timezone
                      </label>
                      <select className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-100 focus:border-blue-500 text-sm">
                        <option>(UTC+05:30) India Standard Time</option>
                        <option>(UTC-08:00) Pacific Time</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Notification Preferences
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded text-[#004274] focus:ring-[#004274] text-sm"
                            defaultChecked
                          />
                          <span className="text-sm">Email Notifications</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded text-[#004274] focus:ring-[#004274] text-sm"
                            defaultChecked
                          />
                          <span className="text-sm">SMS Notifications</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            className="rounded text-[#004274] focus:ring-[#004274] text-sm"
                          />
                          <span className="text-sm">Push Notifications</span>
                        </label>
                      </div>
                    </div>
                    <button className="w-full bg-[#004274] text-white px-4 py-2.5 rounded-md font-medium hover:bg-[#00315a] transition-all text-sm">
                      Save Preferences
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white z-10 border-b border-gray-200 p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Edit Profile Information
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                &times;
              </button>
            </div>

            <form className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Rashmi Ranjan Rout", required: true },
                  {
                    label: "Email",
                    value: "rashmiranjana.rout2001@gmail.com",
                    required: true,
                  },
                  { label: "Phone", value: "7077077547", required: true },
                  {
                    label: "Gender",
                    type: "select",
                    options: ["Male", "Female", "Other"],
                    value: "Male",
                    required: true,
                  },
                  {
                    label: "Birthday",
                    type: "date",
                    value: "2001-03-02",
                    required: true,
                  },
                  { label: "City", value: "Bhubaneswar", required: true },
                  { label: "State", value: "Odisha", required: true },
                  { label: "Pin Code", value: "751024", required: true },
                  { label: "Locality", value: "Raghunathpur", required: true },
                  {
                    label: "Interested Category",
                    type: "select",
                    options: ["Technology", "Business", "Arts", "Science"],
                    value: "Technology",
                    required: true,
                  },
                  { label: "Passion", value: "Coding", required: true },
                  {
                    label: "Income Range",
                    type: "select",
                    options: ["2-5 lac", "5-10 lac", "10+ lac"],
                    value: "2-5 lac",
                    required: true,
                  },
                  {
                    label: "Language",
                    type: "select",
                    options: ["English", "Hindi", "Odia"],
                    value: "English",
                    required: true,
                  },
                  {
                    label: "Marital Status",
                    type: "select",
                    options: ["Single", "Married", "Divorced"],
                    value: "Single",
                    required: true,
                  },
                ].map((field) => (
                  <div key={field.label} className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                      {field.required && <span className="text-red-500"> *</span>}
                    </label>
                    {field.type === "select" ? (
                      <select
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-100 focus:border-blue-500 text-sm"
                        required={field.required}
                        defaultValue={field.value}
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : field.type === "date" ? (
                      <input
                        type="date"
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-100 focus:border-blue-500 text-sm"
                        required={field.required}
                        defaultValue={field.value}
                      />
                    ) : (
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-100 focus:border-blue-500 text-sm"
                        required={field.required}
                        defaultValue={field.value}
                      />
                    )}
                  </div>
                ))}
                <div className="col-span-full mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Upload Photo <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-1 px-3 py-2 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:bg-gray-50 transition-colors text-sm">
                      <Upload className="w-4 h-4 text-gray-400" />
                      <span className="font-medium">Choose File</span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                    <span className="text-sm text-gray-500">
                      {selectedFile || "No file chosen"}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    Current photo:{" "}
                    <a
                      href="/uploads/6819b1d9b500a-IMG20250117174452.jpg"
                      target="_blank"
                      className="text-[#004274] hover:underline font-medium"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>

              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4 mt-4 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md font-medium hover:bg-gray-50 transition-colors text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#004274] text-white rounded-md font-medium hover:bg-[#00315a] transition-all text-sm shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
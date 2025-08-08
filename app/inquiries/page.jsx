"use client";
import React, { useState } from "react";
import { Inbox, Users, ChevronRight, Phone, MessageCircle, Mail } from "lucide-react";
import Dnavbar from "../components/common/dnavbar";

export default function InquiriesPage() {
  const [activeTab, setActiveTab] = useState("leads");

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Dnavbar />
      
      {/* Main Content */}
      <main className="pt-16 md:pt-20 pb-16 px-4 md:px-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-[#004274]">
            Inquiries
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage and respond to customer inquiries
          </p>
        </div>

        {/* Stats Cards - Updated to match ratings page style */}
        <div className="grid grid-cols-1 sm:flex sm:flex-wrap gap-4 mb-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm sm:w-fit w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#eff6ff] p-3 rounded-full">
                <Inbox className="w-5 h-5 text-[#004274]" />
              </div>
              <div className="text-left">
                <p className="text-xl md:text-2xl font-semibold text-[#004274]">2</p>
                <p className="text-sm text-gray-500 whitespace-nowrap">Enquiries Received</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm sm:w-fit w-full">
            <div className="flex items-center gap-3">
              <div className="bg-[#eff6ff] p-3 rounded-full">
                <Users className="w-5 h-5 text-[#004274]" />
              </div>
              <div className="text-left">
                <p className="text-xl md:text-2xl font-semibold text-[#004274]">1</p>
                <p className="text-sm text-gray-500 whitespace-nowrap">Leads Received</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs - Updated to rounded button style */}
        <div className="flex items-center gap-2 p-1 bg-gray-100 rounded-full mb-6 w-fit">
          <button
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === "leads" ? "bg-[#004274] text-white" : "text-gray-500 hover:bg-gray-200"}`}
            onClick={() => toggleTab("leads")}
          >
            <Users className="w-4 h-4" />
            <span>Leads (1)</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeTab === "inquiries" ? "bg-[#004274] text-white" : "text-gray-500 hover:bg-gray-200"}`}
            onClick={() => toggleTab("inquiries")}
          >
            <Inbox className="w-4 h-4" />
            <span>Inquiries (2)</span>
          </button>
        </div>

        {/* Mobile Card Views */}
        <div className="lg:hidden space-y-6">
          {/* Leads Mobile Cards */}
          {activeTab === "leads" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#004274]">Recent Leads</h2>
                <a href="#" className="flex items-center text-sm text-[#004274]">
                  <span>See All</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs text-gray-500">Date & Time</p>
                    <p className="text-sm">29 April 2025 07:33</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="text-sm truncate">Rashmi Ranjan Rout</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm truncate">rashmiranjana.rout2001@gmail.com</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs text-gray-500">Mobile</p>
                    <p className="text-sm">7077077547</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">Requested Service</p>
                    <p className="text-sm">Auto Repair and Maintenance</p>
                  </div>
                </div>
                <div className="flex justify-around pt-3 border-t border-gray-100">
                  <a href="tel:7077077547" className="flex flex-col items-center text-xs">
                    <Phone className="w-4 h-4 text-green-500 mb-1" />
                    <span>Call</span>
                  </a>
                  <a href="https://wa.me/7077077547" className="flex flex-col items-center text-xs">
                    <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
                    <span>WhatsApp</span>
                  </a>
                  <a href="mailto:rashmiranjana.rout2001@gmail.com" className="flex flex-col items-center text-xs">
                    <Mail className="w-4 h-4 text-blue-500 mb-1" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          )}
          
          {/* Inquiries Mobile Cards */}
          {activeTab === "inquiries" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#004274]">Recent Inquiries</h2>
                <a href="#" className="flex items-center text-sm text-[#004274]">
                  <span>See All</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Date & Time</p>
                      <p className="text-sm">26 March 2025 08:53</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Name</p>
                      <p className="text-sm truncate">Rashmi Ranjan Rout</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm truncate">rashmiranjana.rout2001@gmail.com</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Mobile</p>
                      <p className="text-sm">N/A</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-500">Message</p>
                      <p className="text-sm">I need something</p>
                    </div>
                  </div>
                  <div className="flex justify-around pt-3 border-t border-gray-100">
                    <a href="tel:7077077547" className="flex flex-col items-center text-xs">
                      <Phone className="w-4 h-4 text-green-500 mb-1" />
                      <span>Call</span>
                    </a>
                    <a href="https://wa.me/7077077547" className="flex flex-col items-center text-xs">
                      <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
                      <span>WhatsApp</span>
                    </a>
                    <a href="mailto:rashmiranjana.rout2001@gmail.com" className="flex flex-col items-center text-xs">
                      <Mail className="w-4 h-4 text-blue-500 mb-1" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Date & Time</p>
                      <p className="text-sm">25 March 2025 15:50</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Name</p>
                      <p className="text-sm truncate">Rashmi Ranjan Rout</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm truncate">rashmiranjana.rout2001@gmail.com</p>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <p className="text-xs text-gray-500">Mobile</p>
                      <p className="text-sm">N/A</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-xs text-gray-500">Message</p>
                      <p className="text-sm">hlo</p>
                    </div>
                  </div>
                  <div className="flex justify-around pt-3 border-t border-gray-100">
                    <a href="tel:7077077547" className="flex flex-col items-center text-xs">
                      <Phone className="w-4 h-4 text-green-500 mb-1" />
                      <span>Call</span>
                    </a>
                    <a href="https://wa.me/7077077547" className="flex flex-col items-center text-xs">
                      <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
                      <span>WhatsApp</span>
                    </a>
                    <a href="mailto:rashmiranjana.rout2001@gmail.com" className="flex flex-col items-center text-xs">
                      <Mail className="w-4 h-4 text-blue-500 mb-1" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Table Views */}
        <div className="hidden lg:block space-y-6">
          {/* Leads Table */}
          {activeTab === "leads" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#004274]">Recent Leads</h2>
                <a href="#" className="flex items-center text-sm text-[#004274]">
                  <span>See All</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Requested Service</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-[#eff6ff] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">29 April 2025 07:33</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Rashmi Ranjan Rout</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">rashmiranjana.rout2001@gmail.com</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">7077077547</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Auto Repair and Maintenance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-4">
                          <a href="tel:7077077547" className="flex flex-col items-center text-xs">
                            <Phone className="w-4 h-4 text-green-500 mb-1" />
                            <span>Call</span>
                          </a>
                          <a href="https://wa.me/7077077547" className="flex flex-col items-center text-xs">
                            <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
                            <span>WhatsApp</span>
                          </a>
                          <a href="mailto:rashmiranjana.rout2001@gmail.com" className="flex flex-col items-center text-xs">
                            <Mail className="w-4 h-4 text-blue-500 mb-1" />
                            <span>Email</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Inquiries Table */}
          {activeTab === "inquiries" && (
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#004274]">Recent Inquiries</h2>
                <a href="#" className="flex items-center text-sm text-[#004274]">
                  <span>See All</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </div>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-[#eff6ff] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">26 March 2025 08:53</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Rashmi Ranjan Rout</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">rashmiranjana.rout2001@gmail.com</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">N/A</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">I need something</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-4">
                          <a href="tel:7077077547" className="flex flex-col items-center text-xs">
                            <Phone className="w-4 h-4 text-green-500 mb-1" />
                            <span>Call</span>
                          </a>
                          <a href="https://wa.me/7077077547" className="flex flex-col items-center text-xs">
                            <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
                            <span>WhatsApp</span>
                          </a>
                          <a href="mailto:rashmiranjana.rout2001@gmail.com" className="flex flex-col items-center text-xs">
                            <Mail className="w-4 h-4 text-blue-500 mb-1" />
                            <span>Email</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-[#eff6ff] transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm">25 March 2025 15:50</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">Rashmi Ranjan Rout</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">rashmiranjana.rout2001@gmail.com</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">N/A</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">hlo</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex space-x-4">
                          <a href="tel:7077077547" className="flex flex-col items-center text-xs">
                            <Phone className="w-4 h-4 text-green-500 mb-1" />
                            <span>Call</span>
                          </a>
                          <a href="https://wa.me/7077077547" className="flex flex-col items-center text-xs">
                            <MessageCircle className="w-4 h-4 text-[#25D366] mb-1" />
                            <span>WhatsApp</span>
                          </a>
                          <a href="mailto:rashmiranjana.rout2001@gmail.com" className="flex flex-col items-center text-xs">
                            <Mail className="w-4 h-4 text-blue-500 mb-1" />
                            <span>Email</span>
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
"use client";
import { useState, useEffect } from "react";
import { ArrowDownUp, MoreVertical, MailOpen } from "lucide-react";
import Dsidebar from "../components/common/dsidebar";
import Dnavbar from "../components/common/dnavbar";

const data = [
  { name: "Akhil Mahadeo", email: "akhilmahadeo@gmail.com", phone: "010 59303753", date: "19 July,2020" },
  { name: "Harrison McLean", email: "harrisonmclean@gmail.com", phone: "010 59303753", date: "19 July,2020" },
  { name: "Jasmine Rowley", email: "jasminerowley@gmail.com", phone: "010 59303753", date: "19 July,2020" },
  { name: "Khush Darji", email: "khushdarji@gmail.com", phone: "010 59405753", date: "19 July,2020" },
  { name: "Lata Ajeet Dial", email: "lataajeetdial@gmail.com", phone: "010 59303753", date: "19 July,2020" },
  { name: "Meera Singh", email: "meerasingh@gmail.com", phone: "010 59303753", date: "19 July,2020" },
  { name: "Nishtha Rama", email: "nishtharama@gmail.com", phone: "010 59303753", date: "19 July,2020" },
];

export default function RequestQuoteTable() {
  const [menuIndex, setMenuIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-btn")) {
        setMenuIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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
        <div className="flex-grow min-w-0 p-3 sm:p-5">
          <h1 className="text-lg sm:text-3xl font-semibold text-[#004274] text-left">Request Quote</h1>
          <p className="text-gray-500 mb-4 text-sm text-left">
            In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.
          </p>

          <div className="bg-white rounded-xl shadow-lg overflow-auto">
            <table className="w-full border-collapse text-xs sm:text-sm text-left">
              <thead>
                <tr className="bg-white">
                  {["Name", "Email", "Phone", "Date for availability", "Message", "Action"].map((col, index) => (
                    <th
                      key={index}
                      className="p-2 font-medium text-gray-500 border-b whitespace-nowrap"
                    >
                      <div className="flex items-center gap-1">
                        {col}
                        {index < 5 && (
                          <span className="text-gray-300">
                            <ArrowDownUp size={24} className="hover:bg-gray-100 p-1 rounded-full" />
                          </span>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-2 text-gray-600 whitespace-nowrap">{item.name}</td>
                    <td className="p-2 text-black whitespace-nowrap">{item.email}</td>
                    <td className="p-2 text-gray-600 whitespace-nowrap">{item.phone}</td>
                    <td className="p-2 text-gray-600 whitespace-nowrap">{item.date}</td>
                    <td className="p-2">
                      <MailOpen className="text-blue-500" />
                    </td>
                    <td className="p-2 relative">
                      <div className="flex justify-start">
                        <button
                          onClick={() => setMenuIndex(menuIndex === idx ? null : idx)}
                          className="menu-btn p-1 rounded-md focus:outline-none border-2 border-transparent hover:border-[#004274] transition"
                        >
                          <MoreVertical size={18} className="text-black" />
                        </button>
                      </div>
                      {menuIndex === idx && (
                        <div className="absolute top-10 right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-10">
                          <button className="block w-full px-2 py-1 text-left text-gray-700 hover:bg-gray-100">
                            Edit Details
                          </button>
                          <button className="block w-full px-2 py-1 text-left text-red-500 hover:bg-gray-100">
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center p-3 text-sm gap-2">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="text-[#004274] disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="text-[#004274] disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

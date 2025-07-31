"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Clock,
  List,
  FileText,
  Star,
  Gem,
  User,
  LogOut,
  Menu,
} from "lucide-react";

export default function Dsidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const SidebarContent = () => (
    <ul className="space-y-2">
      <li>
        <Link
          href="/dashboard"
          className="flex items-center p-2 rounded-md text-white bg-[#004274]"
        >
          <Clock className="w-5 h-5 mr-2" />
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href="/listing"
          className="flex items-center p-2 rounded-md text-[#004274] hover:text-white hover:bg-[#004274]"
        >
          <List className="w-5 h-5 mr-2" />
          Listing
        </Link>
      </li>
      <li>
        <Link
          href="/request"
          className="flex items-center p-2 rounded-md text-[#004274] hover:text-white hover:bg-[#004274]"
        >
          <FileText className="w-5 h-5 mr-2" />
          Request Quote
        </Link>
      </li>
      <li>
        <Link
          href="/reviews"
          className="flex items-center p-2 rounded-md text-[#004274] hover:text-white hover:bg-[#004274]"
        >
          <Star className="w-5 h-5 mr-2" />
          Reviews
        </Link>
      </li>
      <li>
        <Link
          href="/myplan"
          className="flex items-center p-2 rounded-md text-[#004274] hover:text-white hover:bg-[#004274]"
        >
          <Gem className="w-5 h-5 mr-2" />
          My Plan
        </Link>
      </li>
      <li>
        <Link
          href="/dprofile"
          className="flex items-center p-2 rounded-md text-[#004274] hover:text-white hover:bg-[#004274]"
        >
          <User className="w-5 h-5 mr-2" />
          Profile
        </Link>
      </li>
      <li>
        <Link
          href="/home"
          className="flex items-center p-2 rounded-md text-[#004274] hover:text-white hover:bg-[#004274]"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="lg:relative z-50">
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-2">
        <button
          onClick={toggleSidebar}
          className="text-[#004274] p-2 rounded-md hover:bg-gray-200"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 z-50
          w-60 h-screen pt-2 px-4 pb-4 bg-white
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:hidden
        `}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:relative w-60 h-screen pt-0 px-4 pb-4 bg-white z-50">
        <SidebarContent />
      </div>
    </div>
  );
}

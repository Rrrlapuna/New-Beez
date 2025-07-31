"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Bell,
  User,
  LayoutDashboard,
  List,
  FileText,
  Star,
  Receipt,
  Gem,
  LogOut,
} from "lucide-react";
import Link from "next/link";

export default function Dnavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const menuRef = useRef(null);
  const notifRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center bg-white px-4 py-2 shadow-xl w-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/image/beezlogo.svg"
            alt="BeezInfo Logo"
            width={30}
            height={30}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <div className="flex items-baseline">
            <span className="text-2xl sm:text-3xl font-semibold text-[#ed7d31] leading-none">Beez</span>
            <span className="text-2xl sm:text-3xl font-semibold text-[#0f1341] leading-none ml-1">info</span>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4 relative">
          {/* Bell Icon */}
          <div className="relative" ref={notifRef}>
            <Bell
              className="w-6 h-6 sm:w-7 sm:h-7 text-black cursor-pointer"
              onClick={() => {
                setNotifOpen(!notifOpen);
                setMenuOpen(false); 
              }}
            />
            {notifOpen && (
              <div className="absolute right-0 top-12 w-72 bg-white shadow-lg border rounded-md z-50 transition-all duration-300 ease-in-out">
                <div className="max-h-80 overflow-y-auto px-3 py-3 space-y-3">
                  <NotificationCard text="You have got a new request quote for your office." time="1 days ago" />
                  <NotificationCard text="Welcome to Spacely! Click here it understand better." time="23 days ago" />
                  <NotificationCard text="You have got a new request quote for your office." time="1 days ago" />
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-t text-sm text-[#004274] font-medium">
                  <button className="hover:underline">Show all</button>
                  <button className="hover:underline">Mark all as read</button>
                </div>
              </div>
            )}
          </div>

          {/* User Icon */}
          <div ref={menuRef}>
            <User
              className="w-6 h-6 sm:w-7 sm:h-7 text-black cursor-pointer"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setNotifOpen(false); 
              }}
            />
            {menuOpen && (
              <div className="absolute right-0 top-12 w-56 bg-white shadow-lg border rounded-md z-50 transition-all duration-300 ease-in-out ">
                <ul className="py-2 px-2 space-y-1 text-[#004274] font-medium ">
                  <DropdownItem icon={<LayoutDashboard className="w-4 h-4" />} text="Dashboard" href="/dashboard" />
                  <DropdownItem icon={<List className="w-4 h-4" />} text="Listing" href="/listing" />
                  <DropdownItem icon={<FileText className="w-4 h-4" />} text="Request Quote" href="/request" />
                  <DropdownItem icon={<Star className="w-4 h-4" />} text="Reviews" href="/reviews" />
                  <DropdownItem icon={<Gem className="w-4 h-4" />} text="My Plan" href="/myplan" />
                  <DropdownItem icon={<User className="w-4 h-4" />} text="Profile" href="/dprofile" />
                  <DropdownItem icon={<LogOut className="w-4 h-4" />} text="Logout" href="/home" />
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Notification Card Component
function NotificationCard({ text, time }) {
  return (
    <div className="bg-gray-100 p-3 rounded-md text-sm">
      <div className="text-[#0f1341] font-medium mb-1">{text}</div>
      <div className="text-blue-600 text-xs">{time}</div>
    </div>
  );
}

// Dropdown Item Component
function DropdownItem({ icon, text, href }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span>{icon}</span>
        <span>{text}</span>
      </Link>
    </li>
  );
}

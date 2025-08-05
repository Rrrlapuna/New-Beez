"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Home,
  List,
  Star,
  MessageCircle,
  User,
  Bell,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  LogOut,
} from "lucide-react";

export default function Dnavbar() {
  const pathname = usePathname();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [mobileProfileDropdownOpen, setMobileProfileDropdownOpen] =
    useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".beez-profile-dropdown")) {
        setProfileDropdownOpen(false);
      }
      if (!event.target.closest(".beez-mobile-profile-btn")) {
        setMobileProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { href: "/dashboard", icon: Home, label: "Dashboard" },
    { href: "/listing", icon: List, label: "Listings" },
    { href: "/ratings", icon: Star, label: "My Ratings" },
    { href: "/inquiries", icon: MessageCircle, label: "Inquiries" },
    { href: "/account", icon: User, label: "Account" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="beez-header hidden lg:flex fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-2 px-6 justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="beez-header-logo">
            <img
              src="https://beezinfo.com/img/beez-main-logo.svg"
              alt="BeezInfo"
              className="h-8"
            />
          </div>
        </div>

        <nav className="beez-nav flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`beez-nav-link flex items-center px-3 py-2 rounded text-gray-800 text-sm transition-colors ${
                pathname === link.href
                  ? "text-[#004274] font-medium"
                  : "hover:bg-[#eff6ff] hover:text-[#004274]"
              }`}
            >
              <link.icon className="w-4 h-4 mr-2" />
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Notification */}
          <div className="relative">
            <button className="beez-btn border-0 bg-transparent p-1 text-gray-600 hover:text-[#004274]">
              <Bell className="w-5 h-5" />
            </button>
            <span className="beez-notification-badge absolute -top-1 -right-1 bg-[#ef4444] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
              3
            </span>
          </div>

          {/* Profile Dropdown */}
          <div className="beez-profile-dropdown relative">
            <button
              className="beez-profile-btn flex items-center gap-2 bg-transparent p-1 rounded hover:bg-[#eff6ff]"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            >
              <img
                src="https://ui-avatars.com/api/?name=Rashmi+Rout&background=004274&color=fff"
                className="beez-profile-img w-8 h-8 rounded-full object-cover"
                alt="Profile"
              />
              <span className="beez-profile-name text-sm font-medium">
                Rashmi
              </span>
              {profileDropdownOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {profileDropdownOpen && (
              <div className="beez-dropdown-menu absolute right-0 top-full mt-1 bg-white rounded-md shadow-lg py-1 z-50 min-w-[180px]">
                <Link
                  href="/account"
                  className="beez-dropdown-item flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#eff6ff] hover:text-[#004274]"
                >
                  <User className="w-4 h-4 mr-2" />
                  <span>Go to Profile</span>
                </Link>
                <Link
                  href="/logout"
                  className="beez-dropdown-item flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50"
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Logout</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="beez-mobile-header lg:hidden fixed top-0 left-0 w-full bg-white shadow-sm z-50 py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="beez-mobile-header-logo">
            <img
              src="https://beezinfo.com/img/beez-main-logo.svg"
              alt="BeezInfo"
              className="h-7"
            />
          </div>
          <Link
            href="https://beezinfo.com"
            className="beez-mobile-back-btn flex items-center gap-1 bg-[#004274] text-white px-3 py-1 rounded-full text-xs"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Back to BeezInfo</span>
          </Link>
        </div>

        <div className="beez-mobile-header-actions flex items-center gap-3">
          <div className="relative">
            <button className="beez-btn border-0 bg-transparent p-1 text-gray-600 hover:text-[#004274]">
              <Bell className="w-5 h-5" />
            </button>
            <span className="beez-notification-badge absolute -top-1 -right-1 bg-[#ef4444] text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
              3
            </span>
          </div>

          <button
            className="beez-mobile-profile-btn"
            onClick={() =>
              setMobileProfileDropdownOpen(!mobileProfileDropdownOpen)
            }
          >
            <img
              src="https://ui-avatars.com/api/?name=Rashmi+Rout&background=004274&color=fff"
              className="beez-mobile-profile-img w-8 h-8 rounded-full object-cover"
              alt="Profile"
            />
          </button>
        </div>
      </header>

      {/* Mobile Profile Dropdown */}
      {mobileProfileDropdownOpen && (
        <div className="fixed top-16 right-4 bg-white rounded-md shadow-lg py-1 z-50 min-w-[180px] border border-gray-100">
          <Link
            href="/account"
            className="beez-dropdown-item flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-[#eff6ff] hover:text-[#004274]"
          >
            <User className="w-4 h-4 mr-2" />
            <span>Go to Profile</span>
          </Link>
          <Link
            href="/logout"
            className="beez-dropdown-item flex items-center px-4 py-2 text-sm text-red-500 hover:bg-red-50"
          >
            <LogOut className="w-4 h-4 mr-2" />
            <span>Logout</span>
          </Link>
        </div>
      )}

      {/* Floating Back Button */}
      <Link
        href="https://beezinfo.com"
        className="beez-floating-back-btn hidden lg:flex fixed right-6 bottom-24 bg-[#004274] text-white px-4 py-2 rounded-full text-xs font-medium items-center gap-1 shadow-md hover:bg-[#00315a] hover:shadow-lg transition-all"
      >
        <ArrowLeft className="w-3 h-3" />
        <span>Back to BeezInfo</span>
      </Link>

      {/* Mobile Bottom Navigation */}
      <nav className="beez-mobile-nav lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 py-2">
        <div className="beez-mobile-nav-links flex justify-around items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`beez-mobile-nav-link flex flex-col items-center px-2 py-1 text-xs ${
                pathname === link.href ? "text-[#004274]" : "text-gray-500"
              }`}
            >
              <link.icon className="w-5 h-5 mb-1" />
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Clock,
  List,
  FileText,
  Star,
  Gem,
  User,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Settings,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dsidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const sidebarRef = useRef(null);

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-collapse on small screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setCollapsed(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/dashboard", icon: Clock, label: "Dashboard" },
    { href: "/listing", icon: List, label: "Listing" },
    { href: "/request", icon: FileText, label: "Request Quote" },
    { href: "/reviews", icon: Star, label: "Reviews" },
    { href: "/myplan", icon: Gem, label: "My Plan" },
    { href: "/dprofile", icon: User, label: "Profile" },
  ];

  const secondaryItems = [
    { href: "/settings", icon: Settings, label: "Settings" },
    { href: "/support", icon: HelpCircle, label: "Help" },
    { href: "/logout", icon: LogOut, label: "Logout" },
  ];

  const SidebarLink = ({ href, icon: Icon, label, collapsed }) => (
    <Link
      href={href}
      className={`flex items-center p-2.5 rounded-lg transition-all duration-200 group ${
        pathname === href
          ? "bg-[#e6f2ff] text-[#004274] font-medium"
          : "hover:bg-[#004274]/10 text-gray-600 hover:text-[#004274]"
      } ${collapsed ? "justify-center" : "justify-between"}`}
    >
      <div className="flex items-center">
        <Icon
          className={`w-5 h-5 ${collapsed ? "" : "mr-3"} ${
            pathname === href ? "text-[#004274]" : "text-current"
          }`}
        />
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-sm"
          >
            {label}
          </motion.span>
        )}
      </div>
      {!collapsed && pathname !== href && (
        <ChevronRight className="w-4 h-4 text-[#004274] opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </Link>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-3 left-3 lg:hidden z-40 p-2 rounded-lg bg-white shadow-sm text-[#004274] hover:bg-gray-50 transition-all border border-gray-200"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Desktop Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial={{ width: 240 }}
        animate={{
          width: collapsed ? 80 : 240,
        }}
        className={`hidden lg:flex fixed top-0 left-0 h-screen bg-white shadow-sm z-30 flex-col border-r border-gray-100`}
      >
        {/* Header with Beez Info Logo */}
        <div className="flex items-center p-3 border-b border-gray-100 h-14">
          {!collapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <div className="w-9 h-9 rounded-md  flex items-center justify-center mr-2 overflow-hidden">
                <Image
                  src="assets/image/beez-main-logo.svg" 
                  alt="Beez Info Logo"
                  width={30}
                  height={30}
                  className="object-contain p-0.5"
                />
              </div>
              <span className="text-base font-semibold text-[#004274]">
                Beez Info
              </span>
            </motion.div>
          ) : (
            <div className="w-7 h-7 rounded-md  flex items-center justify-center mx-auto overflow-hidden">
              <Image
                src="assets/image/beez-main-logo.svg" 
                alt="Beez Icon"
                width={30}
                height={30}
                className="object-contain p-0.5"
              />
            </div>
          )}
        </div>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-5 w-6 h-6 bg-white rounded-full shadow-sm border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-[#004274]/50"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <ChevronRight className="w-3.5 h-3.5 text-[#004274]" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-[#004274] transform rotate-180" />
          )}
        </button>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3 px-2">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <SidebarLink {...item} collapsed={collapsed} />
              </li>
            ))}
          </ul>
        </nav>

        {/* Secondary Navigation */}
        <div className="py-3 px-2 border-t border-gray-100">
          <ul className="space-y-1">
            {secondaryItems.map((item) => (
              <li key={item.href}>
                <SidebarLink {...item} collapsed={collapsed} />
              </li>
            ))}
          </ul>
        </div>

        {/* User Profile */}
        <div
          className={`p-3 border-t border-gray-100 ${
            collapsed ? "flex justify-center" : ""
          }`}
        >
          {!collapsed ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center"
            >
              <div className="w-9 h-9 rounded-full bg-[#004274]/10 flex items-center justify-center mr-2">
                <User className="w-4 h-4 text-[#004274]" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">Rashmi</p>
                <p className="text-xs text-gray-500">Premium Plan</p>
              </div>
            </motion.div>
          ) : (
            <div className="w-9 h-9 rounded-full bg-[#004274]/10 flex items-center justify-center mx-auto">
              <User className="w-4 h-4 text-[#004274]" />
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              ref={sidebarRef}
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 w-[280px] h-screen bg-white shadow-lg z-30 flex flex-col"
            >
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-100 h-14">
                <div className="flex items-center">
                  <div className="w-7 h-7 rounded-md flex items-center justify-center mr-2 overflow-hidden">
                    <Image
                       src="assets/image/beez-main-logo.svg" 
                      alt="Beez Info Logo"
                      width={30}
                      height={30}
                      className="object-contain p-0.5"
                    />
                  </div>
                  <span className="text-base font-semibold text-[#004274]">
                    Beez Info
                  </span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#004274]/50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 overflow-y-auto py-3 px-2">
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <SidebarLink {...item} collapsed={false} />
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-3 border-t border-gray-100">
                  <ul className="space-y-1">
                    {secondaryItems.map((item) => (
                      <li key={item.href}>
                        <SidebarLink {...item} collapsed={false} />
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>

              {/* Mobile Profile */}
              <div className="p-3 border-t border-gray-100">
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full bg-[#004274]/10 flex items-center justify-center mr-2">
                    <User className="w-4 h-4 text-[#004274]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Rashmi</p>
                    <p className="text-xs text-gray-500">Premium Plan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div
        className={`min-h-screen transition-all duration-300 ${
          collapsed ? "lg:ml-20" : "lg:ml-[240px]"
        }`}
      >
        {/* Your page content goes here */}
      </div>
    </>
  );
}
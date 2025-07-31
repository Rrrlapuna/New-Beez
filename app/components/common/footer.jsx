"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cantora_One } from "next/font/google";

const cantoraOne = Cantora_One({ subsets: ["latin"], weight: "400" });

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative py-10 px-4 sm:px-6 lg:px-20 text-white bg-black bg-opacity-80 footer-bg">
        <div className="relative w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-center md:text-left">
          {/* Logo & Contact Section */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 10 }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "reverse",
              }}
              className="flex items-center justify-center md:justify-start space-x-2"
            >
              <Image
                src="/assets/image/beezlogo.svg"
                alt="BeezInfo Logo"
                width={35}
                height={35}
                priority
                className="w-9 h-9"
              />
              <div className="flex items-center space-x-1">
                <span
                  className={`${cantoraOne.className} text-4xl sm:text-5xl font-medium text-[#ed7d31]`}
                >
                  Beez
                </span>
                <span
                  className={`${cantoraOne.className} text-4xl sm:text-5xl font-medium text-[#0f1341]`}
                >
                  info
                </span>
              </div>
            </motion.div>

            <p className="text-gray-400 mt-4 text-sm sm:text-base">
              Discover & connect with businesses around the country.
            </p>

            <div className="mt-4 space-y-2 text-sm sm:text-base">
              <p className="flex items-center justify-center md:justify-start text-[#ed7d31] font-medium">
                <FaMapMarkerAlt className="mr-2" /> N6/321, Jaydev Vihar, Cuttack
              </p>
              <p className="flex items-center justify-center md:justify-start text-[#ed7d31] font-medium">
                <FaPhoneAlt className="mr-2" /> 07316984799
              </p>
              <p className="flex items-center justify-center md:justify-start text-[#ed7d31] font-medium">
                <FaEnvelope className="mr-2" /> contact@beezinfo.com
              </p>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 relative">
              Resources
              <span className="block w-10 h-1 bg-[#ed7d31] mt-1 mx-auto md:mx-0"></span>
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#">Services</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms&Condition</a></li>
              <li><a href="#">Product</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 relative">
              Company
              <span className="block w-10 h-1 bg-[#ed7d31] mt-1 mx-auto md:mx-0"></span>
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contactus">Contact & Support</a></li>
              <li><a href="/business">Find Business</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 relative">
              Quick Links
              <span className="block w-10 h-1 bg-[#ed7d31] mt-1 mx-auto md:mx-0"></span>
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400 text-sm sm:text-base">
              <li><a href="#">Premium Support</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Know Our Team</a></li>
              <li><a href="#">Download App</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="relative w-full mx-auto mt-10 flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-6 gap-4 text-sm sm:text-base">
          <p className="text-[#ed7d31] text-center">
            © 2025 BeezInfo. All Rights Reserved.
          </p>
          <div className="flex space-x-4 justify-center">
            <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

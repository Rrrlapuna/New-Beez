"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

const images = [
  "/assets/image/pro1.jpg",
  "/assets/image/pro2.jpg",
  "/assets/image/pro3.jpg",
  "/assets/image/pro4.jpg",
  "/assets/image/pro5.jpg",
];

export default function PhotoGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mx-auto p-4">
      {/* Slider for Mobile */}
      <div className="block md:hidden overflow-hidden relative">
        <div className="flex transition-transform ease-linear duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="min-w-full">
              <Image
                src={src}
                alt="Gallery Image"
                width={300}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout for Desktop */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg">
            <Image
              src={src}
              alt="Gallery Image"
              width={300}
              height={200}
              className="w-full h-auto object-cover"
            />
            {index === images.length - 1 && (
              <button
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white font-semibold text-lg"
              >
                View More
              </button>
            )}
          </div>
        ))}
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-white p-6 rounded-lg max-w-xs sm:max-w-md md:max-w-lg w-full text-center"
        >
          <h2 className="text-lg font-semibold">Welcome To The Photo Gallery</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 px-4 py-2 bg-[#004274] text-white rounded-lg hover:bg-[#002a4d] transition"
          >
            Close
          </button>
        </motion.div>
      </Dialog>
    </div>
  );
}

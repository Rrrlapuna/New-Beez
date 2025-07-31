"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function CurrentOffers() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const offers = [
    {
      title: "20% OFF",
      description: "Contact and Refer yourself from Beezinfo to claim 20% off...",
      details: "Enjoy 20% off by referring yourself via Beezinfo. Limited-time offer!",
    },
    {
      title: "Buy 1 Get 1 Free",
      description: "Exclusive offer for our loyal customers!",
      details: "Purchase any item and get another absolutely free!",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateIndex = () => {
        if (window.innerWidth < 1024) {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
        }
      };
      updateIndex();
      const interval = setInterval(updateIndex, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  const Modal = ({ children }) =>
    createPortal(
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
          {children}
        </div>
      </div>,
      document.body
    );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-[#004274] mb-4">Current Offers</h2>
      <div className="max-w-lg">
        {typeof window !== "undefined" && window.innerWidth < 1024 ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-blue-700">{offers[currentIndex].title}</h3>
              <p className="text-gray-600 mt-2">{offers[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold text-blue-700">{offer.title}</h3>
                <p className="text-gray-600 mt-2">{offer.description}</p>
              </div>
            ))}
          </div>
        )}
        <button
          className="mt-4 bg-[#004274] text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
        >
          Know more &rarr;
        </button>
      </div>

      {isOpen && (
        <Modal>
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <h3 className="text-xl font-bold text-gray-800">More Details</h3>
          <p className="text-gray-600 mt-2">{offers[currentIndex].details}</p>
        </Modal>
      )}
    </section>
  );
}

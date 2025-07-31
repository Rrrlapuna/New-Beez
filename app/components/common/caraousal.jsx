"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cities = [
  "Bhubaneswar",
  "Cuttack",
  "Pune",
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Jaipur",
  "Ahmedabad",
  "Lucknow",
  "Kochi",
  "Visakhapatnam",
  "Chandigarh",
];

const CityCarousel = () => {
  const scrollRef = useRef(null);
  const scrollAmount = 200;
  const [isMobile, setIsMobile] = useState(false);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });

      setTimeout(() => {
        if (
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth - 10
        ) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll(1);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative py-10 bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      <h2 className="text-center text-3xl font-semibold mb-6 text-[#004274] tracking-wide">
        Popular Cities
      </h2>

      <div className="relative max-w-6xl mx-auto flex items-center">
        {!isMobile && (
          <>
            <button
              onClick={() => scroll(-1)}
              className="absolute left-2 md:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white text-[#004274] shadow-md rounded-full p-2 md:p-3 border-2 border-[#004274] hover:shadow-[0_0_10px_#004274]"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="absolute right-2 md:-right-10 top-1/2 -translate-y-1/2 z-10 bg-white text-[#004274] shadow-md rounded-full p-2 md:p-3 border-2 border-[#004274] hover:shadow-[0_0_10px_#004274]"
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 md:space-x-6 py-4 w-full scroll-smooth scrollbar-hide"
        >
          {cities.concat(cities).map((city, index) => (
            <a
              key={index}
              href={`https://beezinfo.com/findbusiness/location-${city.toLowerCase()}`}
              className="group flex flex-col items-center justify-center min-w-[110px] md:min-w-[130px] h-[110px] md:h-[140px] bg-white border border-[#004274] rounded-2xl shadow-md backdrop-blur-md transition duration-300 hover:shadow-[0_0_10px_#004274] hover:-translate-y-1"
            >
              <Image
                src="/assets/image/cities.svg"
                alt={city}
                width={40}
                height={40}
                className="mb-2"
              />
              <p className="font-bold text-xs md:text-sm text-[#004274] text-center px-2">
                {city}
              </p>
            </a>
          ))}
        </div>
      </div>

      {isMobile && (
        <div className="flex justify-center mt-4 space-x-6 text-[#004274] text-2xl font-bold">
          <button onClick={() => scroll(-1)}>&lt;</button>
          <button onClick={() => scroll(1)}>&gt;</button>
        </div>
      )}
    </div>
  );
};

export default CityCarousel;

"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const categories = [
  { image: "/assets/image/consultansy.png" },
  { image: "/assets/image/restaurant.png" },
  { image: "/assets/image/mall.png" },
  { image: "/assets/image/spa.png" },
  { image: "/assets/image/software.png" },
  { image: "/assets/image/realestate.png" },
  { image: "/assets/image/other.png" },
];

const InfiniteSlider = () => {
  const sliderRef = useRef(null);
  const scrollInterval = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = 1;
    const intervalDelay = 20;

    const cloneItems = () => {
      const items = Array.from(slider.children);
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneItems();

    scrollInterval.current = setInterval(() => {
      if (!slider) return;
      slider.scrollLeft += scrollStep;
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      }
    }, intervalDelay);

    return () => clearInterval(scrollInterval.current);
  }, []);

  const scrollLeft = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-white py-6 px-4">
      {/* Arrow Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center shadow"
      >
        &lt;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white rounded-full w-8 h-8 flex items-center justify-center shadow"
      >
        &gt;
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 px-6"
        style={{ scrollBehavior: "auto", whiteSpace: "nowrap" }}
      >
        {[...categories, ...categories].map((cat, idx) => (
          <div
            key={idx}
            className="slider-item flex-shrink-0 w-[120px] h-[120px] inline-block"
          >
            <Image
              src={cat.image}
              alt={`category-${idx}`}
              width={120}
              height={120}
              className="object-contain w-full h-full rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;

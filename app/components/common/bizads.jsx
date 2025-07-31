"use client";
import React, { useEffect, useState } from "react";

const adImages = [
  {
    url: "/assets/image/slider1.png",
  },
  {
    url: "/assets/image/slider2.png",
  },
];

const BizSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === adImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
    
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="mx-auto">
        <div className="relative w-full h-auto">
          {adImages.map((ad, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 relative z-10"
                  : "opacity-0 absolute top-0 left-0 w-full z-0"
              }`}
            >
              <a href={ad.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={ad.url}
                  alt={`Ad ${index + 1}`}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/600x200")
                  }
                  className="w-full h-auto rounded-md object-cover shadow-md"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BizSlider;

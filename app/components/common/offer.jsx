"use client";
import React, { useEffect, useState } from "react";

const adImages = [
  {
    url: "https://m.media-amazon.com/images/G/31/img21/shoes/2025/Associates/Mar/Casual_Footwear/Associates_overall_theme-_central_2148x588.png",
    link: "https://amzn.to/4kxa8h0",
  },
  {
    url: "https://m.media-amazon.com/images/G/31/IMG15/Somya/associates/LA_Associates_2148X588_4mar.jpg",
    link: "https://amzn.to/3QP3Bkd",
  },
  {
    url: "https://m.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/Ethnicweekasso/Ethnicstore.jpeg",
    link: "https://amzn.to/3Dn1LUE",
  },
];

const AdSlider = () => {
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
      <div className=" mx-auto ">
        <div className="relative w-full h-auto transition-all duration-700 ease-in-out">
          {adImages.map((ad, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0 w-full"
              }`}
            >
              <a href={ad.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={ad.url}
                  alt={`Ad ${index + 1}`}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/150")
                  }
                  className="w-full rounded-md shadow-md object-cover"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdSlider;

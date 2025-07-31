"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { CheckSquare } from "lucide-react";

const ImgSlider = () => {
  return (
    <div className="w-[300px] mx-auto  ">
      <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden w-full sm:w-auto mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
          }}
          className="w-full"
        >
          <SwiperSlide>
            <img
              src="assets/image/adslide.png"
              alt="Ad 1"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="assets/image/adslider2.png"
              alt="Ad 2"
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="border border-green-500 rounded-lg p-4 mt-4 shadow-md bg-white text-center w-full sm:w-auto mx-auto">
        <div className="flex items-center justify-center text-green-700 font-semibold text-lg">
          <CheckSquare size={20} className="mr-2 text-green-600" /> Claimed
        </div>
        <p className="text-gray-700 mt-2 text-sm">
          If it belongs to someone else, please email{" "}
          <a href="mailto:claim@beezinfo.com" className="text-blue-600">
            claim@beezinfo.com
          </a>{" "}
          with proof to reclaim.
        </p>
      </div>
    </div>
  );
};

export default ImgSlider;

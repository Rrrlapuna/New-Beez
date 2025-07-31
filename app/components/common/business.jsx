"use client";
import React from "react";
import {
  Briefcase,
  Users,
  Eye,
  ClipboardList,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Explore Top Options in Your Area",
    description:
      "From top Business profiles in India to trusted local providers, we help you connect with the best in the business.",
    icon: <MapPin className="w-8 h-8 text-[#004274]" />,
  },
  {
    title: "Get Connected with Professionals",
    description:
      "Need more information? Get contact details for Business profiles in India and start your journey today.",
    icon: <Users className="w-8 h-8 text-[#004274]" />,
  },
  {
    title: "See Before You Choose",
    description:
      "Visuals matter! Browse through photos of Business profiles in India to get a glimpse of what to expect.",
    icon: <Eye className="w-8 h-8 text-[#004274]" />,
  },
  {
    title: "Comprehensive Service Listings",
    description:
      "Explore Business profiles in India to understand the range of options available.",
    icon: <ClipboardList className="w-8 h-8 text-[#004274]" />,
  },
  {
    title: "Trust the Best in Your Community",
    description:
      "Our platform provides verified information and customer insights to ensure reliable service connections.",
    icon: <ShieldCheck className="w-8 h-8 text-[#004274]" />,
  },
  {
    title: "Your Local Directory for Easy Access",
    description:
      "Quickly find the solutions you need. Compare, analyze, and choose with confidence!",
    icon: <Briefcase className="w-8 h-8 text-[#004274]" />,
  },
];

const BusinessHighlights = () => {
  return (
    <>
      <section class="bg-white py-4 px-4 text-center">
        <h2 class="text-base text-[#004274] font-semibold mb-3 underline">
          Best Related Keywords
        </h2>
        <p class="text-sm text-black leading-relaxed">
          <a href="#" class="text-black hover:text-sky-500">
            Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Business profiles near Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Top Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Best Business profiles near Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Contact details for Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Photos of Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Business profiles services in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Find trusted Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Local Business profiles directory in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Business profiles with Reviews in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Explore Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Discover Top Business profiles in Cuttack
          </a>{" "}
          ,
          <a href="#" class="text-black hover:text-sky-500">
            Browse Cuttack Business profiles Online
          </a>
        </p>
      </section>

      <section className="bg-white py-12 px-4 md:px-10">
        <div className="w-full mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#004274] mb-4">
            Finding the Best Business Profiles Near India
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Are you searching for Business profiles in India? We provide
            comprehensive info on top services. Discover how you can find the
            best profiles near India with ease and confidence.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 flex flex-col items-start gap-4"
              >
                <div className="bg-[#f0f7fb] p-3 rounded-full">{card.icon}</div>
                <h3 className="text-lg font-semibold text-[#004274]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-gray-700 text-base max-w-3xl mx-auto mt-10">
            Whether you're looking for top-rated providers or just exploring
            your options, our resources make it simple to discover the best
            Business profiles near India.
          </p>
        </div>
      </section>
    </>
  );
};

export default BusinessHighlights;

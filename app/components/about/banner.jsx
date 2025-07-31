"use client";
import React, { useEffect, useState } from "react";
import { FileText, Heart, Users, Smile } from "lucide-react";

const CounterCard = ({ icon, label, speed, displayValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + speed);
    }, 40);
    return () => clearInterval(timer);
  }, [speed]);

  return (
    <div className="bg-[#f5faff] rounded-xl shadow-lg p-6 flex flex-col items-center text-center w-full sm:w-[310px] hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 ease-in-out group">
      <div className="bg-indigo-50 rounded-full p-4 shadow-md mb-4 transition-all duration-300 ease-in-out group-hover:ring-4 group-hover:ring-blue-400">
        {icon}
      </div>
      <div className="text-gray-600 font-medium text-base">{label}</div>
      <div className="text-3xl font-extrabold text-[#004274] mt-1">
        {count.toLocaleString()}+
      </div>
      <div className="text-lg text-black font-semibold mt-1">{displayValue}</div>
    </div>
  );
};

const CounterSection = () => {
  const counters = [
    {
      icon: <FileText size={32} className="text-[#004274]" />,
      label: "Total Listings",
      speed: 179,
      displayValue: "1Crore +",
    },
    {
      icon: <Heart size={32} className="text-[#004274]" />,
      label: "Featured Listings",
      speed: 111,
      displayValue: "60L +",
    },
    {
      icon: <Users size={32} className="text-[#004274]" />,
      label: "Our Clients",
      speed: 88,
      displayValue: "30L +",
    },
    {
      icon: <Smile size={32} className="text-[#004274]" />,
      label: "Happy Customers",
      speed: 71,
      displayValue: "25L +",
    },
  ];

  return (
    <section
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('assets/image/bannerbg.jpg')",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
        {counters.map((item, index) => (
          <CounterCard
            key={index}
            icon={item.icon}
            label={item.label}
            speed={item.speed}
            displayValue={item.displayValue}
          />
        ))}
      </div>
    </section>
  );
};

export default CounterSection;

// components/RecentBlogs.tsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const recentBlogs = [
  {
    title: "BonV Aero: Revolutionizing Aerial Mobility with Cutting-Edge Drone Technology",
    description: "Transforming Logistics and Mobility with Self-Flying Drones...",
    date: "04-02-2025",
    image: "/assets/image/heroblog.png",
    link: "/blog/bonv-aero-drone-technology",
  },
  {
    title: "Utkarsh Odisha 2025 - Make in Odisha Conclave 2025: Driving Investments and Growth",
    description: "Transforming Odisha into a Global Investment Hub...",
    date: "14-01-2025",
    image: "/assets/image/blog1.png",
    link: "/blog/utkarsh-odisha-2025",
  },
  {
    title: "Spotly Raises Funding from Boostian Telecom to Transform the Entertainment Industry",
    description: "Revolutionizing Entertainment: Spotly Secures Boostian Funding...",
    date: "14-01-2025",
    image: "/assets/image/blog2.png",
    link: "/blog/spotly-boostian-funding",
  },
  {
    title: "The Rise, Fall, and Revitalization of Nokia : The Mobile Brand",
    description: "Nokia: A Story of Dominance, Decline, and Resilience...",
    date: "12-01-2025",
    image: "/assets/image/blog3.png",
    link: "/blog/nokia-brand-history",
  },
  {
    title: "Rediscover Wellness with The One Liner, Bhubaneswar, Odisha",
    description: "Explore a Holistic Journey to Wellness with The One Liner...",
    date: "11-01-2025",
    image: "/assets/image/blog4.png",
    link: "/blog/the-one-liner-wellness",
  },
];
const RecentBlogs = () => {
  return (
    <div className="w-full">
      <h2 className="text-[#004274] text-2xl font-semibold mb-6">Recent Blogs</h2>
      <div className="space-y-6">
        {recentBlogs.map((blog, index) => (
          <Link key={index} href={blog.link} className="block group">
            <div className="flex items-start gap-4">
              <div className="w-28 h-20 relative flex-shrink-0">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="min-w-0">
                <h5 className="text-[#004274] font-semibold leading-tight group-hover:underline">
                  {blog.title}
                </h5>
                <p className="text-sm text-gray-700 truncate">{blog.description}</p>
                <small className="bg-[#E0F0FF] text-[#004274] text-xs">{blog.date}</small>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default RecentBlogs;

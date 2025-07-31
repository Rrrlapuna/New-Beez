"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const relatedBlogs = [
  {
    id: 1,
    date: "2025-02-03",
    category: "Technology",
    title: "Zetawiz Technologies: The Future of Digital Solutions",
    description:
      "Zetawiz Technologies offers cutting-edge software services including web/mobile development, digital marketing, and more.",
    image: "/assets/image/blog1.png",
  },
  {
    id: 2,
    date: "2025-01-14",
    category: "Events",
    title: "Utkarsh Odisha 2025 – Make in Odisha Conclave",
    description:
      "The Utkarsh Odisha Conclave 2025 showcases Odisha’s vast potential across diverse sectors, promoting growth and innovation.",
    image: "/assets/image/blog2.png",
  },
  {
    id: 3,
    date: "2025-01-14",
    category: "Technology",
    title: "Spotly Raises Funding from Boostan Telecom",
    description:
      "Spotly, a platform connecting talent with opportunity, secures funding and plans major rollout for February 2025.",
    image: "/assets/image/blog3.png",
  },
  {
    id: 4,
    date: "2025-01-12",
    category: "Technology",
    title: "The Rise, Fall, and Revival of Nokia",
    description:
      "Nokia’s story is one of innovation, setbacks, and resurgence in the global mobile market.",
    image: "/assets/image/blog4.png",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
    },
  }),
};

const RelatedPosts = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#002B5B] mb-8">Related Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              className="bg-white rounded-sm border border-gray-100 shadow-sm hover:shadow-md transform hover:-translate-y-1 hover:scale-[1.015] transition-all duration-300 ease-in-out overflow-hidden"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Link href="/bizstory" className="block h-full">
                <div className="p-3 pb-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative w-full h-48 rounded-xl overflow-hidden"
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-xs"
                    />
                  </motion.div>
                </div>
                <div className="p-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                    <span className="bg-[#004274] text-white rounded-sm px-3 py-1 text-xs shadow-sm">
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </span>
                    <span className="bg-[#E0F0FF] text-[#004274] text-xs font-semibold rounded-sm px-3 py-1 shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                  <h3 className="text-md font-semibold text-[#003b73] hover:text-blue-800 transition">
                    {blog.title}
                  </h3>
                  <motion.p
                    className="text-sm text-gray-600 text-justify"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {blog.description}
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPosts;

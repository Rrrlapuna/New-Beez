"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FeaturedStory from "../components/common/hero";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Footerbar from "../components/common/footerbar";

const blogData = [
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
  {
    id: 5,
    date: "2025-01-13",
    category: "Health",
    title: "Rediscover Wellness with The One Liner",
    description:
      "Explore how next-gen AI tools are transforming industries, from healthcare to logistics and everyday life.",
    image: "/assets/image/blog5.png",
  },
  {
    id: 6,
    date: "2025-01-15",
    category: "Lifestyle",
    title: "Unveiling the Wonders of Travel",
    description:
      "India’s startup ecosystem continues to thrive, with new ventures reshaping the business landscape.",
    image: "/assets/image/blog6.png",
  },
  {
    id: 7,
    date: "2025-01-18",
    category: "Health",
    title: "Breaking Barriers to Parenthood",
    description:
      "From quantum computing to smart cities, explore the most exciting tech trends shaping the future.",
    image: "/assets/image/blog7.png",
  },
  {
    id: 8,
    date: "2025-01-20",
    category: "Co-working Space ",
    title: "Experience Growth and Collaboration ",
    description:
      "Small businesses are going digital faster than ever — here’s what it means for the future of MSMEs.",
    image: "/assets/image/blog8.png",
  },
  {
    id: 9,
    date: "2025-01-21",
    category: "Business",
    title: "R Dash and Associates",
    description:
      "Smart infrastructure is changing how cities operate, with IoT, AI, and data-driven governance.",
    image: "/assets/image/blog9.jpg",
  },
  {
    id: 10,
    date: "2025-01-25",
    category: "Business",
    title: "AapthyTech Solutions",
    description:
      "Explore the jobs of tomorrow — from AI ethics officers to quantum software engineers.",
    image: "/assets/image/blog10.png",
  },
  {
    id: 11,
    date: "2025-01-26",
    category: "Business",
    title: "Cohopers: Redefining Coworking Spaces ",
    description:
      "With growing digital threats, cybersecurity has become a top priority across sectors.",
    image: "/assets/image/blog11.png",
  },
  {
    id: 12,
    date: "2025-01-28",
    category: "Health",
    title: "Homso: A Success Story",
    description:
      "Online platforms and AI tutors are shaping a new age of digital education and personalized learning.",
    image: "/assets/image/blog12.png",
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

const BlogSection = () => {
  const blogsPerPage = 6;
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPaginationRange = () => {
    const totalNumbers = 5;
    let start = Math.max(1, currentPage - Math.floor(totalNumbers / 2));
    let end = start + totalNumbers - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - totalNumbers + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <Navbar />
      <FeaturedStory />
      <section className="w-full bg-white py-12 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold text-center text-[#002B5B] mb-10">
            Our Top Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentBlogs.map((blog, index) => (
              <motion.div
                key={index}
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
                    <h3 className="text-lg font-semibold text-[#003b73] hover:text-blue-800 transition">
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

          {/* Pagination */}
          <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 rounded-md border text-sm font-medium text-[#004274] bg-white border-gray-300 hover:bg-[#004274]/10"
              >
                Prev
              </button>
            )}

            {getPaginationRange().map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-[#004274] text-white"
                    : "bg-white text-[#004274] border-gray-300 hover:bg-[#004274]/10"
                }`}
              >
                {page}
              </button>
            ))}

            {currentPage < totalPages && (
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-4 py-2 rounded-md border text-sm font-medium text-[#004274] bg-white border-gray-300 hover:bg-[#004274]/10"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </section>
     
      <Footer />
      <Footerbar/>
    </>
  );
};

export default BlogSection;

"use client";
import React from "react";

const AboutUsSection = () => {
  return (
    <>
      <section className="bg-[#f9fafb] py-14 px-4 sm:px-6 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-2 hidden lg:block">
            <img
              src="https://media.istockphoto.com/id/1400739452/vector/about-us-web-header-design-icon-interconnected-symbol-of-company-profile-corporate.jpg?s=612x612&w=0&k=20&c=-zgp-xnEqh8zBEjNajlPZmDF5PXuqlXVUu7RjBf_UGU="
              alt="About Us Illustration"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#004274] mb-4 text-center lg:text-left">
              About Us
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed text-[15.5px]">
              At Beezinfo, we are dedicated to connecting businesses with
              customers through a reliable and user-friendly platform. Our
              comprehensive business directory simplifies the process of
              discovering and connecting businesses across various industries.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-[15.5px]">
              Our mission is to enhance business visibility, foster customer
              engagement, and drive economic growth. Through innovative
              technology and data integration, we aim to create a seamless
              experience for both businesses and consumers.
            </p>

            <ul className="space-y-3 text-[15px] mb-8">
              <li>
                <span className="font-semibold text-[#004274]">
                  ✔ Simplified Business Profiles:
                </span>{" "}
                Easily create and showcase your business offerings.
              </li>
              <li>
                <span className="font-semibold text-[#004274]">
                  ✔ Targeted Marketing Campaigns:
                </span>{" "}
                Reach your audience with custom marketing solutions.
              </li>
              <li>
                <span className="font-semibold text-[#004274]">
                  ✔ Partnerships with Associations:
                </span>{" "}
                Collaborate with local business associations for broader reach.
              </li>
              <li>
                <span className="font-semibold text-[#004274]">
                  ✔ Enhanced Business Visibility:
                </span>{" "}
                Leverage tech tools to boost business growth and visibility.
              </li>
            </ul>

            <div className="text-center lg:text-left">
              <button className="bg-[#004274] hover:bg-[#022f4f] text-white px-6 py-3 rounded-md text-sm font-medium transition duration-300 shadow-md">
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;

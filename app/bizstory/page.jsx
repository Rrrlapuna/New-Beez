import React from "react";
import RecentBlogs from "../components/common/blogcard";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import RelatedPosts from "../components/common/post";
import ListingsSection from "../main/newlisting";
import CityCarousel from "../components/common/caraousal";
import AdSlider from "../components/common/offer";
import Footerbar from "../components/common/footerbar";

export default function BlogDetails() {
  return (
    <>
      <Navbar />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-full lg:w-[66%] min-w-0">
              <div className="mb-4 text-sm text-gray-500 flex flex-col gap-1">
                <span className="text-[#004274] font-semibold">Technology</span>
                <span>03-02-2025</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-semibold text-[#004274] leading-snug mb-6">
                Zetawiz Technologies: The Ultimate Partner for Comprehensive
                Software Development Solutions
              </h1>

              <div className="text-center mb-8">
                <img
                  src="/assets/image/blog1.png"
                  alt="Zetawiz Blog"
                  className="w-full md:w-2/3 mx-auto rounded-xl shadow-lg"
                />
                <p className="mt-4 text-lg font-lg text-gray-600">
                  Transforming Digital Presence with Tailored Solutions
                </p>
              </div>

              <div className="text-black space-y-6 leading-relaxed">
                <p className="font-semibold text-lg text-[#004274]">
                  Transform Your Digital Presence with Zetawiz Technologies:
                  Comprehensive Solutions for Growth
                </p>
                <p>
                  In today’s digital-first world, every business needs a strong
                  online presence to thrive. Zetawiz Technologies, a leading
                  name in software development, understands the importance of
                  staying ahead in the constantly changing digital landscape...
                </p>

                <h2 className="text-2xl font-semibold text-[#004274]">
                  Core Services Offered by Zetawiz Technologies
                </h2>

                <div>
                  <h3 className="text-xl font-semibold text-[#004274]">
                    Web Development
                  </h3>
                  <p>
                    High-performance, responsive websites tailored to your
                    objectives...
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004274]">
                    Mobile App Development
                  </h3>
                  <p>
                    Intuitive, high-performance mobile apps for iOS and
                    Android...
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004274]">
                    Digital Marketing
                  </h3>
                  <p>
                    SEO, PPC, social media, and content marketing strategies...
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#004274]">
                    UI/UX Design
                  </h3>
                  <p>
                    Visually appealing, intuitive interfaces to enhance user
                    experiences...
                  </p>
                </div>

                <h2 className="text-2xl font-semibold text-[#004274]">
                  Why Choose Zetawiz Technologies?
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Tailored Solutions:</strong> Customized strategies
                    aligned to your goals.
                  </li>
                  <li>
                    <strong>Experienced Team:</strong> Skilled professionals
                    across industries.
                  </li>
                  <li>
                    <strong>End-to-End Services:</strong> Support from concept
                    to optimization.
                  </li>
                  <li>
                    <strong>Proven Success:</strong> Success across e-commerce,
                    healthcare, and more.
                  </li>
                  <li>
                    <strong>Customer-Centric:</strong> Focused on delivering
                    your vision effectively.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#004274]">
                  Impact and Success Stories
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Pandora Gift:</strong> Personalized e-commerce
                    platform.
                  </li>
                  <li>
                    <strong>SDET Unicorns:</strong> QA and automation platform.
                  </li>
                  <li>
                    <strong>Zerobeli:</strong> Healthy snack marketplace.
                  </li>
                  <li>
                    <strong>Pawrpose:</strong> Animal welfare digital solution.
                  </li>
                  <li>
                    <strong>Healiness:</strong> Therapy and wellness platform.
                  </li>
                </ul>

                <h2 className="text-2xl font-semibold text-[#004274]">
                  Ready to Transform Your Business?
                </h2>
                <p>
                  If you're looking to elevate your digital presence, Zetawiz is
                  ready to help.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[34%] min-w-0">
              <RecentBlogs />
            </div>
          </div>
        </div>
      </section>
      <RelatedPosts />
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <ListingsSection />
      </div>
      <CityCarousel />
      <AdSlider/>
      <Footer />
      <Footerbar/>
    </>
  );
}

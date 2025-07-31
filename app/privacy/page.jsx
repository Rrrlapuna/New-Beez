"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import AdSlider from "../components/common/offer";
import CityCarousel from "../components/common/caraousal";
import Footerbar from "../components/common/footerbar";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-10 px-3 md:px-10 bg-gray-100 text-black">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-4 md:p-10 space-y-8">
            <h1 className="text-3xl md:text-5xl font-semibold text-center text-[#004274]">
              Privacy Policy
            </h1>

            <div className="bg-gray-50 p-3 md:p-6 rounded-lg">
              <p className="text-base leading-relaxed text-justify">
                Beezinfo Techfusion Private Limited ("we," "us," "our," or "Beezinfo") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and share information about you when you visit our website, Beezinfo.com, or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-[#004274]">
                1. Information We Collect
              </h2>

              <div className="bg-gray-50 p-3 md:p-6 rounded-lg mb-4">
                <h3 className="text-lg font-medium text-[#004274] mb-2">1.1 Personal Data</h3>
                <ul className="space-y-2">
                  {[
                    "Name",
                    "Email address",
                    "Contact number",
                    "Payment details (for transactions)",
                    "Profile information (e.g., Google login)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="text-[#004274] w-5 h-5 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-3 md:p-6 rounded-lg mb-4">
                <h3 className="text-lg font-medium text-[#004274] mb-2">1.2 Automatically Collected Data</h3>
                <ul className="space-y-2">
                  {[
                    "IP address",
                    "Browser type",
                    "Device type",
                    "Operating system",
                    "Pages visited",
                    "Time spent on the site",
                    "Referring website",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="text-[#004274] w-5 h-5 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-3 md:p-6 rounded-lg">
                <h3 className="text-lg font-medium text-[#004274] mb-2">1.3 Cookies and Tracking Technologies</h3>
                <p className="text-justify">
                  We use cookies and similar tracking technologies to improve your experience, gather usage data, and personalize content. You can manage cookies in your browser settings.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-[#004274]">
                2. How We Use Your Information
              </h2>
              <div className="bg-gray-50 p-3 md:p-6 rounded-lg">
                <ul className="space-y-2">
                  {[
                    "To provide and maintain our website and services",
                    "To improve functionality and user experience",
                    "To process transactions and send notifications",
                    "To personalize content and recommendations",
                    "To respond to inquiries and send updates",
                    "To fulfill legal obligations",
                    "To allow third-party logins (e.g., Google)",
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <CheckCircle className="text-[#004274] w-5 h-5 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-[#004274]">
                3. How We Share Your Information
              </h2>
              <div className="bg-gray-50 p-3 md:p-6 rounded-lg space-y-4">
                {[
                  {
                    label: "Service Providers",
                    desc: "Trusted vendors for hosting, payments, etc.",
                  },
                  {
                    label: "Legal Compliance",
                    desc: "To comply with legal requirements or orders.",
                  },
                  {
                    label: "Business Transfers",
                    desc: "Data may be transferred in mergers/acquisitions.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <CheckCircle className="text-[#004274] w-5 h-5 mt-1" />
                    <span>
                      <strong>{item.label}:</strong> {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "4. How We Protect Your Data",
                content:
                  "We use industry-standard security to protect your personal data, though no system can guarantee complete security.",
              },
              {
                title: "5. Your Data Rights",
                list: [
                  "Access and correct your data",
                  "Request deletion (with exceptions)",
                  "Request a copy of your data",
                  "Object to data usage for marketing",
                ],
              },
              {
                title: "6. Google Account Access",
                content:
                  "You can manage or revoke your login access via the Google Account Permissions page anytime.",
              },
              {
                title: "7. Data Retention",
                content:
                  "Your data is retained only as long as necessary. It is deleted after account closure unless legally required.",
              },
              {
                title: "8. Third-Party Links",
                content:
                  "Our site may contain links to third-party sites. We are not responsible for their privacy practices.",
              },
              {
                title: "9. Children's Privacy",
                content:
                  "Beezinfo does not knowingly collect data from children under 13. Please contact us if you believe otherwise.",
              },
              {
                title: "10. Updates to This Policy",
                content:
                  "We may update this policy periodically. Please check this page for any updates.",
              },
              {
                title: "11. Contact Us",
                content: (
                  <>
                    If you have any questions, feel free to reach out via our{" "}
                    <a href="/contactus" className="text-blue-600 underline">
                      Contact Page
                    </a>
                    .
                  </>
                ),
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-semibold mb-3 text-[#004274]">
                  {section.title}
                </h2>
                <div className="bg-gray-50 p-3 md:p-6 rounded-lg">
                  {section.content && <p className="text-justify">{section.content}</p>}
                  {section.list && (
                    <ul className="space-y-2">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle className="text-[#004274] w-5 h-5 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AdSlider/>
      <CityCarousel/>
      <Footer />
      <Footerbar/>
    </>
  );
};

export default PrivacyPolicy;

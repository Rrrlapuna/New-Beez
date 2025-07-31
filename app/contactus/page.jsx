import { Mail, MapPin, Phone } from "lucide-react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import CityCarousel from "../components/common/caraousal";
import AdSlider from "../components/common/offer";
import Footerbar from "../components/common/footerbar";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="relative w-full h-[400px]">
        <img
          src="assets/image/contact2.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
          <h1 className="text-white text-6xl font-medium">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-[#004274] mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-800 mb-6">
            We'd love to hear from you! Reach out to us using the details below
            or fill out the contact form.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-2 text-black">
              <MapPin size={25} className="text-red-700" /> PLOT NO . N6/321,
              Block N6, IRC Village, Jayadev Vihar, Bhubaneswar, Odisha 751015
            </p>
            <p className="flex items-center gap-2 text-black cursor-pointer">
              <Phone size={18} className="text-[#004274]" /> 07316984799
            </p>
            <p className="flex items-center gap-2 text-black cursor-pointer">
              <Mail size={18} className="text-[#004274]" /> contact@beezinfo.com
            </p>
          </div>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-[#004274] mb-4">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004274]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004274]"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004274]"
            ></textarea>
            <button className="w-full bg-[#004274] text-white py-3 rounded-lg hover:bg-[#00315c]">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4842.510193268372!2d85.81965985052612!3d20.295633885925152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909b6a27a69af%3A0x56649cc264002f60!2sBeezinfo!5e0!3m2!1sen!2sin!4v1743073198563!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <CityCarousel />
      <AdSlider />
      <Footer />
      <Footerbar/>
    </>
  );
};

export default ContactUs;

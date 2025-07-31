import {
  Briefcase,
  User,
  BadgeCheck,
  Search,
  BarChart2,
  Settings,
  Sparkles,
  Phone,
  MessageSquareText,
  ChevronRight,
  Building2,
  MapPin,
} from "lucide-react";
const Sidebar = () => {
  return (
    <>
      <section>
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto">
          <h3 className="text-xl font-semibold text-[#004274] text-center mb-5">
            Why Choose Beezinfo
          </h3>

          <div className="flex flex-col gap-3 mb-6">
            <button className="bg-[#004274] text-white text-sm font-medium py-2 rounded-xl hover:bg-[#00395e] transition w-full flex items-center justify-center gap-2">
              <Briefcase size={16} /> For Business
            </button>
            <button className="border border-[#004274] text-[#004274] text-sm font-medium py-2 rounded-xl hover:bg-[#004274] hover:text-white transition w-full flex items-center justify-center gap-2">
              <User size={16} /> For Customer
            </button>
          </div>

          <ul className="space-y-4 text-sm text-gray-800">
            <li className="flex items-start gap-3">
              <BadgeCheck className="text-[#004274]" size={18} />
              <span>Free profiles forever</span>
            </li>
            <li className="flex items-start gap-3">
              <Search className="text-[#004274]" size={18} />
              <span>Reach local customers</span>
            </li>
            <li className="flex items-start gap-3">
              <BarChart2 className="text-[#004274]" size={18} />
              <span>Grow with reviews</span>
            </li>
            <li className="flex items-start gap-3">
              <Settings className="text-[#004274]" size={18} />
              <span>Easy profile management</span>
            </li>
            <li className="flex items-start gap-3">
              <Sparkles className="text-[#004274]" size={18} />
              <span>Occasion-based greetings</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <div className="bg-gray-100 rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto">
          <h3 className="text-lg font-semibold text-center text-gray-900 mb-5 leading-snug">
            Get Legal & Consulting <br /> businesses in your area
          </h3>

          <form className="flex flex-col gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004274]"
              />
            </div>
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#004274]"
              />
            </div>
            <div className="relative">
              <MessageSquareText
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />
              <textarea
                rows="3"
                placeholder="Your Requirement"
                className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-[#004274]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#004274] text-white text-sm font-bold py-2 rounded-xl hover:bg-[#00395e] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
      <section className="mt-8">
        <div className="bg-[#e0fcff] rounded-2xl shadow-md p-5 w-full max-w-sm mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Similar Categories
          </h3>
          <ul className="space-y-3 text-base text-gray-800">
            <li className="flex items-center gap-2">
              <ChevronRight className="text-gray-600" size={18} />
              <span>Company Registration</span>
            </li>
            <li className="flex items-center gap-2">
              <ChevronRight className="text-gray-600" size={18} />
              <span>GST and Tax Filing</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-8">
        <div className="bg-[#fde4ff] rounded-2xl shadow-md p-5 w-full max-w-sm mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            People Also Viewed
          </h3>

          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="bg-white p-3 rounded-xl shadow-sm space-y-1"
              >
                <div className="flex items-center gap-2 text-[#004274] font-semibold text-base">
                  <Building2 size={16} />
                  Assume Technologies
                </div>
                <div className="flex items-center text-sm text-gray-700 gap-1">
                  <MapPin size={14} />
                  Patia, Bhubaneswar
                </div>
                <div className="flex items-center text-sm text-gray-600 gap-1">
                  <BadgeCheck size={14} />
                  IT Service and Consulting
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

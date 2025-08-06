"use client";
import {
  Briefcase,
  Users,
  X,
  CreditCard,
  Phone,
  MessageCircle,
  Mail,
  MessageSquare,
  ChevronRight,
  Star,
} from "lucide-react";
import Dnavbar from "../components/common/dnavbar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Dnavbar />

      {/* Main Content */}
      <main className="pt-16 md:pt-20 pb-16 px-4 md:px-6">
        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
          {/* Welcome Card */}
          <div className="lg:col-span-5 bg-[#eff6ff] p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-[#004274]">
              Good Morning, Rashmi!
            </h2>
            <p className="text-gray-500 text-[14px] mb-4">
              14 New Companies Subscribed Today
            </p>
            <div className="flex space-x-3">
              <button className="bg-[#004274] text-white text-xs md:text-sm px-3 md:px-4 py-2 rounded hover:bg-[#00315a] transition">
                View Companies
              </button>
              <button className="border border-[#004274] text-[#004274] text-xs md:text-sm px-3 md:px-4 py-2 rounded hover:bg-[#eff6ff] transition">
                All Packages
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-4 gap-3">
            {/* Total Companies */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Briefcase className="w-5 h-5 text-[#004274] mb-2" />
              <p className="text-xl font-semibold text-[#004274]">987</p>
              <p className="text-[14px] text-gray-500 mb-2">Total Companies</p>

              <a
                href="#"
                className="text-xs text-[#004274] font-medium flex items-center hover:underline"
              >
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Active Companies */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <Users className="w-5 h-5 text-[#004274] mb-2" />
              <p className="text-xl font-semibold text-[#004274]">154</p>
              <p className="text-[14px] text-gray-500 mb-2">Active Companies</p>
              <a
                href="#"
                className="text-xs text-[#004274] font-medium flex items-center hover:underline"
              >
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Inactive Companies */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <X className="w-5 h-5 text-[#004274] mb-2" />
              <p className="text-xl font-semibold text-[#004274]">2</p>
              <p className="text-[14px] text-gray-500 mb-2">
                Inactive Companies
              </p>
              <a
                href="#"
                className="text-xs text-[#004274] font-medium flex items-center hover:underline"
              >
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Active Plans */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <CreditCard className="w-5 h-5 text-[#004274] mb-2" />
              <p className="text-xl font-semibold text-[#004274]">6</p>
              <p className="text-[14px] text-gray-500 mb-2">Active Plans</p>
              <a
                href="#"
                className="text-xs text-[#004274] font-medium flex items-center hover:underline"
              >
                View All <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Card Views  */}
        <div className="lg:hidden space-y-4 mb-6">
          {/* Recent Leads Mobile Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Recent Leads</h3>
              <a href="#" className="text-xs text-[#004274] flex items-center">
                See All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="border border-gray-100 rounded-lg p-3 mb-3">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-500">Date & Time</span>
                <span className="text-xs">29 April 2025 07:33</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-500">Name</span>
                <span className="text-xs">Rashmi Ranjan Rout</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-xs text-gray-500">Business</span>
                <span className="text-xs">Auto Repair</span>
              </div>
              <div className="flex justify-around border-t border-gray-100 pt-3">
                <a
                  href="tel:7077077547"
                  className="flex flex-col items-center text-xs"
                >
                  <Phone className="w-4 h-4 text-green-500 mb-1" />
                  <span>Call</span>
                </a>
                <a
                  href="https://wa.me/7077077547"
                  className="flex flex-col items-center text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 mb-1" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="mailto:rashmiranjana.rout2001@gmail.com"
                  className="flex flex-col items-center text-xs"
                >
                  <Mail className="w-4 h-4 text-blue-500 mb-1" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Recent Reviews Mobile Card */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium">Recent Reviews</h3>
              <a href="#" className="text-xs text-[#004274] flex items-center">
                See All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="border border-gray-100 rounded-lg p-3">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-500">Business</span>
                <span className="text-xs">Rout Automobiles</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-500">Name</span>
                <span className="text-xs">Rashmi Ranjan Rout</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-500">Rating</span>
                <span className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-3 h-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-xs text-gray-500">Comment</span>
                <span className="text-xs">Nice experience</span>
              </div>
              <div className="flex justify-center border-t border-gray-100 pt-3">
                <button className="flex flex-col items-center text-xs text-[#004274]">
                  <MessageSquare className="w-4 h-4 mb-1" />
                  <span>Respond</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Table Views  */}
        <div className="hidden lg:block space-y-6">
          {/* Recent Leads Table */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Recent Leads</h3>
              <a
                href="#"
                className="text-sm text-[#004274] flex items-center hover:underline"
              >
                See All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date & Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Business
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-[#eff6ff] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      29 April 2025 07:33
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Rashmi Ranjan Rout
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Auto Repair
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-4">
                        <a
                          href="tel:7077077547"
                          className="flex flex-col items-center text-xs"
                        >
                          <Phone className="w-4 h-4 text-green-500 mb-1" />
                          <span>Call</span>
                        </a>
                        <a
                          href="https://wa.me/7077077547"
                          className="flex flex-col items-center text-xs"
                        >
                          <MessageCircle className="w-4 h-4 text-green-400 mb-1" />
                          <span>WhatsApp</span>
                        </a>
                        <a
                          href="mailto:rashmiranjana.rout2001@gmail.com"
                          className="flex flex-col items-center text-xs"
                        >
                          <Mail className="w-4 h-4 text-blue-500 mb-1" />
                          <span>Email</span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Reviews Table */}
          <div className="bg-white p-5 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Recent Reviews</h3>
              <a
                href="#"
                className="text-sm text-[#004274] flex items-center hover:underline"
              >
                See All <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Business
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Rating
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Comment
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-[#eff6ff] transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Rout Automobiles
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Rashmi Ranjan Rout
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      Nice experience
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button className="flex flex-col items-center text-xs text-[#004274]">
                        <MessageSquare className="w-4 h-4 mb-1" />
                        <span>Respond</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { List, Star, FileText, Send } from 'lucide-react';
import Dsidebar from '../components/common/dsidebar';
import Dnavbar from '../components/common/dnavbar';

const reviews = [
  { name: 'Charandeep Sastry', title: 'Listing Title Here', date: '8 June 2020', rating: 5 },
  { name: 'Winona Jaskolski', title: 'Office Listing Here', date: '12 June 2020', rating: 5 },
  { name: 'Jewell Bailey', title: 'Listing Title Here', date: '30 June 2020', rating: 5 },
];

const quotes = [
  { name: 'Nishtha Rama', email: 'nishtharama@gmail.com', date: '12 June 2020', phone: '010 59303753' },
  { name: 'Lata Ajeet Dial', email: 'lataajeetdial@gmail.com', date: '23 June 2020', phone: '010 59303850' },
  { name: 'Akhil Mahadeo', email: 'akhilmahadeo@gmail.com', date: '28 June 2020', phone: '010 59303753' },
];

const Dashboard = () => {
  return (
    <>
      <Dnavbar />
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Dsidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12 text-gray-700">
          <h1 className="text-xl sm:text-3xl font-semibold text-[#004274]">Dashboard</h1>
          <p className="mb-6 text-sm sm:text-base">
            In commodo lorem ut erat sagittis variusm euismod lectus vehicula cursus est.
          </p>

          {/* Grid Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ title: 'Listings', value: '12', Icon: List }, { title: 'Reviews', value: '5', Icon: Star }, { title: 'Request Quote', value: '23', Icon: FileText }, { title: 'Listing Active Plan', value: 'Free', Icon: Send }].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md flex justify-between items-center">
                <div>
                  <h3 className="text-sm sm:text-base">{item.title}</h3>
                  <p className="text-xl font-bold">{item.value}</p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center ml-4 sm:ml-0">
                  <item.Icon className="text-[#004274] w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>
            ))}
          </div>

          {/* Reviews Section */}
          <div className="bg-white p-4 sm:p-6 rounded-md shadow-md mt-6">
            <h3 className="font-bold text-base sm:text-lg mb-4">Recent Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center py-2 border-b border-gray-200 gap-2">
                  <div className="flex items-center space-x-3 w-full sm:w-1/3">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="font-medium text-gray-800 text-sm sm:text-base">{review.name}</span>
                  </div>
                  <div className="w-full sm:w-1/3 text-sm text-gray-700 truncate">{review.title}</div>
                  <div className="w-full sm:w-1/3 text-sm text-gray-600 sm:text-right">
                    {review.date}
                    <span className="text-yellow-500 ml-2">{'★'.repeat(review.rating)}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-[#004274] text-white rounded-md hover:bg-blue-700 text-sm">
              See All Reviews
            </button>
          </div>

          {/* Request Quote Section */}
          <div className="bg-white p-4 sm:p-6 rounded-md shadow-md mt-6">
            <h3 className="font-bold text-base sm:text-lg mb-4">Recent Request Quote</h3>
            <div className="space-y-4">
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 py-2 border-b border-gray-200 text-sm"
                >
                  <div className="w-full sm:w-1/4 font-medium">{quote.name}</div>
                  <div className="w-full sm:w-1/3 text-gray-600">{quote.email}</div>
                  <div className="w-full sm:w-1/4 text-gray-500">{quote.date}</div>
                  <div className="w-full sm:w-1/5 text-gray-700">{quote.phone}</div>
                </div>
              ))}
            </div>
            <button className="mt-4 px-4 py-2 bg-[#004274] text-white rounded-md hover:bg-blue-700 text-sm">
              See Quotes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

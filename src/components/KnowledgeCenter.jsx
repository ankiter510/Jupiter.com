import React from "react";
import image1 from "../slideImages/hands.webp";
import image2 from "../slideImages/news1.jpeg";
import image3 from "../slideImages/news2.webp";
import image4 from "../slideImages/news3.jpg";

const KnowledgeCenter = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
          Knowledge Center
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Latest Blogs */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              Latest Blogs
            </h3>
            <div className="mt-4 flex flex-col sm:flex-row items-start bg-white shadow rounded-lg p-4">
              <img
                src={image1}
                alt="Blog Thumbnail"
                className="w-full sm:w-32 sm:h-32 rounded-md object-cover bg-blue-100"
              />
              <div className="ml-0 sm:ml-4 mt-4 sm:mt-0 flex-1">
                <h4 className="text-md sm:text-lg font-semibold text-gray-800">
                  Heart health 101: All About Broken Heart Syndrome
                </h4>
                <p className="text-sm text-orange-500">Blog</p>
                <p className="text-sm text-gray-500 mb-2">Nov 29, 2023</p>
                <p className="text-sm text-gray-700 truncate">
                  Can stress and sadness really break your heart? Well,<br /> the
                  answer is yes. Stress cardiomyopathy or ta
                </p>
                <a
                  href="#"
                  className="mt-2 inline-block text-blue-500 font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          {/* News & Events */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
              News & Events
            </h3>
            <div className="mt-4 space-y-4">
              {[image2, image3, image4].map((image, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white shadow rounded-lg p-3"
                >
                  <img
                    src={image}
                    alt={`News Thumbnail ${index + 1}`}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover bg-green-100"
                  />
                  <div className="ml-3 flex-1">
                    <h4 className="text-sm sm:text-base font-medium text-gray-800">
                      {index === 0
                        ? "Jupiter Hospital, Pune Launches #Notjustanumber campaign"
                        : index === 1
                        ? "Patient feedback is the most important factor that will take healthcare and hospitals to the next level..."
                        : "7-year-old girl with rare congenital disease undergoes whole liver transplant in Pune"}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-500 mt-1">
                      {index === 0 ? "May 09, 2024" : "Jan 19, 2023"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCenter;

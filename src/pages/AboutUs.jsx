import React from "react";
import image from '../slideImages/slide4.webp';
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <div className="px-4 md:px-16 py-8 overflow-hidden">
      <nav className="text-sm text-gray-600 mb-4">
        <ul className="flex space-x-2">
          <li><a href="/" className="hover:text-blue-500">Home</a></li>
          <li>/</li>
          <li><a href="/pune" className="hover:text-blue-500">Pune</a></li>
          <li>/</li>
          <li><a href="/about" className="hover:text-blue-500">About</a></li>
          <li>/</li>
          <li className="text-blue-500 font-semibold">Overview</li>
        </ul>
      </nav>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900">Quality care for end-to-end treatment</h1>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <button className="text-sm px-4 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white focus:outline-none">Overview</button>
          <button className="text-sm px-4 py-2 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white focus:outline-none">Leadership</button>
          <button className="text-sm px-4 py-2 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white focus:outline-none">Awards & Accolades</button>
          <button className="text-sm px-4 py-2 rounded-full border border-gray-400 text-gray-600 hover:bg-gray-400 hover:text-white focus:outline-none">Infrastructure</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div className="lg:w-1/2 space-y-6">
          <p className="text-gray-700 text-base">
            Established in 2007, Jupiter Hospital is a tertiary and quaternary healthcare hospital that lays its foundation on a ‘Patient first’ ideology. 
            Our hospitals in Thane and Pune follow a Greenfield strategy for catering end-to-end healthcare needs of our patients. The first Jupiter hospital is 
            situated in the vicinity of the arterial Eastern Express Highway in Thane, and offers easy connectivity and accessibility to patients from across Thane.
          </p>
          <p className="text-gray-700 text-base">
            Going beyond the city, Jupiter Hospital extended its services to the city of Pune in 2017. And now the multi-specialty tertiary and quaternary care hospital 
            is present in Indore, Madhya Pradesh too, with Vishesh Jupiter Hospital established in 2020.
          </p>
          <div className="text-blue-900 font-bold text-lg">
            1100+
          </div>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-12">
          <img
            src={image}
            alt="Hospital Equipment"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

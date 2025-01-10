import React, { useState, useEffect } from "react";
import slideImage1 from "../slideImages/slide1.webp";
import slideImage2 from "../slideImages/slide2.webp";
import slideImage3 from "../slideImages/slide3.jpeg";
import slideImage4 from "../slideImages/slide4.webp";

function SlideShow() {
  const slides = [slideImage1, slideImage2, slideImage3, slideImage4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mt-40">
      {/* Slider */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0"
              style={{
                height: "600px",
                backgroundImage: `url(${slide})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Fixed White Container */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 flex items-center space-x-4">
        {/* Location Input */}
        <div className="flex-1">
          <label htmlFor="location" className="block text-gray-600 text-sm mb-1">
            Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Enter location"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Select Specialty Dropdown */}
        <div className="flex-1">
          <label htmlFor="specialty" className="block text-gray-600 text-sm mb-1">
            Select Specialty
          </label>
          <select
            id="specialty"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose Specialty</option>
            <option value="cardiology">Cardiology</option>
            <option value="dermatology">Dermatology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <span className="mr-2">Find a Doctor</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16l4-4m0 0l4-4m-4 4v12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-full shadow-md hover:bg-opacity-100"
        onClick={goToPreviousSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 p-4 rounded-full shadow-md hover:bg-opacity-100"
        onClick={goToNextSlide}
      >
        ❯
      </button>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default SlideShow;

import React from 'react';
import image from '../doctors/mom1.jpg';
const HealthCheckUp = () => {
  return (
    <div className="px-4 py-8 md:px-16">
      <div className="text-sm text-gray-500">
        Home &mdash; <span className="text-blue-500">Health Checkup</span>
      </div>
      <div className="mt-6">
        <div className="rounded-lg overflow-hidden bg-cover bg-center h-60 relative" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-2xl md:text-4xl font-bold">Health Checkup</h1>
              <p className="mt-2 text-sm md:text-base">At Jupiter Hospital, we promise good health, recovery and lifetime of care</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {["Regular", "Premium", "Senior Citizen (only >58 yrs)"].map((plan, index) => (
          <div key={index} className="border rounded-lg shadow-sm p-4 bg-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-500 text-xl">👤</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{plan}</h3>
                <p className="text-sm text-gray-500 flex items-center">📍 Pune</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Book Now</button>
              <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100">Know More</button>
            </div>
            <div className="mt-4">
              <label className="flex items-center space-x-2 text-sm">
                <input type="checkbox" className="rounded text-blue-500" />
                <span>Select up to 4 to compare</span>
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckUp;

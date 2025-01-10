import React from 'react';
import d1 from '../doctors/male1.jpeg';
import d2 from '../doctors/male2.jpg';
import d3 from '../doctors/male3.webp';
import Footer from '../components/Footer';
const SurgerySpecialists = () => {
  const doctors = [
    {
      name: 'Dr. John Doe',
      specialization: 'Cardiac Surgeon',
      photo:d1,
    },
    {
      name: 'Dr. Jane Smith',
      specialization: 'Neurosurgeon',
      photo:d2,
    },
    {
      name: 'Dr. Emily Brown',
      specialization: 'Orthopedic Surgeon',
      photo:d3,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Surgery Specialists</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our team of highly skilled surgeons is dedicated to providing top-quality care and expertise
            in various surgical specialties. From cardiac surgery to orthopedics, we ensure the best
            outcomes for our patients.
          </p>
        </div>
        <div className="md:w-1/2 flex flex-wrap justify-center gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-4 text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <img
                src={doctor.photo}
                alt={doctor.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{doctor.name}</h3>
              <p className="text-sm text-gray-500">{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SurgerySpecialists;

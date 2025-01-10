import React, { useState } from "react";
import doctor1 from '../doctors/male1.jpeg';
import doctor2 from '../doctors/female1.png';
import doctor3 from '../doctors/male2.jpg';
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const doctors = [
  {
    name: "Dr Sahil Kiran Pethe",
    speciality: "Urology",
    designation: "Consultant - Urology",
    location: "Pune",
    image: doctor1,
    qualifications: "MBBS, MS (Urology)",
    experience: "8+ years of experience",
    additionalInfo: "Expert in minimally invasive urology surgeries.",
  },
  {
    name: "Dr Abhijeet Benare",
    speciality: "Cardiology",
    designation: "Consultant - Cardiology",
    location: "Pune",
    image: doctor3,
    qualifications: "MBBS, MD (Cardiology)",
    experience: "10+ years of experience",
    additionalInfo: "Specialized in cardiovascular health and heart surgeries.",
  },
  {
    name: "Dr Sneha Sharma",
    speciality: "Neurology",
    designation: "Consultant - Neurology",
    location: "Pune",
    image: doctor2,
    qualifications: "MBBS, MD (Neurology)",
    experience: "5+ years of experience",
    additionalInfo: "Expert in treating brain and spinal cord disorders.",
  },
];

const FindingDoctors = () => {
  const [selectedCity, setSelectedCity] = useState("Pune");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedDoctorDetails, setSelectedDoctorDetails] = useState(null);

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (!selectedSpeciality || doctor.speciality === selectedSpeciality) &&
      (!selectedDoctor || doctor.name === selectedDoctor)
  );

  const specialities = [...new Set(doctors.map((doctor) => doctor.speciality))];
  const doctorNames = [...new Set(doctors.map((doctor) => doctor.name))];

  const handleViewProfile = (doctor) => {
    setSelectedDoctorDetails(doctor);
  };

  const closeModal = () => {
    setSelectedDoctorDetails(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-blue-500 text-black p-6 rounded-lg text-center">
        <h1 className="text-3xl font-bold">Find a Doctor</h1>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <select
            className="p-2 border rounded-md"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="Pune">Pune</option>
          </select>
          <select
            className="p-2 border rounded-md"
            value={selectedSpeciality}
            onChange={(e) => setSelectedSpeciality(e.target.value)}
          >
            <option value="">Select Speciality</option>
            {specialities.map((speciality) => (
              <option key={speciality} value={speciality}>
                {speciality}
              </option>
            ))}
          </select>
          <select
            className="p-2 border rounded-md"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select Doctor</option>
            {doctorNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.name}
            className="flex flex-col items-center p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
          >
            <img
              src={doctor.image}
              alt={doctor.name}
              className="w-24 h-24 rounded-full mb-4"
            />
            <div className="text-center">
              <h2 className="text-xl font-bold">{doctor.name}</h2>
              <p className="text-sm text-gray-600">{doctor.speciality}</p>
              <p className="text-sm text-gray-500">{doctor.designation}</p>
              <p className="text-gray-500">{doctor.location}</p>
              <div className="mt-4 flex gap-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  onClick={() => handleViewProfile(doctor)}
                >
                  View Profile
                </button>
                <Link to='/book-appintment'>
                <button className="px-4 py-2 bg-blue-100 text-black rounded-md hover:bg-blue-500">
                  Book an Appointment
                </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedDoctorDetails && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedDoctorDetails.name}</h2>
            <img
              src={selectedDoctorDetails.image}
              alt={selectedDoctorDetails.name}
              className="w-24 h-24 rounded-full mb-4 mx-auto"
            />
            <p className="text-xl font-semibold">{selectedDoctorDetails.speciality}</p>
            <p className="text-md text-gray-700 mt-2">Designation: {selectedDoctorDetails.designation}</p>
            <p className="text-md text-gray-700">Location: {selectedDoctorDetails.location}</p>
            <p className="mt-4 font-medium text-gray-700">{selectedDoctorDetails.qualifications}</p>
            <p className="text-md text-gray-700 mt-2">{selectedDoctorDetails.experience}</p>
            <p className="text-md text-gray-700 mt-2">{selectedDoctorDetails.additionalInfo}</p>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default FindingDoctors;

import React from 'react';
import jupiter from '../icons/jupiter2.jpeg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import image1 from '../creditsIcons/award1.webp';
import image2 from '../creditsIcons/award2.webp';
import image3 from '../creditsIcons/award3.jpeg';
import CommonComponent from '../pages/CommonComponent';

function Footer() {
  return (
    <div className="bg-blue-800 overflow-hidden text-white">
      <CommonComponent />

      <div className="flex justify-start p-6">
        <img src={jupiter} alt="jupiter" className="w-32 h-32 object-contain" />
      </div>

      <hr className="border-white" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 px-6 py-4">
        <div className="flex flex-col items-start">
          <h1 className="text-blue-500 font-extrabold pb-3">SPECIALITY</h1>
          <ul className="space-y-2">
            <li className="hover:text-orange-600">Bariatric Surgery</li>
            <li className="hover:text-orange-600">Breast Care Center</li>
            <li className="hover:text-orange-600">Cardiac Surgery</li>
            <li className="hover:text-orange-600">Cardiology</li>
            <li className="hover:text-orange-600">Chest Medicine</li>
            <li className="hover:text-orange-600 underline"><a href="./">View All</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-blue-500 font-extrabold pb-3">ABOUT</h1>
          <ul className="space-y-2">
            <li className="hover:text-orange-600">Overview</li>
            <li className="hover:text-orange-600">Leadership</li>
            <li className="hover:text-orange-600">Awards & Accolades</li>
            <li className="hover:text-orange-600">Infrastructure</li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-blue-500 font-extrabold pb-3">APPOINTMENT</h1>
          <ul className="space-y-2">
            <li className="hover:text-orange-600">Find a Doctor</li>
            <li className="hover:text-orange-600">Health Checkup Plan</li>
          </ul>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-blue-500 font-extrabold pb-3">FOLLOW</h1>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaLinkedin size={20} className="text-orange-600" />
              <a href="https://www.linkedin.com/company/jupiter-hospital/" className="hover:underline">LinkedIn</a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube size={20} className="text-orange-600" />
              <a href="https://www.youtube.com/c/JupiterHospitalOfficial" className="hover:underline">YouTube</a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram size={20} className="text-orange-600" />
              <a href="https://www.instagram.com/jupiterhospital/" className="hover:underline">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter size={20} className="text-orange-600" />
              <a href="https://x.com/JupiterLifeline" className="hover:underline">Twitter</a>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebook size={20} className="text-orange-600" />
              <a href="https://www.facebook.com/JupiterHospitalOfficial/" className="hover:underline">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-blue-500 font-extrabold pb-3">GALLERY</h1>
          <ul className="space-y-2">
            <li className="hover:text-orange-600">International Patients</li>
            <li className="hover:text-orange-600">Careers</li>
            <li className="hover:text-orange-600">Contact</li>
            <li className="hover:text-orange-600">Jupiter Foundation</li>
            <li className="hover:text-orange-600">Newsletter</li>
            <li className="hover:text-orange-600">Academic Programs</li>
            <li className="hover:text-orange-600">Investor Relations</li>
          </ul>
        </div>

        <div className="flex flex-col items-start">
          <h1 className="text-blue-500 font-extrabold pb-3">LOCATIONS</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt size={20} className="text-orange-600" />
              <span>Thane</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt size={20} className="text-orange-600" />
              <span>Pune</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt size={20} className="text-orange-600" />
              <span>Indore</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-white" />

      <div className="flex flex-wrap justify-between items-center p-4 text-sm">
        <p>© 2024 Jupiter. All Rights Reserved</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="underline hover:text-orange-600">ODR Portal Link</a></li>
          <li><a href="#" className="underline hover:text-orange-600">Privacy Policy</a></li>
          <li><a href="#" className="underline hover:text-orange-600">Compliance</a></li>
          <li><a href="#" className="underline hover:text-orange-600">Administration Policies</a></li>
          <li><a href="#" className="underline hover:text-orange-600">Patient Policies</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;

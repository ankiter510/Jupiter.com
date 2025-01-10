import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaUser, FaEye, FaChevronDown, FaFont, FaSun, FaSearch, FaBars, FaCalendarAlt, FaUserMd, FaHeart } from 'react-icons/fa';
import jupiter from '../icons/jupitericon.jpeg';
import { Link } from 'react-router-dom';
import Chatbot from './Chatbot'; // Import the Chatbot component

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isEyeDropdownOpen, setIsEyeDropdownOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleEyeDropdown = () => {
    setIsEyeDropdownOpen(!isEyeDropdownOpen);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setIsDropdownOpen(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsEyeDropdownOpen(false);
  };

  const handleMouseEnter = (item) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setHoveredItem(null);
    }, 300); 
    setTimeoutId(id);
  };

  return (
    <div className="bg-slate-200 h-16 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-end items-center px-4 py-2 max-w-screen-lg mx-auto space-x-4">
        {/* ... Other Navbar content ... */}
      </div>

      <div className="bg-white">
        <div className="flex items-center justify-between">
          <Link to='/'>
            <img src={jupiter} alt="Jupiter Icon" className="w-24 h-24 ml-5" />
          </Link>

          <div className="flex flex-grow justify-center">
            <ul className="list-none flex space-x-8">
              <Link to='/'>
                <li className="text-black hover:text-orange-500">HOME</li>
              </Link>

              <li className="text-black hover:text-orange-500 relative" onMouseEnter={() => setHoveredItem('about')} onMouseLeave={() => setHoveredItem(null)}>
                ABOUT
                {hoveredItem === 'about' && (
                  <div className="absolute top-full left-0 bg-white shadow-lg rounded-md w-40 p-2" onMouseEnter={() => setHoveredItem('about')} onMouseLeave={() => setHoveredItem(null)}>
                    <ul className="space-y-2">
                      <li className="text-blue-600 hover:text-orange-500 cursor-pointer">
                        <Link to="/contact-us">Contact Us</Link>
                      </li>
                      <li className="text-blue-600 hover:text-orange-500 cursor-pointer">
                        <Link to='/about-us'>About Us</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>

              <Link to='/finding-doctor'>
                <li>
                  <FaSearch size={20} className="text-blue-500" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Chatbot bar, positioned at the bottom-right of the screen */}
      <Chatbot />
    </div>
  );
}

export default Navbar;

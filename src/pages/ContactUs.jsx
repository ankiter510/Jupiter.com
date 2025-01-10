import React, { useState } from 'react';
import Footer from '../components/Footer';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); // Mark the form as submitted
    setFormData({ name: '', email: '', message: '' }); // Reset form data
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10">Contact</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {[
          {
            location: 'Thane',
            address: 'Eastern Express Highway, Service Rd, Next To Viviana Mall, Thane, Maharashtra - 400601',
            phone: ['+91-22 6297 5555', '+91-22 2172 5650'],
            email: 'info@jupiterhospital.com'
          },
          {
            location: 'Pune',
            address: 'Near Prathamesh Park, Baner, Pimple Nilakh Road, Pune, Maharashtra - 411045',
            phone: ['+91-20 2799 2799', '+91-20 6637 5555'],
            email: 'enquiry.pune@jupiterhospital.com'
          },
          {
            location: 'Indore',
            address: 'Scheme No. 94, Sector 1, Ring Road, Near Teen Imli Square, Indore, Madhya Pradesh - 452020',
            phone: ['+91-73 1471 8111'],
            email: 'enquiry.indore@jupiterhospital.com'
          }
        ].map((contact, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">{contact.location}</h2>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Address:</span> {contact.address}</p>
            <p className="text-gray-700 mb-2"><span className="font-semibold">Phone:</span> {contact.phone.join(' ')}</p>
            <p className="text-gray-700"><span className="font-semibold">Email:</span> {contact.email}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">View Map</button>
          </div>
        ))}
      </div>
      <div className="mt-10 max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        {!formSubmitted ? (
          <>
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Send Your Query</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-600 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-600 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-lg py-3 font-medium hover:bg-blue-600 transition"
              >
                Submit
              </button>
            </form>
          </>
        ) : (
          <p className="text-green-500 text-center text-xl font-medium">Your query has been submitted successfully!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;

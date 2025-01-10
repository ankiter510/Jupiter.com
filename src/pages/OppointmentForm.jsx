import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { MdPayment } from 'react-icons/md';
import PaytmLogo from '../icons/Paytm.svg';
import { SiGooglepay } from 'react-icons/si';
const stripePromise = loadStripe('your-publishable-key-here');

function PaymentForm({ onPaymentSuccess }) {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentMethod, setPaymentMethod] = useState('card'); 

  const handlePayment = async (e) => {
    e.preventDefault();

    if (paymentMethod === 'card') {
      if (!stripe || !elements) return;

      const card = elements.getElement(CardElement);
      if (!card) {
        alert('Please enter your card details.');
        return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        alert(`Payment failed: ${error.message}`);
        console.error(error);
      } else {
        console.log('Card Payment successful:', paymentMethod);
        onPaymentSuccess();
      }
    } else {
      alert(`Payment successful using ${paymentMethod}!`);
      onPaymentSuccess();
    }
  };

  return (
    <form onSubmit={handlePayment} className="mt-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Payment Method</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="border p-2 rounded w-full mt-2"
        >
          <option value="card">Credit/Debit Card</option>
          <option value="phonepe">PhonePe<MdPayment size={40} color="purple" /></option>
          <option value="paytm">Paytm<img src={PaytmLogo} alt="Paytm" style={{ width: '40px' }} /></option>
          <option value="googlepay">Google Pay <SiGooglepay size={40} color="#4285F4" /></option>
        </select>
      </div>

      {paymentMethod === 'card' ? (
        <div className="mb-4">
          <CardElement className="border p-2 rounded" />
        </div>
      
      ) : (
        <p className="mb-4 text-gray-700">
          After clicking Pay Now, you'll be redirected to {paymentMethod} for payment.
        </p>
      )}

      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full"
        disabled={paymentMethod === 'card' && !stripe}
      >
        Pay Now
      </button>
    </form>
  );
}

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    appointmentDate: '',
    gender: '',
    city: 'Pune',
    speciality: '',
    doctor: '',
    country: 'India',
    query: '',
    answer: '',
    file: null,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPaymentRequired, setIsPaymentRequired] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email || !formData.appointmentDate) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Form submitted:', formData);
    setIsPaymentRequired(true); 
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg pt-16">
      {!isSubmitted ? (
        <>
          {!isPaymentRequired ? (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  value={formData.phone}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <input
                  type="date"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Thane</option>
                  <option value="Delhi">Indore</option>
                </select>
                <select
                  name="speciality"
                  value={formData.speciality}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select Speciality</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                </select>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  className="border p-2 rounded"
                  required
                >
                  <option value="">Select Doctor</option>
                  <option value="Dr. Smith">Dr. Smith</option>
                  <option value="Dr. Patel">Dr. Patel</option>
                </select>
              </div>
              <textarea
                name="query"
                placeholder="Your Query"
                value={formData.query}
                onChange={handleChange}
                className="border p-2 rounded w-full mt-4"
              ></textarea>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Report (jpg, jpeg, pdf - Max size: 10 MB)
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="mt-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  What is 6 × 3?
                </label>
                <input
                  type="text"
                  name="answer"
                  placeholder="Answer"
                  value={formData.answer}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
              >
                Proceed to Payment
              </button>
            </form>
          ) : (
            <Elements stripe={stripePromise}>
              <PaymentForm onPaymentSuccess={() => setIsSubmitted(true)} />
            </Elements>
          )}
        </>
      ) : (
        <div className="text-center">
          <h2 className="text-green-600 text-2xl font-bold">✅ Appointment Confirmed!</h2>
          <p className="text-gray-700 mt-4">Thank you for booking an appointment. We will contact you soon.</p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Book Another Appointment
          </button>
        </div>
      )}
    </div>
  );
}

export default AppointmentForm;

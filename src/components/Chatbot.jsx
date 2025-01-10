import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const responses = {
    "hello": "Hi, how can I assist you today?",
    "hours of operation": "Our hospital is open 24/7.",
    "location": "We are located at 123 Main Street, Bangalore.",
    "contact number": "You can reach us at +1800 1234 5678.",
    "emergency services": "We provide emergency services 24/7. Please call our emergency line at +1800 1234 5678.",
    "appointment": "You can book an appointment through our website or by calling our reception.",
    "available doctors": "We have a wide range of specialists available. Can you specify the department you're interested in?",
    "insurance accepted": "We accept most major insurance providers. Please contact our billing department for more details.",
    "parking": "We have a parking facility available for patients and visitors.",
    "visiting hours": "Visiting hours are from 10:00 AM to 6:00 PM.",
    "hospital facilities": "We offer a variety of facilities including ICU, operation theaters, outpatient services, and more.",
    "ambulance service": "Our ambulance service is available 24/7. Please call +1 800 123 4567 for assistance.",
    "medical records": "You can request your medical records at the reception or via our patient portal.",
    "patient rooms": "Our patient rooms are equipped with modern amenities to ensure comfort and care.",
    "meal options": "We provide a variety of meal options for patients, catering to their specific dietary needs.",
    "hospital policies": "You can find our hospital policies on our website or by contacting our reception.",
    "waiting times": "The waiting times vary depending on the department and time of day. We strive to minimize wait times.",
    "insurance coverage": "Please contact our billing department to check the details of your insurance coverage.",
    "lab results": "You can access your lab results through our patient portal or contact the lab department.",
    "post-discharge care": "We offer post-discharge care services including home visits and follow-up calls.",
    "doctor availability": "Doctors are available based on their schedules. Please check the schedule online or call the reception.",
    "payment methods": "We accept payments via credit cards, cash, and bank transfers.",
    "hospital reviews": "You can read reviews on our website or third-party review platforms like Google and Yelp.",
    "feedback": "We value your feedback. Please fill out our feedback form available at the reception or online.",
    "appointments for children": "We have pediatric specialists available for children's health. You can book an appointment through our website or call our reception.",
    "covid-19 safety measures": "We are following strict COVID-19 safety protocols. Masks are required, and social distancing measures are in place.",
    "referral process": "If you need a referral, please contact our reception or ask your primary care physician."
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');

      // Respond based on the predefined questions
      const userInput = input.toLowerCase();
      const botResponse = responses[userInput] || "Sorry, I didn't understand that. Can you please rephrase?";

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botResponse, user: 'bot' },
      ]);
    }
  };

  return (
    <div className="w-64 bg-white shadow-lg rounded-lg p-4 fixed right-4 bottom-4 z-50">
      <div className="text-xl font-semibold mb-2">Chat with us</div>
      <div className="space-y-4 h-80 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`text-sm ${msg.user === 'user' ? 'text-blue-500' : 'text-gray-700'}`}>
            <strong>{msg.user === 'user' ? 'You: ' : 'Bot: '}</strong>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md p-2 mr-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-md p-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

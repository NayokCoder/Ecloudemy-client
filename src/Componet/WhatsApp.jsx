import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "8801533468515"; // এখানে আপনার WhatsApp নাম্বার দিন

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* WhatsApp Button */}
      <button className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition" onClick={() => setIsOpen(!isOpen)}>
        <FaWhatsapp size={32} />
      </button>

      {/* Popup Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-white shadow-lg rounded-lg p-4">
          <h3 className="text-lg font-bold text-gray-700">Start a Conversation</h3>
          <p className="text-sm text-gray-500">
            Hi! Click below to chat on <b>WhatsApp</b>
          </p>
          <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 text-white p-2 mt-3 rounded-lg hover:bg-green-600 transition">
            <FaWhatsapp size={24} className="mr-2" />
            Chat with us
          </a>
        </div>
      )}
    </div>
  );
};

export default WhatsApp;

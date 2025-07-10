import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:ethandtsao@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open default email client
    window.open(mailtoLink);
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="w-full min-h-[40vh] text-white py-8">
      <div className="w-full max-w-[44rem] mx-auto px-4 flex flex-col items-center">
        {/* Make the Contact title left-justified and aligned with the form */}
        <div className="w-full flex justify-start">
          <h2 className="text-xs md:text-sm font-medium mb-3 text-left border border-[#232329] rounded-lg bg-[#18181b] px-2 py-1 inline-block w-auto">Contact</h2>
        </div>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 rounded-2xl border border-[#232329] p-4 bg-transparent">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-[#232329] bg-transparent px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full rounded-xl border border-[#232329] bg-transparent px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full rounded-xl border border-[#232329] bg-transparent px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3b82f6] min-h-[120px]"
          />
          <button
            type="submit"
            className="bg-white text-gray-900 font-bold py-2 px-6 rounded-lg shadow hover:bg-gray-200 transition text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact; 
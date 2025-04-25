"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import { 
  FaPaperPlane,
} from 'react-icons/fa';

export default function ContactForm() {

 const [form, setForm] = useState({ contactName: "", contactEmail: "", contactMessage: "" });

 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
        //await fetch_contact();
        toast.success(data.message || "Message sent!");
        setForm({ contactName: "", contactEmail: "", contactMessage: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
  };

  return (
    <>
  <section id="contact" className="py-20 bg-gradient-to-br">
    <div className="max-w-xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or want to discuss a project? Reach out to us and we'll get back to you promptly.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="contactName"
                name="contactName"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={handleChange}
                value={form.contactName}
                required
              />
            </div>

            <div>
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={handleChange}
                value={form.contactEmail}
                required
              />
            </div>

            <div>
              <label htmlFor="contactMessage" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="contactMessage"
                name="contactMessage"
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                onChange={handleChange}
                value={form.contactMessage}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <span>Send Message</span>
              <FaPaperPlane className="ml-2" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</>
  );
}

"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { 
  FaPaperPlane, 
  FaEye,
  FaTrash
} from 'react-icons/fa';

export default function ContactForm() {

 const [form, setForm] = useState({ contactName: "", contactEmail: "", contactMessage: "" });

 const [contact,setContact] = useState([]);

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
    console.log(data);

    if (data.status) {
        await fetch_contact();
        toast.success("Sent!");
        setForm({ contactName: "", contactEmail: "", contactMessage: "" });
      } else {
        toast.error("Error");
      }
  };

  useEffect(()=>{
    fetch_contact();
    console.log("dsdsdsd");
  },[]);

  const fetch_contact = async() => {
    const res = await fetch('/api/contact');

    if(!res.ok){
      throw new Error("data not found...");
    }

    const emaillist = await res.json();
    console.log(emaillist.data);
      setContact(emaillist.data);

  }

  return (
    <>
  <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
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

  {/* Contact List Section - Admin View */}
  <section id="contact-list" className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Submissions</h2>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Message
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contact.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.contactName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a href={`mailto:${item.contactEmail}`} className="text-blue-600 hover:underline">
                      {item.contactEmail}
                    </a>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {item.contactMessage}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      onClick={() => handleViewDetails(item)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <FaEye />
                    </button>
                    <button 
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</>
  );
}

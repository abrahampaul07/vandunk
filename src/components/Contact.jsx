import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion"; // Import Framer Motion

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [popupVisible, setPopupVisible] = useState(false); // State for popup visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show popup
    setPopupVisible(true);

    // Clear form data
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <div className="overflow-x-hidden">
        {/* Contact Header Section */}
        <motion.div
          className="bg-gray-100 text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl text-emerald-800 font-bold pb-2">Contact Us</h3>
          <p className="text-lg text-gray-600">Request information regarding the available services and associated pricing.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
          {/* Contact Information Section */}
          <motion.div
            className="md:w-1/3 space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-800" />
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <a href="mailto:pierce@vandunkedits.com" className="text-gray-600 hover:text-yellow-300">pierce@vandunkedits.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-800" />
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <a href="tel:(845) 775-9351" className="text-gray-600 hover:text-yellow-300">(845) 775-9351</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-emerald-800" />
                <div>
                  <h3 className="text-xl font-semibold">Mailing Address</h3>
                  <p className="text-gray-600">Email, call, or text to request mailing address.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-emerald-800 rounded-lg p-6 space-y-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={6}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-yellow-200 text-emerald-800 rounded-md hover:bg-yellow-300 transition-colors duration-200 font-semibold"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>

        {/* Popup Modal */}
        {popupVisible && (
          <motion.div
            className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
              <h2 className="text-xl font-semibold text-emerald-800">Thank You!</h2>
              <p className="text-gray-600">Your message has been sent. We'll get back to you soon.</p>
              <button
                onClick={() => setPopupVisible(false)}
                className="mt-4 px-6 py-2 bg-emerald-800 text-white rounded-md hover:bg-emerald-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Contact;

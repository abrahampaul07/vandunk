import React, { useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
    AOS.refresh(); // Refresh AOS after content load
  }, []);

  return (
    <>
      {/* Contact Header Section with fade-up animation */}
      <div className="bg-gray-100 text-center py-16" data-aos="fade-up">
        <h3 className="text-4xl text-emerald-800 font-bold pb-2">Contact Us</h3>
        <p>
          Request information regarding the available services and associated
          pricing.
        </p>
      </div>

      {/* Main Content Section with fade-up animation */}
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        {/* Contact Information Section with fade-right animation */}
        <div className="md:w-1/3 space-y-6" data-aos="fade-right" data-aos-delay="200">
          <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-600">pierce@vandunkedits.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-600">(845) 775-9351</p>
              </div>
            </div>

            {/* Mailing Address */}
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <div>
                <h3 className="text-xl font-semibold">Mailing Address</h3>
                <p className="text-gray-600">
                  Email, call, or text to request mailing address.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section with fade-left animation */}
        <div className="md:w-2/3" data-aos="fade-left" data-aos-delay="400">
          <form
            onSubmit={handleSubmit}
            className="bg-emerald-800 rounded-lg p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <textarea
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
        </div>
      </div>
    </>
  );
};

export default Contact;

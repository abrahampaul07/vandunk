// src/components/Footer.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png"; // Assuming your logo is stored here
import backgroundImage from "../assets/footer.jpg"; // Import your background image

function Footer() {
  const [contactInfo, setContactInfo] = useState({
    email: "",
    phone: "",
    youtube: "",
    linkedin: "",
    instagram: "",
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1u0J_BUI80HVtT8znRsaShOWzZYK-NzMZ40aK7gKtZJU/values:batchGet?ranges=contact&key=AIzaSyD_yKv_VQnArFPkiCGZyK_d1B0kI-O8cBk"
        );

        const contactData = response.data.valueRanges[0].values;

        const contactInfo = {};
        contactData.forEach((row) => {
          if (row[0] && row[1]) {
            contactInfo[row[0].toLowerCase()] = row[1];
          }
        });

        setContactInfo(contactInfo);
      } catch (error) {
        console.log("Error fetching contact info", error);
      }
    };

    fetchContactInfo();
  }, []);

  return (
    <div
      className="pt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Main content container */}
      <div className="flex flex-col md:flex-row justify-between p-6 bg-emerald-800 max-w-4xl md:mx-auto mx-2 rounded-lg shadow-lg">
        {/* Left Side: Title and Description */}
        <div className="flex-1 mb-4 md:mb-0">
          <h1 className="text-3xl font-semibold text-white text-center md:text-left">
            Book an Appointment
          </h1>
          <p className="mt-2 text-white text-center md:text-left w-[90%] md:w-full">
            Send a message or give us a call to receive a quote. Share details
            about your project, and we’ll connect you with the services that
            best suit your needs.
          </p>
        </div>

        {/* Right Side: Button to Book an Appointment */}
        <div className="flex items-center justify-center md:justify-end">
          <Link
            to="/book-an-appointment"
            className="px-6 py-3 bg-yellow-200 text-dark font-semibold rounded-lg shadow-md hover:bg-gray-400 focus:outline-none"
          >
            Book an Appointment
          </Link>
        </div>
      </div>

      {/* Stylish Divider between content sections */}
      <div className="my-8 border-t-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mx-auto"></div>

      {/* Footer Sections: Left, Middle, Right */}
      <div className="flex flex-col md:flex-row justify-between px-6 max-w-4xl mx-auto">
        {/* Left Section: Logo and Social Links */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <div className="mb-0">
            <img
              src={logo}
              alt="Logo"
              className="w-[250px] mx-auto md:-mx-16"
            />
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Social Media Links with Font Awesome Icons */}
            {contactInfo.youtube && (
            <a
              href={contactInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-xl hover:text-yellow-200"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            )}
            {contactInfo.linkedin && (
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-xl hover:text-yellow-200"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            )}
            {contactInfo.instagram && (
            <a
              href={contactInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 text-xl hover:text-yellow-200"
            >
              <i className="fab fa-instagram"></i>
            </a>
            )}
          </div>
        </div>

        {/* Middle Section: Contact Information */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-xl font-semibold text-gray-800">Contact</h2>
          <div className="mt-4">
            <p className="text-gray-700 flex items-center justify-center md:justify-start">
              <i className="fas fa-envelope mr-2 mt-1"></i>
              <a
                href={`mailto:${contactInfo.email}`}
                className="hover:text-yellow-300"
              >
                {contactInfo.email || 'Loading...'}
              </a>
            </p>
            <p className="text-gray-700 flex items-center justify-center md:justify-start">
              <i className="fas fa-phone-alt mr-2 mt-1"></i>
              <a href={`tel:${contactInfo.phone}`} className="hover:text-yellow-300">
                {contactInfo.phone || 'Loading...'}
              </a>
            </p>
          </div>
        </div>

        {/* Right Section: Text and List */}
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-xl font-semibold text-gray-800">VanDunk Edits</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="/about" className="text-gray-700 hover:text-yellow-200">
                Academic Editing
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-gray-700 hover:text-yellow-200"
              >
                Book Editing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-700 hover:text-yellow-200"
              >
                Ghostwriting
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright with bg-emerald-800 */}
      <div className="text-center mt-6 bg-emerald-800 py-4">
        <p className="text-white">
          &copy; 2023 VanDunk Edits. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;

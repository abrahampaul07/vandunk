// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import backgroundImage from '../assets/footer.jpg';

const Footer = ({ contactInfo }) => {
  return (
    <div
      className="pt-20"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Main content container */}
      <div className="flex flex-col md:flex-row justify-between p-6 bg-emerald-800 max-w-4xl md:mx-auto mx-2 rounded-lg shadow-lg">
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

      <div className="my-8 border-t-4 border-gradient-to-r from-yellow-400 via-red-500 to-pink-500 mx-auto"></div>

      {/* Footer Sections: Left, Middle, Right */}
      <div className="flex flex-col md:flex-row justify-between px-6 max-w-4xl mx-auto">
        {/* Left Section: Logo and Social Links */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <img src={logo} alt="Logo" className="w-[250px] mx-auto md:-mx-16" />
          <div className="flex justify-center md:justify-start space-x-4">
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
                <i className="fa-brands fa-instagram"></i>
              </a>
            )}
          </div>
        </div>

        {/* Center Section: Quick Links */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0">
          <h3 className="font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 mt-4 text-white">
            <li>
              <Link to="/" className="hover:text-yellow-200">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-200">About</Link>
            </li>
            <li>
              <Link to="/success-stories" className="hover:text-yellow-200">Success Stories</Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-200">Services</Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-yellow-200">Courses</Link>
            </li>
            <li>
              <Link to="/careers" className="hover:text-yellow-200">Careers</Link>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Information */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-semibold text-white">Contact Info</h3>
          <ul className="mt-4 text-white">
            <li>
              <a href={`tel:${contactInfo.phone}`}>📞 {contactInfo.phone}</a>
            </li>
            <li>
              <a href={`mailto:${contactInfo.email}`}>📧 {contactInfo.email}</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-emerald-800 py-2 text-white text-center mt-8">
        <p>© 2024 All Rights Reserved | Your Company</p>
      </div>
    </div>
  );
};

export default Footer;

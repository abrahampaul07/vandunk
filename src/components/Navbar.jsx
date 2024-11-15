import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Close the mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Top section (phone and email) visible on all screen sizes */}
      <div className="bg-emerald-800 text-white py-2 px-4 flex justify-center md:justify-start items-center">
        <div className="text-sm flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
          <a href="tel:(845) 775-9351">📞 (845) 775-9351</a>
          <a href="mailto:pierce@vandunkedits.com" className="mt-2 md:mt-0">📧 pierce@vandunkedits.com</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-0">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-64 pt-7" />
              </Link>
            </div>

            {/* Desktop navlinks (centered) */}
            <div className="hidden md:flex flex-grow justify-center space-x-8">
              <Link
                to="/"
                className="text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                About
              </Link>
              <Link
                to="/success-stories"
                className="text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Success Stories
              </Link>
              <Link
                to="/services"
                className="text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Services
              </Link>
              <Link
                to="/courses"
                className="text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Courses
              </Link>
              <Link
                to="/careers"
                className="text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105"
              >
                Careers
              </Link>
            </div>

            {/* Book an Appointment button on the right */}
            <div className="hidden md:flex">
              <Link
                to="/book-an-appointment"
                className="bg-yellow-200 font-semibold text-dark py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-300"
              >
                Book an Appointment
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="text-2xl md:hidden text-gray-800 hover:text-blue-600 focus:outline-none transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? "❌" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white text-center shadow-md py-0 px-6 transition-all duration-700 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <Link
            to="/"
            onClick={handleLinkClick} // Close menu when clicked
            className="block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick} // Close menu when clicked
            className="block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
          <Link
            to="/success-stories"
            onClick={handleLinkClick} // Close menu when clicked
            className="block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Success Stories
          </Link>
          <Link
            to="/services"
            onClick={handleLinkClick} // Close menu when clicked
            className="block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Services
          </Link>
          <Link
            to="/courses"
            onClick={handleLinkClick} // Close menu when clicked
            className="block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Courses
          </Link>
          <Link
            to="/careers"
            onClick={handleLinkClick} // Close menu when clicked
            className="block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Careers
          </Link>
          {/* Mobile Book Appointment Button */}
          <Link
            to="/book-an-appointment"
            onClick={handleLinkClick} // Close menu when clicked
            className="block bg-yellow-200 font-semibold text-dark py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

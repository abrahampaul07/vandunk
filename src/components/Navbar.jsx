import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = ({ contactInfo }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Top section (phone and email) visible on all screen sizes */}
      <div className="bg-emerald-800 text-white py-2 px-4 flex justify-center md:justify-start items-center">
        <div className="text-sm flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
          <a href={`tel:${contactInfo.phone}`}>📞 {contactInfo.phone || 'Loading...'}</a>
          <a href={`mailto:${contactInfo.email}`} className="mt-2 md:mt-0">📧 {contactInfo.email || 'Loading...'}</a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-lg border-b border-gray-200 transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-0">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="w-64 pt-7" />
              </NavLink>
            </div>

            {/* Desktop navlinks (centered) */}
            <div className="hidden md:flex flex-grow justify-center space-x-8">
              <NavLink
                to="/"
                end  // 'end' makes sure this link only gets active on the exact '/'
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'  // Active styles
                    : 'text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105'
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'
                    : 'text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105'
                }
              >
                About
              </NavLink>
              <NavLink
                to="/success-stories"
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'
                    : 'text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105'
                }
              >
                Success Stories
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'
                    : 'text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105'
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'
                    : 'text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105'
                }
              >
                Courses
              </NavLink>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'
                    : 'text-gray-800 hover:text-emerald-800 transition-all duration-300 ease-in-out transform hover:scale-105'
                }
              >
                Careers
              </NavLink>
            </div>

            {/* Book an Appointment button on the right */}
            <div className="hidden md:flex">
              <NavLink
                to="/book-an-appointment"
                className={({ isActive }) =>
                  isActive
                    ? 'text-emerald-800 border-b-2 border-emerald-800'
                    : 'bg-yellow-200 font-semibold text-dark py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-300'
                }
              >
                Book an Appointment
              </NavLink>
            </div>

            {/* Mobile menu button with animation */}
            <button
              className="text-2xl md:hidden text-gray-800 hover:text-blue-600 focus:outline-none transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div
                className={`relative w-8 h-6 flex flex-col justify-between items-center transition-all duration-300 ease-in-out`}
              >
                {/* Top bar of the hamburger */}
                <span
                  className={`block w-full h-1 bg-gray-800 transition-all duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                {/* Middle bar of the hamburger (hidden when open) */}
                <span
                  className={`block w-full h-1 bg-gray-800 transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                {/* Bottom bar of the hamburger */}
                <span
                  className={`block w-full h-1 bg-gray-800 transition-all duration-300 ease-in-out transform ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-[-12px]' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-white text-center shadow-md py-0 px-6 transition-all duration-700 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <NavLink
            to="/"
            onClick={handleLinkClick}
            end
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 border-b border-gray-200'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 border-b border-gray-200'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/success-stories"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 border-b border-gray-200'
            }
          >
            Success Stories
          </NavLink>
          <NavLink
            to="/services"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 border-b border-gray-200'
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/courses"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 border-b border-gray-200'
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/careers"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block text-gray-800 hover:text-emerald-800 py-2 transition-all duration-300 ease-in-out transform hover:scale-105 border-b border-gray-200'
            }
          >
            Careers
          </NavLink>
          {/* Mobile Book Appointment Button */}
          <NavLink
            to="/book-an-appointment"
            onClick={handleLinkClick}
            className={({ isActive }) =>
              isActive
                ? 'text-emerald-800 border-b-2 border-emerald-800'
                : 'block font-semibold text-dark py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-300'
            }
          >
            Book an Appointment
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import course from '../assets/course.jpg'; // Make sure the path to the image is correct
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Courses = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    gender: '',
    phone: '',
    week: '',
    level: '',
    year: '',
    class: ''
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal when form is submitted
    console.log(formData);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with 1 second duration for animations
    AOS.refresh(); // Refresh AOS to apply animations
  }, []);

  return (
    <>
      {/* Header Section with AOS fade-up animation */}
      <div className="bg-gray-100 text-center py-16" data-aos="fade-up" data-aos-once="true">
        <h3 className="text-4xl text-emerald-800 font-bold">Courses</h3>
      </div>

      {/* Main Content Section with AOS fade-up animation */}
      <div className="flex flex-col lg:flex-row items-center md:p-16 p-4" data-aos="fade-up" data-aos-once="true">
        {/* Left side image */}
        <div className="flex-shrink-0 w-full lg:w-2/5 mb-6 lg:mb-0">
          <img
            src={course}
            alt="Course image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right side content */}
        <div className="lg:w-2/3 px-6 text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Level Up Your Academic Writing</h1>
          <p className="text-gray-700 mb-6">
            Thanks for your interest in Level Up Your Academic Writing: A Seminar on Writing, Research, and Academic Advancement. This course, taught by VanDunk Edits founder Pierce VanDunk, covers the basics of academic writing and research in a fresh way.
          </p>

          {/* Three Lists */}
          <div className="space-y-4 text-left">
            <ul className="list-disc pl-6 text-gray-700">
              <li><span className="font-semibold">Cost:</span> $100</li>
              <li><span className="font-semibold">Medium:</span> Zoom (link provided upon payment)</li>
              <li><span className="font-semibold">Dates:</span> Two sessions: October 15 & 17th, 6-8PM or October 22 & 24th, 12-2PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Registration Form Section */}
      <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full"
          data-aos="fade-up" data-aos-delay="200" data-aos-once="true"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register Now</h2>

          {/* Name Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4" data-aos="fade-right" data-aos-delay="100" data-aos-once="true">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your first name"
                required
              />
            </div>

            <div className="mb-4" data-aos="fade-left" data-aos-delay="100" data-aos-once="true">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200" data-aos-once="true">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Week Dropdown */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
            <label htmlFor="week" className="block text-sm font-medium text-gray-700">Which week you want to attend</label>
            <select
              id="week"
              name="week"
              value={formData.week}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">-Please choose an option-</option>
              <option value="Week 1">Week 1: October 15 and 17th, 6-8PM</option>
              <option value="Week 2">Week 2: October 22 and 24th, 12-2PM</option>
            </select>
          </div>

          {/* Academic Level Dropdown */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="500" data-aos-once="true">
            <label htmlFor="level" className="block text-sm font-medium text-gray-700">Academic Level</label>
            <select
              id="level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">-Please choose an option-</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Masters">Masters</option>
              <option value="Doctoral">Doctoral</option>
            </select>
          </div>

          {/* Year Dropdown */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Which year are you in?</label>
            <select
              id="year"
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">-Please choose an option-</option>
              <option value="Freshman">Freshman</option>
              <option value="Sophomore">Sophomore</option>
              <option value="Junior">Junior</option>
              <option value="Senior">Senior</option>
            </select>
          </div>

          {/* Class Discovery Dropdown */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="700" data-aos-once="true">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700">How did you hear about the class?</label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">-Please choose an option-</option>
              <option value="Professor">Professor</option>
              <option value="Friend/Colleague">Friend/Colleague</option>
              <option value="Instagram">Instagram</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="YouTube">YouTube</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-emerald-800 text-white py-2 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal (Popup) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Form Submitted!</h2>
            <p className="text-gray-700 mb-4">Thank you for registering. We'll get back to you soon!</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Courses;

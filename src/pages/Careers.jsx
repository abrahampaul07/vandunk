import React, { useState, useRef } from 'react';
import career from '../assets/career.jpg'; // Ensure the image path is correct
import { motion } from 'framer-motion'; // Import Framer Motion

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    resume: null,
    coverLetter: null,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Refs for file inputs
  const resumeInputRef = useRef(null);
  const coverLetterInputRef = useRef(null);

  // Handle input change for text inputs and file uploads
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted!', formData); // You can replace this with actual submission logic

    // Open the confirmation popup
    setIsPopupOpen(true);

    // Clear form data after submission, including files (resume and cover letter)
    setFormData({
      name: '',
      phone: '',
      email: '',
      resume: null,
      coverLetter: null,
    });

    // Clear the file inputs using refs
    if (resumeInputRef.current) {
      resumeInputRef.current.value = ''; // Clear the resume file input
    }
    if (coverLetterInputRef.current) {
      coverLetterInputRef.current.value = ''; // Clear the cover letter file input
    }
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      {/* Careers Heading Above the Image with fade-up animation */}
      <motion.div
        className="bg-gray-100 text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl text-emerald-800 font-bold">Careers</h3>
      </motion.div>

      {/* Top Image with zoom-in animation */}
      <motion.div
        className="w-full"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src={career}
          alt="Career Image"
          className="w-full h-96 object-cover rounded-b-lg shadow-lg"
        />
      </motion.div>

      {/* Content Section Below the Image with fade-up animation */}
      <motion.div
        className="bg-gray-100 py-16 px-6 md:px-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Content on the Right */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <p className="text-gray-700 mb-6">
              Do you have editing or ghostwriting experience? Are you interested in working with VanDunk Edits? <br />
              We are looking for editors and writers with experience in academics (any field, but especially theology and social work), memoir, and nonfiction. VanDunk Edits editors work remotely and make their own schedules.
            </p>

            {/* Responsibilities List */}
            <div className="space-y-4 text-left mb-6">
              <p className="font-bold text-lg">Applicants must be able to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Read through written works like dissertations, theses, articles, and nonfiction books,</li>
                <li>Offer meaningful suggestions on how to strengthen content and structure,</li>
                <li>Correct mechanical errors (grammar, punctuation, word choice, awkward sentences, etc.),</li>
                <li>Help clients clearly express ideas in writing,</li>
                <li>Abide by the appropriate manual of style and school guidelines,</li>
                <li>Communicate with clients regularly and thoroughly, and</li>
                <li>Communicate with other members of the VanDunk Edits team promptly and collaboratively.</li>
              </ul>
            </div>

            {/* Qualifications List */}
            <div className="space-y-4 text-left mb-6">
              <p className="font-bold text-lg">Qualifications:</p>
              <p>Applicants must possess the following:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>A graduate degree in any field (theology is the preferred field, as most VanDunk Edits dissertation clients come from divinity schools),</li>
                <li>A strong command of the English language,</li>
                <li>Proficiency in at least one academic manual of style (Chicago Manual of Style or Turabian is preferred),</li>
                <li>Proficiency in Microsoft Word’s editing tools, and</li>
                <li>At least one year of editing experience.</li>
              </ul>
              <p className="mt-4">To apply, please complete the form below and attach a résumé and cover letter.</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Form Section with fade-up animation */}
      <motion.div
        className="min-h-screen flex justify-center items-center bg-gray-100 py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full"
        >
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Apply Now</h2>

          {/* Name Input */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your full name"
              required
            />
          </motion.div>

          {/* Phone Number Input */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
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
          </motion.div>

          {/* Email Input */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
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
          </motion.div>

          {/* Resume Upload */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume</label>
            <input
              ref={resumeInputRef}
              type="file"
              id="resume"
              name="resume"
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </motion.div>

          {/* Cover Letter Upload */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <input
              ref={coverLetterInputRef}
              type="file"
              id="coverLetter"
              name="coverLetter"
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </motion.div>

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
      </motion.div>

      {/* Stylish Popup with fade-in animation */}
      {isPopupOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-lg shadow-xl w-96">
            <h2 className="text-2xl font-semibold text-center text-gray-800">Application Submitted!</h2>
            <p className="text-center text-gray-700 mt-4">Thank you for your interest in working with VanDunk Edits. We will review your application and get back to you soon.</p>
            <div className="mt-6 text-center">
              <button
                onClick={closePopup}
                className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Careers;

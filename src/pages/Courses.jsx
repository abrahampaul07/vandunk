import React, { useState, useCallback } from "react";
import course from '../assets/course.jpg';
import { motion } from "framer-motion";

// Reusable form input component
const FormInput = ({ id, label, type = "text", value, onChange, placeholder, required, ...props }) => (
  <div className="mb-4" {...props}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

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
  const [isSubmitting, setIsSubmitting] = useState(false); // Disable submit button during submission

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(formData); // Log form data (replace with actual submission logic)

    // Simulate an async form submission
    setTimeout(() => {
      setIsModalOpen(true);
      setIsSubmitting(false);
      setFormData({
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
    }, 2000); // Simulate a 2-second delay
  }, [formData]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false); // Close the modal
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} // Fade-in animation for the entire page
    >
      {/* Header Section */}
      <motion.div 
        className="bg-gray-100 text-center py-16"
        initial={{ y: -50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-4xl text-emerald-800 font-bold">Courses</h3>
      </motion.div>

      {/* Main Content Section */}
      <motion.div 
        className="flex flex-col lg:flex-row items-center md:p-16 p-4"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}  // Fade-in for content
      >
        <div className="flex-shrink-0 w-full lg:w-2/5 mb-6 lg:mb-0">
          <img src={course} alt="Course image" className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="lg:w-2/3 px-6 text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Level Up Your Academic Writing</h1>
          <p className="text-gray-700 mb-6">
            Thanks for your interest in Level Up Your Academic Writing: A Seminar on Writing, Research, and Academic Advancement. This course, taught by VanDunk Edits founder Pierce VanDunk, covers the basics of academic writing and research in a fresh way.
          </p>
          <div className="space-y-4 text-left">
            <ul className="list-disc pl-6 text-gray-700">
              <li><span className="font-semibold">Cost:</span> $100</li>
              <li><span className="font-semibold">Medium:</span> Zoom (link provided upon payment)</li>
              <li><span className="font-semibold">Dates:</span> Two sessions: October 15 & 17th, 6-8PM or October 22 & 24th, 12-2PM</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Registration Form Section */}
      <motion.div 
        className="min-h-screen flex justify-center items-center bg-gray-100 py-10"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Register Now</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormInput id="name" label="First Name" value={formData.name} onChange={handleChange} placeholder="Enter your first name" required />
            <FormInput id="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" required />
          </div>

          <FormInput id="email" label="Email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
          <FormInput id="phone" label="Phone Number" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" required />

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mb-4">
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

          <div className="mt-6">
            <button
              type="submit"
              className={`w-full py-2 px-4 rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-emerald-800 text-white'}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </motion.div>

      {/* Modal Confirmation */}
      {isModalOpen && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-8 rounded-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Form Submitted!</h2>
            <p className="text-gray-700 mb-4">Thank you for registering. We'll get back to you soon!</p>
            <div className="flex justify-end">
              <button onClick={closeModal} className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">Close</button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Courses;

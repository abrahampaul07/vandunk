import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'; // Import Framer Motion

const AcademicEditing = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const circles = [
    { 
      id: 1, 
      text: 'Basic Academic Editing', 
      description: 'This package includes attention to grammar, punctuation, style, logical flow, formatting, citations, and more.',
      route: '/book-an-appointment', // Add a route key for navigation
      icon: '📝', // Add an icon for the service
    },
    { 
      id: 2, 
      text: 'Developmental Thesis/Dissertation Editing', 
      description: 'This package provides coaching through all stages of the thesis/dissertation-writing process, including research, structure, grammar, punctuation, style, logical flow, formatting, citations, and more.',
      route: '/book-an-appointment', // Add a route key for navigation
      icon: '📚', // Add an icon for the service
    },
    { 
      id: 3, 
      text: 'Premium Academic Editing—Refining Your Thesis/Dissertation into a Book Manuscript', 
      description: 'This package provides assistance with developing your dissertation into a book manuscript. It includes coaching, networking opportunities, and assistance with finding a literary agent, publisher, and more.',
      route: '/book-an-appointment', // Add a route key for navigation
      icon: '📖', // Add an icon for the service
    },
  ];

  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleClick = (route) => {
    navigate(route); // Navigate to the specific route on click
  };

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      {/* Header Section with fade-up animation using Framer Motion */}
      <motion.div 
        className="bg-gradient-to-r from-teal-400 via-emerald-600 to-teal-400 text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-5xl text-white font-extrabold leading-tight">
          Premium Academic Editing Services
        </h3>
        <p className="text-lg text-gray-200 mt-4">
          Helping You Perfect Your Academic Work with Precision and Care
        </p>
      </motion.div>

      {/* Main Content Container with Framer Motion fade-up animation for each circle */}
      <div className="App container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {circles.map((circle) => (
            <motion.div
              key={circle.id}
              className="relative text-center w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: circle.id * 0.2 }}
            >
              {/* Circle with hover effects */}
              <motion.div
                className="relative group w-full h-72 bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 ease-in-out hover:scale-105"
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                onClick={() => handleClick(circle.route)} // Handle click to navigate
                whileHover={{ scale: 1.05 }} // Scale effect on hover
              >
                {/* Service Icon */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-4xl text-emerald-700">
                  {circle.icon}
                </div>
                <div className="flex items-center justify-center h-full">
                  <motion.span
                    className={`text-2xl font-semibold text-gray-800 transition-all duration-300 ${
                      hoveredCircle === circle.id ? 'text-emerald-600' : 'text-gray-800'
                    }`}
                  >
                    {hoveredCircle === circle.id ? 'Contact Us' : circle.text}
                  </motion.span>
                </div>
              </motion.div>

              {/* Description below the circle */}
              <div className="mt-4">
                <p className="text-gray-600 text-sm">{circle.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section with Note about Rates, with fade-up animation using Framer Motion */}
      <motion.div
        className="bg-gradient-to-r from-teal-400 via-emerald-600 to-teal-400 text-center py-16 px-10 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className="font-bold text-lg text-white pb-2">All Rates Are Subject to Adjustment</p>
        <p className="text-gray-200 text-sm max-w-2xl mx-auto">
          VanDunk Edits reserves the right to adjust the rate of a particular project. Reasons for rate adjustments include but are not limited to a request for a faster turnaround than usual, and a file for ghostwriting with poor audio quality or illegible handwriting. All rate adjustments will be communicated before work begins, giving the client an opportunity to contest. VanDunk Edits will never increase the rate after work on a project has begun.
        </p>
      </motion.div>

      {/* Go Back Button */}
      <div className="text-center mt-8 mb-8">
        <button
          onClick={handleGoBack}
          className="bg-teal-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300"
        >
          Go Back
        </button>
      </div>
    </>
  );
};

export default AcademicEditing;

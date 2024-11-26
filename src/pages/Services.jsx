import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import { motion } from "framer-motion";  // Import Framer Motion

const Services = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const circles = [
    { 
      id: 1, 
      text: 'Academic Editing', 
      description: 'Packages designed to help students, professors, and researchers polish their writing and prepare papers for submission or publication.',
      route: '/academic-editing'
    },
    { 
      id: 2, 
      text: 'Book Editing', 
      description: 'Packages for authors to develop ideas, refine writing, and prepare manuscripts for publication.',
      route: '/book-editing'
    },
    { 
      id: 3, 
      text: 'Ghostwriting Elite Package', 
      description: 'For those with an idea but no time or desire to write it themselves. Enjoy unlimited partnering sessions with a ghostwriter.',
      route: '/book-an-appointment'
    },
    { 
      id: 4, 
      text: 'Doctoral Application Package', 
      description: 'Assistance with every written portion of your doctoral application, from personal statements to research proposals.',
      route: '/book-an-appointment'
    },
  ];

  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleClick = (route) => {
    navigate(route); // Navigate to the specific route on click
  };

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
        <h3 className="text-4xl text-emerald-800 font-bold tracking-wider">Our Services</h3>
      </motion.div>

      {/* Main Content Container */}
      <motion.div 
        className="container mx-auto p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3, duration: 0.8 }}  // Fade-in for the entire content container
      >
        {/* Loop through each circle and description pair */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {circles.map((circle) => (
            <motion.div
              key={circle.id}
              className="text-center"
              initial={{ opacity: 0, y: 20 }} // Initial state for circle elements
              animate={{ opacity: 1, y: 0 }}  // Fade and slide-in effect
              transition={{ delay: circle.id * 0.2, duration: 0.6 }} // Delay the animations for each circle
            >
              {/* Circle */}
              <motion.div
                className="relative group w-64 h-64 bg-gradient-to-r from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:rotate-6 hover:bg-emerald-600 shadow-lg"
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                onClick={() => handleClick(circle.route)} // Handle click to navigate
                whileHover={{ scale: 1.1 }} // Scale and rotate effect on hover
                transition={{ duration: 0.3 }} // Smooth hover effect transition for circle
              >
                {/* Text inside the circle */}
                <motion.span
                  className={`text-white font-semibold text-2xl transition-all duration-300`}
                  style={{
                    color: hoveredCircle === circle.id ? '#d1fae5' : 'white',  // Change color on hover
                    scale: hoveredCircle === circle.id ? 1.2 : 1, // Scale up text on hover
                    opacity: hoveredCircle === circle.id ? 0.9 : 1, // Slightly reduce opacity on hover
                  }}
                  transition={{ duration: 0.3 }} // Smooth hover effect transition for text
                >
                  {hoveredCircle === circle.id ? 'Explore More' : circle.text}
                </motion.span>
              </motion.div>

              {/* Description (Now below the circle) */}
              <motion.div 
                className="mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}  // Fade-in for description
              >
                <p className="text-gray-600 text-sm">{circle.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;

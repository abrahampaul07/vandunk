import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Services = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const circles = [
    { 
      id: 1, 
      text: 'Academic Editing', 
      description: 'These packages are designed to help students, professors, and researchers develop their ideas, polish their writing, and prepare papers and other written works for submission or publication.',
      route: '/academic-editing' // Add a route key for navigation
    },
    { 
      id: 2, 
      text: 'Book Editing', 
      description: 'These packages are designed to help authors develop their ideas, polish their writing, and prepare manuscripts for publication.',
      route: '/book-editing' // Add a route key for navigation
    },
    { 
      id: 3, 
      text: 'Ghostwriting Elite Package', 
      description: 'Do you have an idea for your book, but don’t like or have the time to write it? Do you need someone to do it for you? This package consists of 18 months of unlimited partnering sessions between you and the ghostwriter.',
      route: '/contact' // Add a route key for navigation
    },
    { 
      id: 4, 
      text: 'Doctoral Application Package', 
      description: 'Need help applying to a doctoral program? The Doctoral Application Package provides assistance with all the written portions of your doctoral application.',
      route: '/contact' // Add a route key for navigation
    },
  ];

  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleClick = (route) => {
    navigate(route); // Navigate to the specific route on click
  };

  return (
    <>
      {/* Header Section */}
      <div className="bg-gray-100 text-center py-16">
        <h3 className="text-4xl text-emerald-800 font-bold">Services</h3>
      </div>

      {/* Main Content Container */}
      <div className="App container mx-auto p-8">
        {/* Loop through each circle and description pair */}
        <div className="space-y-8">
          {circles.map((circle) => (
            <div key={circle.id} className="text-center">
              {/* Circle */}
              <div
                className="relative group w-60 h-60 bg-emerald-800 rounded-full flex items-center justify-center mx-auto cursor-pointer"
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                onClick={() => handleClick(circle.route)} // Handle click to navigate
              >
                <span className="text-white font-semibold text-xl">
                  {/* Change hover text for the last two circles */}
                  {hoveredCircle === circle.id
                    ? circle.id === 3 || circle.id === 4
                      ? 'Contact Us' // For id 3 and 4, show 'Contact Us'
                      : 'Click for more details'
                    : circle.text}
                </span>
              </div>

              {/* Description (Now below the circle) */}
              <div className="mb-20">
                <p className="text-gray-600">{circle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;

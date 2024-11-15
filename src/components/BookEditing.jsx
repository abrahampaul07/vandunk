import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const BookEditing = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const circles = [
    { 
      id: 1, 
      text: 'Without Coaching', 
      description: 'Provides feedback on completed manuscript, including editing content and the writing mechanics, for up to two revisions.',
      route: '/book-an-appointment' // Add a route key for navigation
    },
    { 
      id: 2, 
      text: 'With Coaching', 
      description: 'Provides feedback on completed manuscript including editing content and the writing mechanics with unlimited virtual coaching sessions for up to 3 months.',
      route: '/book-an-appointment' // Add a route key for navigation
    },
  ];

  const [hoveredCircle, setHoveredCircle] = useState(null);

  const handleClick = (route) => {
    navigate(route); // Navigate to the specific route on click
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with 1 second duration for animations
    AOS.refresh();  // Refresh AOS to apply animations
  }, []);

  return (
    <>
      {/* Header Section with AOS fade-up animation */}
      <div className="bg-gray-100 text-center py-16" data-aos="fade-up" data-aos-once="true">
        <h3 className="text-4xl text-emerald-800 font-bold">Book Editing</h3>
      </div>

      {/* Main Content Container with AOS fade-up animation for each circle */}
      <div className="App container mx-auto p-8">
        {/* Flex container with centered circles on mobile */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-12 sm:space-y-0 justify-center space-y-8 gap-8">
          {circles.map((circle) => (
            <div key={circle.id} className="text-center sm:w-64 w-full" data-aos="fade-up" data-aos-delay={`${circle.id * 100}`} data-aos-once="true">
              {/* Circle with hover effects */}
              <div
                className="relative group w-60 h-60 bg-emerald-800 rounded-full flex items-center justify-center cursor-pointer mx-auto transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-emerald-700"
                onMouseEnter={() => setHoveredCircle(circle.id)}
                onMouseLeave={() => setHoveredCircle(null)}
                onClick={() => handleClick(circle.route)} // Handle click to navigate
              >
                <span
                  className={`text-white font-semibold text-xl transition-all duration-300 ${hoveredCircle === circle.id ? 'text-emerald-100' : 'text-white'}`}
                >
                  {hoveredCircle === circle.id ? 'Contact Us' : circle.text}
                </span>
              </div>

              {/* Description below the circle */}
              <div className="mt-4">
                <p className="text-gray-600">{circle.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section with Note about Rates, with AOS animation */}
      <div className='bg-gray-100 text-center py-20 px-10' data-aos="fade-up" data-aos-delay="300" data-aos-once="true">
        <p className='font-bold pb-2'>All Rates Are Subject to Adjustment</p>
        <p>VanDunk Edits reserves the right to adjust the rate of a particular project. Reasons for rate adjustments include but are not limited to a request for a faster turnaround than usual, and a file for ghostwriting with poor audio quality or illegible handwriting. All rate adjustments will be communicated before work begins, giving the client an opportunity to contest. VanDunk Edits will never increase the rate after work on a project has begun.</p>
      </div>
    </>
  );
}

export default BookEditing;

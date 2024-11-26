import React, { useEffect, useState } from "react";
import { ChatIcon } from "@heroicons/react/outline"; // Importing Heroicons ChatIcon
import axios from "axios"; // Import axios to make API requests
import { motion } from "framer-motion"; // Importing Framer Motion for animations

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(
          "https://sheets.googleapis.com/v4/spreadsheets/1u0J_BUI80HVtT8znRsaShOWzZYK-NzMZ40aK7gKtZJU/values:batchGet?ranges=success_stories&key=AIzaSyD_yKv_VQnArFPkiCGZyK_d1B0kI-O8cBk"
        );
        
        const fetchData = response.data.valueRanges[0].values;

        // Skip the first row (headers) and map over the rest of the data
        const stories = fetchData.slice(1).map((row) => {
          return {
            title: row[0],  // Title is in the first column
            author: row[1],  // Author is in the second column
            imgUrl: row[2]   // Image URL is in the third column
          };
        });

        setStories(stories);
        setLoading(false); // Set loading to false after fetching
      } catch (error) {
        setError("Error fetching stories");
        console.log("Error fetching contact info", error);
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-16 h-16 border-t-4 border-emerald-800 border-solid rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{ borderTopColor: 'transparent', borderWidth: '4px', borderRadius: '50%' }}
      />
    </div>
  );

  if (error) return <div>{error}</div>;

  return (
    <>
      {/* Apply overflow-x-hidden to the main wrapper */}
      <div className="overflow-x-hidden">
        <motion.div
          className="bg-gray-100 text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-4xl text-emerald-800 font-bold">Success Stories</h3>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Title Section */}
          <motion.h1
            className="text-3xl font-semibold text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book Gallery
          </motion.h1>

          {/* Book Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                className="group flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className="relative w-80 h-auto mb-4 rounded-lg overflow-hidden shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-500 ease-in-out">
                  <motion.img
                    src={story.imgUrl}
                    alt={story.title}
                    className="w-full h-full object-cover rounded-lg"
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <motion.h3
                  className="text-2xl text-center font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {story.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-center text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {story.author}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto p-6 bg-gray-50">
          <motion.h3
            className="text-4xl text-emerald-800 font-bold text-center py-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Testimonials
          </motion.h3>
          <div className="flex flex-wrap justify-between gap-6 text-center">
            {/* Left Vertical Testimonial Box */}
            <motion.div
              className="w-full md:w-1/4 bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Testimonial Icon */}
              <div className="flex justify-center mb-4">
                <ChatIcon className="h-10 w-10 text-emerald-800" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                After 30 years as an educator, I felt it was time to stop, reflect, and write down some of my experiences. For me, this is a way to give back to future leaders who come after me. Acquiring the services of VanDunk Edits has been precisely the assistance that I needed to bring these stories and lessons to life. Not only is Pierce a prolific editor and revisor, but he also possesses a knack for encouraging, coaching, and supporting those with whom he works.
              </p>
              <h3 className="text-sm font-semibold mb-2">Dr. Irvin Scott, Senior Lecturer on Education at Harvard University December 30, 2019</h3>
            </motion.div>

            {/* Right Side: 2 Vertical Testimonial Boxes */}
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              {/* First Vertical Testimonial Box */}
              <motion.div
                className="bg-green-50 p-6 rounded-lg shadow-lg flex-grow flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Testimonial Icon */}
                <div className="flex justify-center mb-4">
                  <ChatIcon className="h-10 w-10 text-emerald-800" />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  I highly recommend Pierce VanDunk for editing services. His work is professional and he makes sure there is quick turnaround with any job he accepts. He did a fantastic job with academic papers and manuscripts for publication.
                </p>
                <h3 className="text-sm font-semibold mb-2 text-center">Rev. Dr. Cristian De La Rosa, Professor at Boston University School of Theology October 14, 2019</h3>
              </motion.div>

              {/* Second Vertical Testimonial Box */}
              <motion.div
                className="bg-purple-50 p-6 rounded-lg shadow-lg flex-grow flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Testimonial Icon */}
                <div className="flex justify-center mb-4">
                  <ChatIcon className="h-10 w-10 text-emerald-800" />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  Pierce has an awesome style of editing. He listens to what you want and he acts accordingly. Pierce truly works to please you and your desires. I have worked with several editors and he is the best!
                </p>
                <h3 className="text-sm font-semibold mb-2 text-center">Carl Ralston, Founder and President of Remember Nhu Ministries April 7, 2020.</h3>
              </motion.div>
            </div>
          </div>

          {/* Full Width Testimonial Box below */}
          <motion.div
            className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg w-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Testimonial Icon */}
            <div className="flex justify-center mb-4">
              <ChatIcon className="h-10 w-10 text-emerald-800" />
            </div>
            <p className="text-sm text-gray-600">
              My experience as a graduate student working with Pierce and his editing team was outstanding. Pierce and his knowledgeable team always responded to all emails and showed up promptly to Zoom conferences throughout the writing process. I benefited tremendously from all of the helpful comments about content, grammar, and writing clarity. Pierce’s efficiency with organizing Zoom meetings was excellent, because he answered all of my questions throughout the revision process. The editing team was terrific with reviewing footnotes and bibliographic citations as well as adhering to the paper’s deadline. From the beginning to the end of a paper revision, Pierce and his staff are extremely dedicated to achieving success and client satisfaction.
            </p>
            <h3 className="text-sm font-semibold mb-2">Wise Huston Chabot, Student at Boston University School of Theology, July 2, 2024</h3>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Stories;

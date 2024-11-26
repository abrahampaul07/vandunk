import React, { useEffect, useState } from "react";
import profile from "../assets/profile.jpeg";
import { motion } from 'framer-motion';
import axios from 'axios';

const About = () => {
  const [teamData, setTeamData] = useState([]);
  
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get(
          'https://sheets.googleapis.com/v4/spreadsheets/1u0J_BUI80HVtT8znRsaShOWzZYK-NzMZ40aK7gKtZJU/values:batchGet?ranges=about!A2:D1000&key=AIzaSyD_yKv_VQnArFPkiCGZyK_d1B0kI-O8cBk'
        );

        const data = response.data.valueRanges[0].values;

        // Skip the first row (headings) and map the rest of the data
        const formattedData = data.map(item => ({
          name: item[0],
          designation: item[1],
          description: item[2],
          image: item[3],
        }));

        setTeamData(formattedData);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <>
      <motion.div
        className="bg-gray-100 text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl text-emerald-800 font-bold">Who are we</h3>
        <p className="text-lg text-gray-600">About Pierce VanDunk and his team</p>
      </motion.div>

      <motion.div
        className="flex flex-col md:flex-row items-center justify-between md:p-28 p-6 space-y-8 md:space-y-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Side: Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={profile}
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          className="w-full md:w-1/2 md:pl-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">About Pierce</h2>
          <p className="mt-4 text-lg text-gray-600">
            Pierce VanDunk is an experienced editor, proofreader, and ghostwriter. As a Writing Consultant for the Nyack College Writing Center, he received extensive training in writing mechanics. Both undergraduate and graduate students brought their work to him for high-quality feedback. Since then, he has worked with several publishers, schools, and other organizations to help writers perfect their writing.
            <br />
            <br />
            Editing and ghostwriting are more than a job for Pierce. Helping writers externalize their ideas with clarity brings him a sense of fulfillment. He finds it enjoyable getting paid to read and write!
            <br />
            <br />
            Pierce earned his Master of Divinity from Boston University School of Theology. Living in New York, Pierce and his wife have three beautiful children.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gray-100 py-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-4xl text-emerald-800 font-bold text-center">
          Meet Our Team
        </h3>
      </motion.div>

      <div className="space-y-8 p-6 md:p-20">
        {teamData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:space-x-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Image */}
            <motion.div
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex flex-col sm:text-left text-center mt-4 sm:mt-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
              <h3 className="text-lg font-semibold text-gray-600">{item.designation}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;

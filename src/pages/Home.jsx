import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from "../assets/profile.jpeg";
import Slider from "react-slick";
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.webp';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';
import c6 from '../assets/c6.png';
import c7 from '../assets/c7.png';
import c8 from '../assets/c8.png';
import c9 from '../assets/c9.png';
import c10 from '../assets/c10.png';
import c11 from '../assets/c11.png';
import c12 from '../assets/c12.png';
import c13 from '../assets/c13.jpeg';
import c14 from '../assets/c14.png';
import c15 from '../assets/c15.png';
import { motion } from 'framer-motion';

const companyImages = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15,
];

const Home = () => {
  useEffect(() => {
    // Triggered once when the page loads
  }, []);

  const companies = [
    { logo: c1, alt: 'Company 1' },
    { logo: c2, alt: 'Company 2' },
    { logo: c3, alt: 'Company 3' },
    { logo: c4, alt: 'Company 4' },
    { logo: c5, alt: 'Company 5' },
    { logo: c6, alt: 'Company 6' },
    { logo: c7, alt: 'Company 7' },
    { logo: c8, alt: 'Company 8' },
    { logo: c9, alt: 'Company 9' },
    { logo: c10, alt: 'Company 10' },
    { logo: c11, alt: 'Company 11' },
    { logo: c12, alt: 'Company 12' },
    { logo: c13, alt: 'Company 13' },
    { logo: c14, alt: 'Company 14' },
    { logo: c15, alt: 'Company 15' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      className="full-page"
      initial={{ opacity: 0 }}        // Initial state: full page hidden
      animate={{ opacity: 1 }}        // Animate to full opacity
      transition={{ duration: 1 }}    // Duration of 1 second
    >
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4 className="font-bold text-center bg-yellow-200 p-2">
          Amplify your voice and make your writing shine!
        </h4>
      </motion.div>

      {/* Left and Right Content Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-20 bg-gray-100 overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left side */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-6 md:mb-0"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl md:w-[450px] font-semibold text-center text-gray-800 mb-4 md:mt-0 mt-10">
            Editing and Ghostwriting by Pierce VanDunk
          </h1>
          <motion.img
            src={profile}
            alt="Profile"
            className="w-full md:w-2/3 h-auto rounded-lg shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* Right side */}
        <motion.div
          className="w-full md:w-1/2 p-6 flex flex-col items-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-emerald-800 mb-10">
            OUR BUSINESS VALUES
          </h2>

          {/* Vision */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-emerald-800 mb-2">VISION</h3>
            <p className="text-gray-600">
              Our vision is to ignite the aspirations of writers by helping them amplify their voices, realize their purpose, and impact a global audience.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-emerald-800 mb-2">MISSION</h3>
            <p className="text-gray-600">
              Our mission is to provide authors, scholars, and students with high-quality editing and writing services in order to help them express and disseminate their ideas.
            </p>
          </motion.div>

          {/* Learn More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Link
              to='/services'
              className="px-6 py-3 mt-4 w-full border-2 border-emerald-800 text-emerald-800 text-lg font-semibold hover:bg-emerald-800 hover:text-white transition duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="w-full py-10 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-semibold text-center text-emerald-800 mb-6">
          Publishers, Schools, and Other Organizations We’ve Worked With
        </h2>

        <motion.div
          className="w-full overflow-hidden px-4 md:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Slider {...settings}>
            {companies.map((company, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <motion.img
                  src={company.logo}
                  alt={company.alt}
                  className="w-36 h-36 object-contain mx-auto"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </motion.div>

      {/* Final Section */}
      <motion.div
        className="bg-gray-100 md:py-10 md:px-20 p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-emerald-800 text-center pb-10">
          Editing Makes the Difference
        </h2>
        <p>
          You’ve read a piece of writing that appears precise and professional. You’ve also read something that came off wordy, unclear, or haphazardly put together. What makes some writing stand out as excellent, while other works seem mediocre or worse? Editing.
          Editing makes the difference. <br />
          <br />
          Do you want seamless transitions, strong diction, and an absence of typos and grammatical mistakes? VanDunk Edits is for you. Turn your rough draft into an article ready to be submitted for publication. Transform your notes and lectures into a book manuscript. After endless hours of research, craft a dissertation ready for defense. All with the help of a professional editor. <br />
          <br />
          With more than a decade of editing and transcription experience, Pierce VanDunk and his team are ready to help. The VanDunk Edits team wants to do more than insert a few commas and take your money. They will add a professional quality to your work, making your ideas clear and your readers pleased. Their rates are affordable, their turnaround time is quick, and they truly enjoy their work.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Home;

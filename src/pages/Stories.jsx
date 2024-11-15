import React, { useEffect } from "react";
import { ChatIcon } from "@heroicons/react/outline"; // Importing Heroicons ChatIcon
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpg';
import b7 from '../assets/b7.jpg';
import b8 from '../assets/b8.jpg';
import b9 from '../assets/b9.jpg';
import b10 from '../assets/b10.webp';
import b11 from '../assets/b11.jpg';
import b12 from '../assets/b12.jpg';
import b13 from '../assets/b13.jpg';
import b14 from '../assets/b14.jpg';
import b15 from '../assets/b15.jpg';
import b16 from '../assets/b16.jpg';
import b17 from '../assets/b17.jpg';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const books = [
  { title: 'Before You Climb Any Higher', author: 'by Jonathan McReynolds', imgUrl: b1 },
  { title: 'How to Work with Complicated People', author: 'by Ryan Leak', imgUrl: b2 },
  { title: 'The Coming Golden Age', author: 'by Dr. David Jeremiah', imgUrl: b3 },
  { title: 'This Far', author: 'by Allison Holker', imgUrl: b4 },
  { title: 'The New Rules of Investing', author: 'by Mark Haefele, Richard C. Morais', imgUrl: b5 },
  { title: 'Reviving Mission', author: 'by Linson Daniel, Jon Hietbrink, Eric Rafferty', imgUrl: b6 },
  { title: 'Leading with Heart and Soul', author: 'by Irvin L. Scott', imgUrl: b7 },
  { title: 'Making Marriage Beautiful', author: 'by Dorothy Littell Greco', imgUrl: b8 },
  { title: 'Marriage in the Middle', author: 'by Dorothy Littell Greco', imgUrl: b9 },
  { title: 'Start Strong', author: 'by Dorothy Littell Greco', imgUrl: b10 },
  { title: 'The Faith Impact Freedom Method', author: 'by Isaiah Grant', imgUrl: b11 },
  { title: 'Ignite', author: 'by Neil Greene', imgUrl: b12 },
  { title: 'H.E.L.P.: A Practical Guide to Leadership Growth from the Inside Out', author: 'by Dr. Jolander A. Headley', imgUrl: b13 },
  { title: 'Leading Through Storms', author: 'by Geoffrey V. Dudley Sr., Thomas Walter', imgUrl: b14 },
  { title: 'Always March Ahead: The Martin Luther King Jr. Leadership Reader', author: 'by Robert F. Smith', imgUrl: b15 },
  { title: 'Not Quite Fine', author: 'by Carlene Hill Byron', imgUrl: b16 },
  { title: 'Resonate', author: 'by Lisa Washington Lamb', imgUrl: b17 },
];

const Stories = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a duration of 1 second
    AOS.refresh();  // Refresh AOS to apply animations
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-center py-16" data-aos="fade-up" data-aos-once="true">
        <h3 className="text-4xl text-emerald-800 font-bold">Success Stories</h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Title Section */}
        <h1 className="text-3xl font-semibold text-center mb-8" data-aos="fade-up" data-aos-once="true">
          Book Gallery
        </h1>

        {/* Book Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <div key={index} className="group flex flex-col items-center" data-aos="fade-up" data-aos-delay={`${index * 100}`} data-aos-once="true">
              <div className="relative w-80 h-auto mb-4 rounded-lg overflow-hidden shadow-xl group-hover:scale-105 group-hover:shadow-2xl transition-transform duration-500 ease-in-out">
                <img src={book.imgUrl} alt={book.title} className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out" />
              </div>
              <h3 className="text-2xl text-center font-semibold">{book.title}</h3>
              <p className="text-sm text-center text-gray-500">{book.author}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto p-6 bg-gray-50">
        <h3 className="text-4xl text-emerald-800 font-bold text-center py-10" data-aos="fade-up" data-aos-once="true">
          Testimonials
        </h3>
        <div className="flex flex-wrap justify-between gap-6 text-center">
          {/* Left Vertical Testimonial Box */}
          <div className="w-full md:w-1/4 bg-blue-50 p-6 rounded-lg shadow-lg flex flex-col justify-between" data-aos="fade-right" data-aos-once="true">
            {/* Testimonial Icon */}
            <div className="flex justify-center mb-4">
              <ChatIcon className="h-10 w-10 text-emerald-800" />
            </div>
            <p className="text-sm text-gray-600 mb-4">
              After 30 years as an educator, I felt it was time to stop, reflect, and write down some of my experiences. For me, this is a way to give back to future leaders who come after me. Acquiring the services of VanDunk Edits has been precisely the assistance that I needed to bring these stories and lessons to life. Not only is Pierce a prolific editor and revisor, but he also possesses a knack for encouraging, coaching, and supporting those with whom he works.
            </p>
            <h3 className="text-sm font-semibold mb-2">Dr. Irvin Scott, Senior Lecturer on Education at Harvard University December 30, 2019</h3>
          </div>

          {/* Right Side: 2 Vertical Testimonial Boxes */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            {/* First Vertical Testimonial Box */}
            <div className="bg-green-50 p-6 rounded-lg shadow-lg flex-grow flex flex-col items-center justify-center" data-aos="fade-left" data-aos-once="true">
              {/* Testimonial Icon */}
              <div className="flex justify-center mb-4">
                <ChatIcon className="h-10 w-10 text-emerald-800" />
              </div>
              <p className="text-sm text-gray-600 text-center">
                I highly recommend Pierce VanDunk for editing services. His work is professional and he makes sure there is quick turnaround with any job he accepts. He did a fantastic job with academic papers and manuscripts for publication.
              </p>
              <h3 className="text-sm font-semibold mb-2 text-center">Rev. Dr. Cristian De La Rosa, Professor at Boston University School of Theology October 14, 2019</h3>
            </div>

            {/* Second Vertical Testimonial Box */}
            <div className="bg-purple-50 p-6 rounded-lg shadow-lg flex-grow flex flex-col items-center justify-center" data-aos="fade-left" data-aos-once="true">
              {/* Testimonial Icon */}
              <div className="flex justify-center mb-4">
                <ChatIcon className="h-10 w-10 text-emerald-800" />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Pierce has an awesome style of editing. He listens to what you want and he acts accordingly. Pierce truly works to please you and your desires. I have worked with several editors and he is the best!
              </p>
              <h3 className="text-sm font-semibold mb-2 text-center">Carl Ralston, Founder and President of Remember Nhu Ministries April 7, 2020.</h3>
            </div>
          </div>
        </div>

        {/* Full Width Testimonial Box below */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg w-full text-center" data-aos="fade-up" data-aos-once="true">
          {/* Testimonial Icon */}
          <div className="flex justify-center mb-4">
            <ChatIcon className="h-10 w-10 text-emerald-800" />
          </div>
          <p className="text-sm text-gray-600">
            My experience as a graduate student working with Pierce and his editing team was outstanding. Pierce and his knowledgeable team always responded to all emails and showed up promptly to Zoom conferences throughout the writing process. I benefited tremendously from all of the helpful comments about content, grammar, and writing clarity. Pierce’s efficiency with organizing Zoom meetings was excellent, because he answered all of my questions throughout the revision process. The editing team was terrific with reviewing footnotes and bibliographic citations as well as adhering to the paper’s deadline. From the beginning to the end of a paper revision, Pierce and his staff are extremely dedicated to achieving success and client satisfaction.
          </p>
          <h3 className="text-sm font-semibold mb-2">Wise Huston Chabot, Student at Boston University School of Theology, July 2, 2024</h3>
        </div>
      </div>
    </>
  );
};

export default Stories;

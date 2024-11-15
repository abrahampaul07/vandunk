import React, { useEffect } from "react";
import profile from "../assets/profile.jpeg";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.jpeg';
import p8 from '../assets/p8.jpeg';
import p9 from '../assets/p9.png';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS for styles

const containerData = [
  {
    image: p1,
    title: "Gisel Ureña",
    designation: "Business Development and Administration Executive",
    description:
      "Gisel started her entrepreneurial journey at the age of 14, founding her first business in makeup artistry at the age of 15. Through this experience she discovered her ability to strategize and execute the birth of a profitable business. As a visionary, she thrives in leading positive and impactful change, always prioritizing quality and excellence. From VE’s early stages, Gisel has worked side by side with Pierce VanDunk on the formation of the company’s infrastructure and expansion for longterm success. Gisel is committed to the evolution of VanDunk Edits!",
  },
  {
    image: p2,
    title: "Cynthia Otukwu",
    designation: "Social Media Marketing Specialist",
    description: "Chisom Cynthia Otukwu holds a BSc from Nnamdi Azikiwe University and specializes in Social Media Marketing. With three sisters, she cherishes the strong bond and support they share as a family. As a social media marketing specialist, Chisom enjoys the creativity her role allows, bringing innovative ideas to life in her work.",
  },
  {
    image: p3,
    title: "Elisa Rowe",
    designation: "Editor and Organizational Liaison",
    description: "Elisa edits academic and nonacademic texts, and they especially love pieces that use storytelling. They have experience editing poetry and love giving poets feedback! As an organizational liaison, they work with presses and universities to generate new projects and coordinates editing and educational services. Outside of VanDunk Edits, they are a book reviewer at Kirkus, a freelance journalist, an editor at Game Over Books, and a poet. Their debut chapbook Every Imagined Tundra was published in 2022 by Bottlecap Press.",
  },
  {
    image: p4,
    title: "Dorothy Littell Greco",
    designation: "Editor",
    description: "Dorothy Littell Greco works as a writer, editor, and photographer. She sees herself as a journalist with prophetic and pastoral leanings. She has written two books (Making Marriage Beautiful and Marriage in the Middle) and is currently finishing her third, which focuses on misogyny. Dorothy enjoys doing content editing and coaching. (Her database includes all things church related, healing, parenting, and marriage.) She and her husband Christopher love to kayak, bike, travel, and share good food with friends.",
  },
  {
    image: p5,
    title: "Daniel Hauge",
    designation: "Editor",
    description: "Dan Hauge has a long career writing and editing in the humanities and social sciences, with a PhD in Practical Theology from Boston University School of Theology. His primary interests are in diversity and equity, psychology, and liberation theology. Currently he works in the DEI office at North Shore Community College in Lynn, Massachusetts. He is married to Ana Maria and they live with their cat, Alves, on the coast north of Boston.",
  },
  {
    image: p6,
    title: "Andrew Edward",
    designation: "Editor",
    description: "Andrew (he goes by Drew most of the time) holds a Master of Divinity from Princeton Theological Seminary, and he currently works at that institution in the Office of Advancement. He lives happily with his wife and two cats. He enjoys doctoral dissertation editing the most since it is rigorous and, at the same time, he gets to learn something new!",
  },
  {
    image: p7,
    title: "Lauren Hickey",
    designation: "Editor",
    description: "Lauren holds a Master of Divinity from Boston University School of Theology and is currently pursuing a PhD in Integral Noetic Sciences at the California Institute for Human Science where she researches expanded states of consciousness and spiritual and anomalous experiences. With an interdisciplinary background in the humanities, psychology, and biofield science, she most enjoys editing doctoral dissertations. A long-time student of inner alchemical practices, she teaches Kundalini Yoga and energetic techniques for personal transformation. She has worked as a freelance writer and editor for over a decade, and lives with her partner Kyle on the Eastern Shore of Maryland.",
  },
  {
    image: p8,
    title: "Amanda Cherry",
    designation: "Editor",
    description: "",
  },
  {
    image: p9,
    title: "Sheila Owen",
    designation: "Citation and Formatting Specialist",
    description: "Sheila Owen has developed an aptitude for editing citations and bibliographies through years of helping graduate students find resources and then figure out how to cite them. After having lived in eleven towns in six states, she has spent the last twenty-four years as an academic librarian in Memphis, TN. A brief career as a middle-school English teacher immediately after college made graduate school very attractive. In 1994 she switched to library science, and ever since, she has delighted in her love of words, stories, and seeing the light go on in people’s heads when they learn something new.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // Initialize AOS with a duration of 1 second
    AOS.refresh();  // Refresh AOS to apply animations
  }, []);

  return (
    <>
      <div className="bg-gray-100 text-center py-16" data-aos="fade-up" data-aos-once="true">
        <h3 className="text-4xl text-emerald-800 font-bold">Who are we</h3>
        <p>About Pierce VanDunk and his team</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between md:p-28 p-3 space-y-8 md:space-y-0">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2" data-aos="fade-right" data-aos-once="true">
          <img
            src={profile}
            alt="Placeholder"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 md:pl-8" data-aos="fade-left" data-aos-once="true">
          <h2 className="text-3xl font-bold text-gray-800">About Pierce</h2>
          <p className="mt-4 text-lg text-gray-600">
            Pierce VanDunk is an experienced editor, proofreader, and
            ghostwriter. As a Writing Consultant for the Nyack College Writing
            Center he received extensive training in writing mechanics. Both
            undergraduate and graduate students brought their work to him for
            high-quality feedback. Since then, he has worked with several
            publishers, schools, and other organizations to help writers perfect
            their writing.
            <br />
            <br />
            Editing and ghostwriting are more than a job for Pierce. Helping
            writers externalize their ideas with clarity brings him a sense of
            fulfillment. He finds it enjoyable getting paid to read and write!
            <br />
            <br />
            Pierce earned his Master of Divinity from Boston University School
            of Theology. Living in New York, Pierce and his wife have three
            beautiful children.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 py-7" data-aos="fade-up" data-aos-once="true">
        <h3 className="text-4xl text-emerald-800 font-bold text-center">
          Team
        </h3>
      </div>

      <div className="space-y-8 p-6 md:p-20">
        {containerData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:space-x-8 rounded-lg shadow-md"
            data-aos="fade-up" data-aos-once="true" data-aos-duration="1200"
          >
            {/* Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden flex-shrink-0 mb-4 sm:mb-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="flex flex-col sm:text-left text-center">
              <h4 className="text-xl font-bold text-gray-800">{item.title}</h4>
              <h3 className="text-lg font-semibold text-gray-600">{item.designation}</h3>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;

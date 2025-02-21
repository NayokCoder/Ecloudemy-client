import React from "react";
import { motion } from "framer-motion";

const AboutUS = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center justify-center ">
      <h1 className="text-6xl font-bold mb-4 text-blue-900">About Us </h1>
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-4xl ">
          <div>
            <div className="">
              <h1 className="text-4xl font-bold mb-4 text-center text-secondary">Welcome to Career Growth Platform</h1>
              <p className="text-lg mb-8 text-center">"We guide you through every stage of your learning and career path to become Zero to mastery professional, getting hired and for a successful and rewarding career."</p>
            </div>
          </div>
          <div className="text-gray-900 p-6 rounded-xl mb-6">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <div className="w-full md:w-[65%]">
                <div className="flex gap-5 items-center py-1">
                  <img src="assets/icons8-team-goal-96.png" alt="Mission Icon" className="rounded-b-full" />
                  <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
                  {/* <img src="assets/icons8-mission-64 (1).png" alt="Mission Icon" />
                  <img src="assets/icons8-launch-80.png" alt="Mission Icon" /> */}
                </div>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                  Our mission is to empower individuals and organizations by providing high-quality, practical training in Microsoft Dynamics 365 & other cloud platform solutions. We are dedicated to delivering comprehensive learning experiences that equip our learners with the skills, knowledge, and confidence to excel in the dynamic world of business applications. Through expert instruction, real-world scenarios, and continuous support, we aim to foster innovation, improve efficiency, and
                  drive success in professional careers.
                </p>
              </div>
              <img src="assets/file-20210809-25-149neyb.avif" alt="Mission Image" className="w-full md:w-[35%] object-cover rounded-2xl" />
            </div>
          </div>

          <div className="text-gray-900 p-6 rounded-xl mb-8">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <img src="assets/our-vision-concept-business-technology-internet_220873-13795.avif" alt="Vision Image" className="w-full md:w-[35%] lg:h-[290px] object-cover rounded-2xl" />
              <div className="w-full md:w-[65%]">
                <div className="flex gap-4 items-center py-1">
                  <img src="assets/icons8-opencv-96.png" alt="Vision Icon" />
                  <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">Our vision is to become the leading innovative and impactful training provider for Microsoft Dynamics 365 and other cloud platform solutions pertaining to resource development & talent growth while fostering a global community of empowered learners and experts.</p>
              </div>
            </div>
          </div>

          <div className=" text-gray-900 p-6 rounded-xl ">
            <h2 className="text-2xl font-semibold mb-3">We Facilitate:</h2>
            <ul className="list-disc list-inside text-lg">
              <li>Mentoring</li>
              <li>Upskilling</li>
              <li>Career Placement</li>
              <li>Earning</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUS;

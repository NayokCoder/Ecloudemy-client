import React from "react";
import { motion } from "framer-motion";

const AboutUS = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center justify-center ">
      <img src="/assets/about_us-removebg-preview.png" alt="about us" />
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <div className="max-w-4xl ">
          <div className="text-gray-900 p-6 rounded-xl mb-6">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <div className="w-full md:w-[65%]">
                <div className="flex gap-5 items-center py-1">
                  <img src="/assets/icons8-team-goal-96.png" alt="Mission Icon" className="rounded-b-full" />
                  <h2 className="text-2xl font-bold text-blue-900">Our Mission</h2>
                  {/* <img src="assets/icons8-mission-64 (1).png" alt="Mission Icon" />
                  <img src="assets/icons8-launch-80.png" alt="Mission Icon" /> */}
                </div>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">
                  Our mission is to empower individuals and organizations by providing high-quality, practical training in Microsoft Dynamics 365 & other cloud platform solutions. We are dedicated to delivering comprehensive learning experiences that equip our learners with the skills, knowledge, and confidence to excel in the dynamic world of business applications. Through expert instruction, real-world scenarios, and continuous support, we aim to foster innovation, improve efficiency, and
                  drive success in professional careers.
                </p>
              </div>
              <img src="/assets/business-strategy-success-target-goals.jpg" alt="Mission Image" className="w-full md:w-[35%] object-cover rounded-2xl" />
            </div>
          </div>

          <div className="text-gray-900 p-6 rounded-xl mb-8">
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <img src="/assets/youngsters-communicating-class.jpg" alt="Vision Image" className="w-full md:w-[35%] lg:h-[290px] object-cover rounded-2xl" />
              <div className="w-full md:w-[65%]">
                <div className="flex gap-4 items-center py-1">
                  <img src="assets/icons8-opencv-96.png" alt="Vision Icon" />
                  <h2 className="text-2xl font-bold text-blue-900">Our Vision</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 text-justify">Our vision is to become the leading innovative and impactful training provider for Microsoft Dynamics 365 and other cloud platform solutions pertaining to resource development & talent growth while fostering a global community of empowered learners and experts.</p>
              </div>
            </div>
          </div>

          <div className=" text-gray-900  rounded-xl ">
            <h2 className="text-5xl  mb-10 text-blue-900 font-bold text-center">We Facilitate</h2>
            <div className="flex flex-wrap justify-center gap-6 ">
              {/* Mentoring Section */}
              <section className="flex flex-col items-center w-full sm:w-[48%] lg:w-[22%] py-10 bg-pink-400 text-center rounded-2xl">
                <button className="flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
                  <img src="/assets/icons8-mentoring-64.png" alt="Mentoring" className="w-14 h-14" />
                </button>
                <h2 className="text-2xl font-bold mt-4 text-white">Mentoring</h2>
              </section>

              {/* Upskilling Section */}
              <section className="flex flex-col items-center w-full sm:w-[48%] lg:w-[22%] py-10 bg-teal-400 text-center rounded-2xl">
                <button className="flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
                  <img src="/assets/icons8-skill-96.png" alt="Upskilling" className="w-14 h-14" />
                </button>
                <h2 className="text-2xl font-bold mt-4 text-white">Upskilling</h2>
              </section>

              {/* Career Placement Section */}
              <section className="flex flex-col items-center w-full sm:w-[48%] lg:w-[22%] py-10 bg-blue-400 text-center rounded-2xl">
                <button className="flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
                  <img src="/assets/icons8-career-100.png" alt="Career Placement" className="w-14 h-14" />
                </button>
                <h2 className="text-2xl font-bold mt-4 text-white">Career Placement</h2>
              </section>

              {/* Earning Section */}
              <section className="flex flex-col items-center w-full sm:w-[48%] lg:w-[22%] py-10 bg-purple-400 text-center rounded-2xl">
                <button className="flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-lg">
                  <img src="/assets/icons8-earning-96.png" alt="Earning" className="w-14 h-14" />
                </button>
                <h2 className="text-2xl font-bold mt-4 text-white">Earning</h2>
              </section>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUS;

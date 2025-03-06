import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const MemberShip = () => {
  const tiers = [
    {
      name: "Other Platforms",
      price: "$10-$500",
      features: ["Access to courses on a variety of topics", "Set your own pace and learn part-time", "Large selection of courses from various instructors", "Often no career support", "Certificate upon completion"],
    },
    {
      name: "Zero To Mastery",
      price: "$25-$1,298",
      highlight: true,
      features: ["Get a clear step-by-step career roadmap to get hired (or grow your own business)", "Be part of a professional community of students, mentors, and instructors that will help you every step of the way", "Learn up-to-date skills that companies actually hire for (no more outdated courses!)", "Learn from world-class instructors that have real-world experience in the industry, including Google and Amazon", "Learn at your own pace, cancel anytime, and study anywhere"],
    },
    {
      name: "Bootcamps & College",
      price: "$8,000+",
      features: ["Set class schedule that might not work for your needs", "Get career counseling and help with your resume", "Structured program with set start and end dates", "Learn in person and get to know your classmates", "Have your own dedicated teacher for the program", "Have your own dedicated teacher for the program"],
    },
  ];

  return (
    <section className="lightBlue py-16 px-6 mx-10">
      <div className=" max-w-[1440px] mx-auto  ">
        <h2 className="text-4xl font-bold mb-8">Here's how ZTM compares to other options</h2>

        {/* Comparison Grid */}
        <div className=" md:flex space-y-4 sm:mt-40 mx-auto">
          {/* Other Platforms */}
          <div className="h-fit sm:w-lg  sm:rounded-bl-3xl shadow-lg bg-white text-gray-700 mx-auto ">
            <h3 className="text-3xl sm:text-4xl h-48 bg-gray-800 font-semibold  sm:rounded-tl-3xl  text-white flex flex-col items-center justify-center text-center">
              Other Platforms
              <span className="block text-2xl sm:text-3xl">$10-$500</span>
            </h3>

            <div className="mt-4 p-8 space-y-4 w-full">
              {["An endless cycle of tutorials without a clear career plan.", "Get frustrated and stuck learning by yourself with no help.", "Instructor are just influencers with no real-world job experience."].map((text, index) => (
                <div key={index} className="flex gap-2 sm:gap-4 items-start text-lg sm:text-xl">
                  <FaCheckCircle className="min-w-5 sm:min-w-10  text-3xl sm:text-4xl " />
                  <p className="max-w-full sm:max-w-80">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <motion.div whileHover={{ scale: 1.05, transition: { duration: 2, ease: "easeOut", transformOrigin: "center" } }} whileTap={{ scale: 0.9, transition: { duration: 2, ease: "easeInOut" } }}>
              <div className="h-fit max-w-lg  bg-white rounded-3xl sm:rounded-3xl shadow-lg text-gray-700 mx-auto sm:-mt-25 ">
                <h3 className="text-3xl sm:text-4xl h-48 bg-secondary font-semibold  rounded-t-3xl text-white flex flex-col items-center justify-center text-center z-10">
                  Zero To Mastery
                  <span className="block text-2xl sm:text-3xl">$25-$1,298</span>
                </h3>

                <div className="mt-4 p-8 space-y-4 ">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-4 text-lg sm:text-xl">
                      <FaCheckCircle className="min-w-5 sm:min-w-10  text-secondary text-3xl sm:text-4xl" />
                      <p className="">
                        <span className="font-bold text-gray-600">Get a clear step-by-step career roadmap</span> to go from zero (or any skill level) to getting hired or promoted.
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-8">
                  <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} whileDrag={{ scale: 0.9, rotate: 10 }} drag className="btn btn-block mt-3 p-8 mb-8 bg-pink-600  text-white font-bold text-2xl  rounded-full shadow-lg hover:bg-pink-700 transition duration-300 ">
                    JOIN ZERO TO MASTERY
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bootcamps & College */}
          <div className="h-fit  sm:w-lg  sm:rounded-br-3xl shadow-lg bg-white text-gray-700 min-h-[450px] mx-auto  ">
            <h3 className="text-3xl sm:text-4xl h-48 bg-gray-800 font-semibold  sm:rounded-tr-3xl text-white flex flex-col items-center justify-center text-center">
              Other Platforms
              <span className="block text-2xl sm:text-3xl">$10-$500</span>
            </h3>

            <div className="mt-4 p-8 space-y-4 w-full">
              {["An endless cycle of tutorials without a clear career plan.", "Get frustrated and stuck learning by yourself with no help.", "Instructor are just influencers with no real-world job experience.", "You'll hear your classmates rave about ZTM.", "You'll hear your classmates rave about ZTM."].map((text, index) => (
                <div key={index} className="flex gap-2 sm:gap-4 items-start text-lg sm:text-xl">
                  <FaCheckCircle className="min-w-5 sm:min-w-10 text-3xl sm:text-4xl " />
                  <p className="max-w-full sm:max-w-80">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemberShip;

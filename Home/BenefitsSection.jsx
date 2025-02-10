import React from "react";
import { motion } from "framer-motion";

const BenefitsSection = () => {
  return (
    <section className="relative mt-10">
      {/* Top Section */}
      <div className="blue text-white py-12 px-6">
        <div className="max-w-7xl mx-auto mb-32">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Benefits of joining Zero To Mastery</h2>
          <p className="mb-12 text-center text-sm md:text-base">We help you at every step of your learning and career journey. From beginner to getting hired to advancing your skills and having a successful, rewarding career.</p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="p-4 md:p-6 rounded-2xl flex gap-4 md:gap-5">
              <img src="../public/assets/Portfolio.svg" alt="" className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Build a portfolio of projects that make you stand out</h3>
                <p className="text-sm md:text-base">The projects we help you build are professional, real-world apps that will make your portfolio stand out and impress potential employers.</p>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-2xl flex gap-4 md:gap-5">
              <img src="../public/assets/Get_hired.svg" alt="" className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Get hired, in record time</h3>
                <p className="text-sm md:text-base">
                  Stop wasting time on endless tutorials. Our step-by-step Career Paths give you an exact roadmap to go from any background to getting hired. <strong>No university degree required.</strong>
                </p>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-2xl flex gap-4 md:gap-5">
              <img src="../public/assets/Get_promoted.svg" alt="" className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Get promoted, become top 10%</h3>
                <p className="text-sm md:text-base">Our intermediate and advanced courses help you continue to build your skills so that you can land senior roles and be recognized as a top tech professional.</p>
              </div>
            </div>

            <div className="p-4 md:p-6 rounded-2xl flex gap-4 md:gap-5">
              <img src="../public/assets/Anytime.svg" alt="" className="w-16 h-16 md:w-20 md:h-20" />
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">Gain the freedom to work anytime, anywhere</h3>
                <p className="text-sm md:text-base">We help you acquire top skills that allow you to work anywhere in the world at higher income levels. Build your dream career or become your own boss, no matter your experience level.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 20,
          duration: 1.0, // extra smooth duration
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
      >
        <section className="bg-white py-6 px-4 shadow-lg rounded-3xl w-full  mx-auto absolute left-1/2 transform -translate-x-1/2 top-[90%] md:top-[75%] lg:top-[80%]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="p-4 md:p-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
                We can help you build your dream career, <span className="text-blue-700">even if ...</span>
              </h3>
              <ul className="list-disc list-inside space-y-4 md:space-y-5 text-sm md:text-base text-gray-800">
                <li>
                  You're <strong>completely new</strong> to tech and have never worked with A.I. or written a line of code before!
                </li>
                <li>
                  You've <strong>struggled</strong> learning to code or using A.I. tools in the past.
                </li>
                <li>
                  You've wondered "<strong>am I too old</strong> to start something new?"
                </li>
                <li>
                  You're completely <strong>overwhelmed</strong> and have no idea where to start.
                </li>
              </ul>
            </div>

            {/* Right Content */}
            <div className="blue  lg:w-[400px] h-auto text-white p-6 md:p-8 rounded-2xl shadow-md text-center flex items-center">
              <div className="w-full">
                <h4 className="text-2xl md:text-[36px] lg:text-[40px] text-cyan-200 font-semibold mb-4">Sound like you?</h4>
                <p className="mb-6 text-sm md:text-base">
                  If so, take our Tech Career Path Quiz now to get a <strong>personalized, step-by-step roadmap</strong> to achieving your dream career.
                </p>
                <a href="#" className="bg-white text-blue-700 px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-lg font-semibold hover:bg-gray-100 transition">
                  GET MY CAREER PATH
                </a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </section>
  );
};

export default BenefitsSection;

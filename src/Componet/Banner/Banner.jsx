import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
      <div className="text-center py-16 bg-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold text-black">Learn in-demand skills.</h1>

        <div className="roller text-3xl md:text-4xl xl:text-5xl  font-bold text-pink-600 mt-2 relative h-16 overflow-hidden flex justify-center items-center">
          <div id="rolltext" className="absolute flex flex-col animate-scroll main">
            <span>HTML</span>
            <span>CSS</span>
            <span>Curiosity</span>
          </div>
        </div>
        <p className="text-gray-600 text-lg px-3 mt-4">Upgrade your earning power with courses taught by industry experts. Always up-to-date.</p>

        <div className="mt-8 flex flex-col md:flex-row px-3 justify-center gap-6">
          <button className="bg-pink-600 text-white font-bold text-lg px-6 py-3 rounded-full shadow-lg hover:bg-pink-700 transition duration-300">SEE ALL COURSES</button>
          <button className="text-pink-600 font-bold text-lg hover:underline">
            <Link to="admin-panel-2025">OR</Link> TAKE OUR CAREER QUIZ
          </button>
        </div>

        <p className="text-gray-600 text-sm mt-6">
          Excellent <span className="font-bold">4.9</span> out of 5 ⭐ <span className="text-green-600 font-bold">Trustpilot</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutUS from "../../Pages/AboutUS";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 1 ? 2 : 1));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = (buttonType) => {
    if (buttonType === "readMore") {
      setShowAboutUs(true);
    } else {
      setShowAboutUs(false);
    }
  };
  const toggleAboutUs = () => {
    setShowAboutUs((prev) => !prev);
  };

  return (
    <>
      <section>
        <div className="max-w-[1440px] mx-auto relative rounded-lg overflow-hidden">
          <div className="relative h-[50vh] md:h-[100vh] mb-72 md:mb-0">
            {/* Slide 1 */}
            {currentSlide === 1 && (
              <div
                className="absolute inset-0 transition-opacity duration-1000 opacity-100"
                style={{
                  backgroundImage: "url('assets/MainBanner2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderbottomRadius: "16px",
                }}
              >
                <div className="items-start  top-10/10 absolute md:top-7/10 lg:top-6/9 md:left-3/11 md:transform md:-translate-x-1/2 md:-translate-y-1/2 space-y-3 md:w-1/2">
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-blue-900">Welcome to Career</h1>
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-secondary">Growth Platform</h1>
                  <p className="text-center  px-8 md:px-0 md:text-start md:w-3/4">We guide you through every stage of your learning and career path to become Zero to mastery professional, getting hired and for a successful and rewarding career.</p>

                  <button onClick={toggleAboutUs} className="btn btn-wide border-0 bg-secondary text-white rounded-full px-6 py-3 text-lg md:text-xl flex items-center justify-center mx-auto md:mx-0 shadow-lg hover:bg-secondary-dark transition">
                    {showAboutUs ? <MdKeyboardDoubleArrowUp /> : "Read More"}
                  </button>
                </div>
              </div>
            )}

            {/* Slide 2 */}
            {currentSlide === 2 && (
              <div
                className="absolute inset-0 transition-opacity duration-1000 opacity-100"
                style={{
                  backgroundImage: "url('assets/MainBanner2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderbottomRadius: "16px",
                }}
              >
                <div className="items-start  top-10/10 absolute md:top-7/10 lg:top-6/9 md:left-3/11 md:transform md:-translate-x-1/2 md:-translate-y-1/2 space-y-3 md:w-1/2">
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-blue-900">Online</h1>
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-secondary">Webinar</h1>
                  <p className="text-center  px-8 md:px-0 md:text-start md:w-3/4 uppercase">
                    <span className="font-semibold">Webinar Topic :</span> Dynamics 365 Career Insights.
                  </p>
                  <div className="flex justify-center md:justify-start gap-2">
                    <img src="/public/assets/icons8-date-100.png" alt="" className="w-6 h-6" />
                    <p className="text-center font-semibold md:px-0 md:text-start ">17th April 2025</p>
                    <img src="/public/assets/icons8-time-100.png" alt="" className="w-6 h-6" />
                    <p className="text-center font-semibold md:px-0 md:text-start ">9.30 PM</p>
                  </div>

                  <Link to="/register" onClick={() => handleButtonClick("register")} className="btn btn-wide border-0 bg-secondary text-white rounded-full px-6 py-3 text-lg md:text-xl flex items-center justify-center mx-auto md:mx-0 shadow-lg hover:bg-secondary-dark transition">
                    Register Now
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Pagination Buttons */}
        <div className="flex w-full justify-center gap-2 py-4">
          <button className={`btn btn-xs border-0 transition-all ${currentSlide === 1 ? "bg-secondary text-white" : "bg-gray-300"}`} onClick={() => setCurrentSlide(1)}>
            1
          </button>
          <button className={`btn btn-xs border-0 transition-all ${currentSlide === 2 ? "bg-secondary text-white" : "bg-gray-300"}`} onClick={() => setCurrentSlide(2)}>
            2
          </button>
        </div>
      </section>

      {/* Show AboutUS component when "Read More" is clicked */}
      {showAboutUs && <AboutUS />}
    </>
  );
};

export default Banner;

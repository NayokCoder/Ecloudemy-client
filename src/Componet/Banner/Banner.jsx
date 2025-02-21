import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AboutUS from "../../Pages/AboutUS";

const slides = [
  {
    id: 1,
    title: "Welcome to Career",
    subtitle: "Growth Platform",
    description: `"We guide you through every stage of your learning and career path to become Zero to mastery professional, getting hired and for a successful and rewarding career."`,
    buttonText: "Read More",
  },
  {
    id: 2,
    title: "Online",
    subtitle: "Webiner",
    description: `Webinar Topic : ELEVATE YOUR CARRER IN MICROSOFT DYNAMICS 365 . `,
    date: "Date : 14th April 2025",
    buttonText: "Register Now",
    link: "/register",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAboutUs, setShowAboutUs] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 60000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <>
      <section>
        <div className="max-w-[1440px] mx-auto relative rounded-2xl overflow-hidden">
          <div className="relative h-[50vh] md:h-[100vh] mb-72 md:mb-0">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                style={{
                  backgroundImage: "url('assets/MainBanner2.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "16px",
                }}
              >
                <div className="items-start  top-10/10 absolute md:top-7/10 lg:top-6/9 md:left-3/11 md:transform md:-translate-x-1/2 md:-translate-y-1/2 space-y-3 md:w-1/2">
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-blue-900">{slide.title}</h1>
                  <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-secondary">{slide.subtitle}</h1>
                  <p className="text-center font-semibold px-8 md:px-0 md:text-start md:w-3/4">{slide.description}</p>
                  <p className="text-center font-semibold md:px-0 md:text-start md:w-3/4">{slide.date}</p>

                  {/* Conditionally render either a button or a link */}
                  {slide.buttonText === "Read More" ? (
                    <button onClick={() => setShowAboutUs(true)} className="btn btn-wide border-0 bg-secondary text-white rounded-full px-6 py-3 text-lg md:text-xl flex items-center justify-center mx-auto md:mx-0 shadow-lg hover:bg-secondary-dark transition">
                      {slide.buttonText}
                    </button>
                  ) : (
                    <Link to={slide.link} className="btn btn-wide border-0 bg-secondary text-white rounded-full px-6 py-3 text-lg md:text-xl flex items-center justify-center mx-auto md:mx-0 shadow-lg hover:bg-secondary-dark transition">
                      {slide.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-4">
          {slides.map((_, index) => (
            <button key={index} className={`btn btn-xs border-0 transition-all ${currentSlide === index ? "bg-secondary text-white" : "bg-gray-300"}`} onClick={() => setCurrentSlide(index)}>
              {index + 1}
            </button>
          ))}
        </div>
      </section>

      {/* Show AboutUS component when "Read More" is clicked */}
      {showAboutUs && <AboutUS />}
    </>
  );
};

export default Banner;

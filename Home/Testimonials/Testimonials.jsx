import { FaLinkedin, FaPlayCircle } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Justin Lin",
    role: "Software Engineer",
    company: "Amazon",
    image: "https://i.ibb.co.com/tTMsVjvf/download-1.jpg",
    logo: "https://i.ibb.co.com/VWcg7Yjr/images.png",
    review: "Andrei is one of the best teachers. His courses were a big reason I was able to get internships at both JP Morgan & Amazon. I turned that into a full-time engineering role at Amazon and now Meta.",
  },
  {
    name: "Alessandro Lamberti",
    role: "Advanced Machine Learning Engineer",
    company: "C.SER.MAC",
    image: "https://i.ibb.co.com/V6bvsRN/download-2.jpg",
    logo: "https://i.ibb.co.com/qY73kJJF/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    review: "Andrei and Daniel gave me everything I needed to start an amazing journey in AI. Their content and courses helped me land my first job as an ML/AI Engineer!",
  },
  {
    name: "Shaun van Huyssteen",
    role: "Senior Consultant",
    company: "Deloitte",
    image: "https://i.ibb.co.com/0jYdRWY3/download.jpg",
    logo: "https://i.ibb.co.com/FkNvp0jD/png-clipart-fiverr-freelancer-logo-business-online-marketplace-fiverr-text-service-thumbnail.png",
    review: "I tried so many courses, but ZTM was structured and to the point. Thanks to ZTM, I got hired as a full-time developer!",
  },
  {
    name: "Shaun van Huyssteen",
    role: "Senior Consultant",
    company: "Deloitte",
    image: "https://i.ibb.co.com/kGrJjXR/images.jpg",
    logo: "https://i.ibb.co.com/VYbG4T6V/avdegic5l.webp",
    review: "I tried so many courses, but ZTM was structured and to the point. Thanks to ZTM, I got hired as a full-time developer!",
  },
  {
    name: "Shaun van Huyssteen",
    role: "Senior Consultant",
    company: "Deloitte",
    image: "https://i.ibb.co.com/ZMJyzfR/65aadeec899ac89afd9420ae-380fd5b54d5341c4b1cc5c4bb0761891e0af8fd7-6720x4480.webp",
    logo: "https://i.ibb.co.com/tTMsVjvf/download-1.jpg",
    review: "I tried so many courses, but ZTM was structured and to the point. Thanks to ZTM, I got hired as a full-time developer!",
  },
  {
    name: "Shaun van Huyssteen",
    role: "Senior Consultant",
    company: "Deloitte",
    image: "https://i.ibb.co.com/256vXNr/software-developer-smiling-young-working-computer-54668839.webp",
    logo: "https://i.ibb.co.com/tTMsVjvf/download-1.jpg",
    review: "I tried so many courses, but ZTM was structured and to the point. Thanks to ZTM, I got hired as a full-time developer!",
  },
  {
    name: "Shaun van Huyssteen",
    role: "Senior Consultant",
    company: "Deloitte",
    image: "https://i.ibb.co.com/kGrJjXR/images.jpg",
    logo: "https://i.ibb.co.com/FkNvp0jD/png-clipart-fiverr-freelancer-logo-business-online-marketplace-fiverr-text-service-thumbnail.png",
    review: "I tried so many courses, but ZTM was structured and to the point. Thanks to ZTM, I got hired as a full-time developer!",
  },
  {
    name: "Shaun van Huyssteen",
    role: "Senior Consultant",
    company: "Deloitte",
    image: "https://i.ibb.co.com/kGrJjXR/images.jpg",
    logo: "https://i.ibb.co.com/qY73kJJF/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png",
    review: "I tried so many courses, but ZTM was structured and to the point. Thanks to ZTM, I got hired as a full-time developer!",
  },
];

const Testimonials = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    mode: "snap",
    slides: { perView: 4, spacing: 24 }, // Default (Desktop)
    breakpoints: {
      "(max-width: 1024px)": { slides: { perView: 3, spacing: 16 } }, // Tablets
      "(max-width: 768px)": { slides: { perView: 2, spacing: 12 } }, // Small Tablets
      "(max-width: 480px)": { slides: { perView: 1, spacing: 8 } }, // Mobile
    },
  });
  const [canSlideLeft, setCanSlideLeft] = useState(false);
  const [canSlideRight, setCanSlideRight] = useState(true);
  // Update state when slider moves
  useEffect(() => {
    if (slider.current) {
      slider.current.on("slideChanged", () => {
        setCanSlideLeft(slider.current.track.details.rel > 0);
        setCanSlideRight(slider.current.track.details.rel < slider.current.track.details.maxIdx);
      });
    }
  }, [slider]);

  return (
    <section className="py-16 px-4 md:px-16 h-fit text-gray-800 bg-gray-100   ">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">What 1000's of successful ZTM students are saying</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mt-2">We've helped thousands of people (just like you) go from zero to getting hired in their dream role to advancing their careers.</p>
      </div>
      {/* Testimonial Slider */}
      <div ref={sliderRef} className="keen-slider rounded-2xl max-w-[1440px] ml-auto ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="keen-slider__slide bg-white shadow-lg rounded-2xl p-6 min-w-xs max-w-xs relative overflow-visible z-10 ">
            {/* User Profile */}
            <div className="flex items-center  z-20">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-2 border-white z-10" />
              <img src={testimonial.logo} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 object-cover border-white -ml-4 z-20" />
            </div>

            {/* Testimonial Content */}
            <p className="mt-5 text-gray-700">"{testimonial.review}"</p>

            {/* Video Link */}
            <div className="mt-4 flex items-center text-purple-700 font-semibold cursor-pointer">
              <FaPlayCircle className="text-lg mr-2" />
              <span>WATCH MY VIDEO STORY</span>
            </div>

            <div className="divider"></div>

            <div>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex space-x-3 text-gray-500">
              <FaLinkedin className="text-xl text-purple-700 cursor-pointer" />
              <FaLinkedin className="text-xl text-purple-700 cursor-pointer" />
              <FaLinkedin className="text-xl text-purple-700 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
      {/* Navigation Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button onClick={() => slider.current?.prev()} className={`p-2 rounded-full transition ${canSlideLeft ? "bg-purple-700 text-white" : "bg-gray-200 text-gray-600"}`} disabled={!canSlideLeft}>
          <IoIosArrowBack className="text-xl" />
        </button>

        <button onClick={() => slider.current?.next()} className={`p-2 rounded-full transition ${canSlideRight ? "bg-purple-700 text-white" : "bg-gray-200 text-gray-600"}`} disabled={!canSlideRight}>
          <IoIosArrowForward className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

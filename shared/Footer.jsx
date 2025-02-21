import { FaGithub, FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-blue-950 ">
      <footer className=" text-white py-10 px-6 max-w-[1440px] mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo Section */}
          <div>
            <h1 className="text-2xl font-bold">Ecloudemy</h1>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h2 className="font-semibold text-white mb-3">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/testimonials" className="relative text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/webinar" className="relative text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Webinar
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="relative text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Our Courses
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="relative  text-lg font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-white mb-3">The Academy</h2>
              <ul className="space-y-2">
                <li>Courses</li>
                <li>Career Paths</li>
                <li>Career Path Quiz</li>
                <li>Web Development</li>
                <li>Machine Learning & AI</li>
                <li>Data Analytics</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-white mb-3">Company</h2>
              <ul className="space-y-2">
                <li>About Ecloudemy</li>
                <li>Ambassadors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <FaGithub className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaXTwitter className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaLinkedin className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaFacebook className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaInstagram className="text-gray-300 hover:text-white cursor-pointer text-xl" />
            <FaYoutube className="text-gray-300 hover:text-white cursor-pointer text-xl" />
          </div>

          {/* Legal Links */}
          <div className="text-white text-sm flex gap-4 mt-4 md:mt-0">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>

          {/* Copyright */}
          <p className="text-white text-sm mt-4 md:mt-0">
            <span className="font-bold text-white">Copyright © 2025</span>, Ecloudemy Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

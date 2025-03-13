import { FaGithub, FaXTwitter, FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-blue-950  ">
      <footer className=" text-white py-10 px-6 max-w-[1440px] mx-auto">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo Section */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Ecloudemy</h1>
            <div className="flex  gap-2">
              <img src="/assets/Icon/icons8-mail-96.png" alt="" className="w-6" />
              <h2 className="text-sm bg-blue-950 text-white rounded-lg text-center place-content-center h-auto">ecloudemy@gmail.com</h2>
            </div>
            <div className="flex gap-2">
              <img src="/assets/Icon/icons8-whatsapp-96.png" alt="" className="w-6" />
              <h2 className="text-sm bg-blue-950 text-white rounded-lg py-1">0123456789</h2>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h2 className="font-semibold text-white text-xl mb-3">Quick Links</h2>
              <ul className="space-y-2">
                <li>
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative text-md font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/webinar" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative text-md font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Webinar
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative text-md font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Our Courses
                  </Link>
                </li>

                <li>
                  <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative  text-md font-medium  after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-white mb-4">Company</h2>
              <ul className="space-y-2">
                <li onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative text-slate-200 font-semibold cursor-pointer after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                  About Ecloudemy
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-4 border-t border-gray-700 pt-3">
          {/* Social Icons */}
          <div className="flex space-x-2 mt-2 md:mt-0">
            <a href="https://www.facebook.com/share/1GydGAaWtn/" target="_blank" rel="noopener noreferrer" title="https://www.facebook.com/share/1GydGAaWtn/">
              <img src="/assets/icons8-facebook-96.png" alt="" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/company/ecloudemy/" target="_blank" rel="noopener noreferrer">
              <img src="/assets/icons8-linkedin-96.png" alt="" className="h-8 w-8 " title="https://www.linkedin.com/company/ecloudemy/" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="text-white text-sm flex gap-4 mt-2 md:mt-0">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Cookies</p>
          </div>

          {/* Copyright */}
          <p className="text-white text-sm mt-2 md:mt-0">
            <span className="font-bold text-white">Copyright © 2025</span>, Ecloudemy Inc.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

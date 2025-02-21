import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo1 from "../public/assets/logo.png";
import { FaBookOpen, FaDiscourse, FaHome } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

import { RiCommunityFill } from "react-icons/ri";
import { HiAcademicCap } from "react-icons/hi2";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setIsCoursesOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Webinar", path: "/webinar", icon: <FaBookOpen /> },
    {
      name: "Our Courses",
      path: "",
      icon: <FaDiscourse />,
      submenu: [{ name: "Ms Dynamics 365", path: "" }],
    },
    { name: "Community", path: "/community", icon: <RiCommunityFill /> },
    { name: "Testimonial", path: "#", icon: <HiAcademicCap /> },
  ];

  const dropdownVariants = {
    hidden: { opacity: 0, scale: 0.95, y: -10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="w-full bg-white shadow-md">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="w-32">
          <img src={Logo1} alt="Logo" className="w-32 h-14" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="flex space-x-6 relative">
            {links.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <div className="flex items-center gap-2 text-lg font-medium text-blue-950 hover:text-sky-600 transition cursor-pointer" onMouseEnter={() => setIsCoursesOpen(true)} onMouseLeave={() => setIsCoursesOpen(false)}>
                    {item.icon} {item.name}
                    {isCoursesOpen && (
                      <motion.div className="absolute z-10 left-5 mt-24 w-48 h-20 bg-white  rounded-lg shadow-lg" initial="hidden" animate="visible" exit="hidden" variants={dropdownVariants}>
                        {item.submenu.map((subItem, subIndex) => (
                          <Link key={subIndex} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:text-sky-600  rounded-md">
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 text-lg font-medium text-blue-950 hover:text-sky-600 transition 
                    ${location.pathname === item.path ? "text-sky-600 font-semibold" : ""}`}
                  >
                    {item.icon} {item.name}
                  </Link>
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex bg-blue-950 text-white px-4 py-2 rounded-3xl">
          <img src="/assets/icons8-contact-us-64.png" alt="Contact" className="w-5" />
          <Link to="/contact" className="ml-2 text-lg">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            <CgMenuGridR className="w-14 h-14 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`lg:hidden absolute z-10 top-16 right-4 bg-white shadow-lg rounded-lg w-56 p-3 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"}`}>
        {links.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <div>
                <button onClick={() => setIsCoursesOpen(!isCoursesOpen)} className="flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md transition hover:bg-gray-200 w-full text-left">
                  {item.icon} {item.name}
                </button>
                {isCoursesOpen && (
                  <div className="ml-6 mt-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.path} className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md">
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 text-gray-700 rounded-md transition hover:bg-gray-200 
                ${location.pathname === item.path ? "bg-blue-100 text-blue-600 font-semibold" : ""}`}
              >
                {item.icon} {item.name}
              </Link>
            )}
          </div>
        ))}

        {/* Contact Button Inside Dropdown */}
        <Link to="/contact" className="flex items-center gap-3 px-4 py-2 mt-2 bg-blue-950 text-white rounded-md hover:bg-blue-900 transition">
          <img src="/assets/icons8-contact-us-64.png" alt=" " className="w-5" />
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

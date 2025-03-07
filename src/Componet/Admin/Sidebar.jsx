import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdAddHomeWork } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";

const Sidebar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    const isConfirmed = window.confirm("আপনি কি সত্যিই লগআউট করতে চান?");
    if (isConfirmed) {
      setLoading(true);
      localStorage.removeItem("isLoggedIn");
      setTimeout(() => {
        navigate("/admin-panel-2025");
        setLoading(false);
      }, 1500); // 1.5 সেকেন্ড পর রিডাইরেক্ট
    }
  };

  return (
    <div className="bg-gray-900 h-screen hidden md:block shadow-sm border-r-2 border-gray-800">
      <div className="w-64 bg-gray-900  text-gray-200 p-5 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <NavLink to="/dashboard/home" className={({ isActive }) => ` px-3 flex items-center gap-1 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                <MdAddHomeWork />
                Home Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/user-info-list" className={({ isActive }) => `flex items-center gap-1 px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                <FaUserFriends /> User Info List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mail" className={({ isActive }) => `flex items-center gap-1 px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                <MdContactMail /> Contact mail
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/webinar" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                Webinar
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                Testimonial
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                Register
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mt-4">
          <button onClick={handleLogout} disabled={loading} className={`mt-auto flex items-center space-x-2 p-2 rounded transition`} aria-label="Log out">
            {loading ? <span className="animate-spin">🔄</span> : <IoLogOutOutline size={18} />}
            <span>{loading ? "Logging out..." : "Log out"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

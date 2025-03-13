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
    setLoading(true);
    localStorage.removeItem("isLoggedIn");
    setTimeout(() => {
      navigate("/admin-panel-2025");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-100 h-screen hidden md:block  border-r-2 border-gray-300">
      <div className="w-64 bg-slate-100 text-gray-200 p-5 flex flex-col">
        <img src="/assets/logo.png" alt=" Logo " className="w-28 h-10 mb-8 " />
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <NavLink to="/dashboard/home" className={({ isActive }) => ` px-3 font-semibold flex items-center gap-1 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                <MdAddHomeWork />
                Home Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/user-info-list" className={({ isActive }) => `flex font-semibold items-center gap-1 px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                <FaUserFriends /> User Info List
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/mail" className={({ isActive }) => `flex font-semibold items-center gap-1 px-3 py-2 rounded-md ${isActive ? "bg-gray-700 text-white" : "text-gray-500 hover:bg-gray-800"}`}>
                <MdContactMail /> Incoming mail
              </NavLink>
            </li>
            <div className="divider"></div>
          </ul>
        </nav>
        <div className="mt-4">
          <button onClick={handleLogout} disabled={loading} className={`mt-auto flex text-gray-500 font-bold items-center space-x-2 p-2 rounded transition`} aria-label="Log out">
            {loading ? <span className="loading loading-dots loading-md"></span> : <IoLogOutOutline size={18} />}
            <span>{loading ? "Logging out..." : "Log out"}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

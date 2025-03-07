import React from "react";
import { NavLink } from "react-router";

const DashNav = () => {
  return (
    <div className=" bg-gray-900 text-slate-100 px-2">
      <div className="navbar">
        <div className="navbar-start">
          <div className="drawer md:hidden bg-gray-900 text-white ">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="btn-square btn-ghost ">
                <div tabIndex={0} className=" lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {" "}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
                  </svg>
                </div>
              </label>
            </div>
            <div className="drawer-side z-10 bg-base-100 shadow-lg drawer-content">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-gray-900 text-white h-content min-h-full w-80 p-4">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>
                <nav className="flex-1">
                  <ul className="space-y-4">
                    <li>
                      <NavLink to="/dashboard" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/user-info-list" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        User Info List
                      </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                      <NavLink to="/" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/webinar" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        Webinar
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/community" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        Community
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonials" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        Testimonial
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register" className={({ isActive }) => `block px-3 py-2 rounded-md ${isActive ? "bg-gray-700" : "hover:bg-gray-800"}`}>
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </ul>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">OverView</a>
        </div>
        <div className="navbar-center  lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>Admin Dashboard</li>
          </ul>
        </div>
        <div className="navbar-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;

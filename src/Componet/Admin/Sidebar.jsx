import React from "react";
import { Link, useNavigate } from "react-router";

const Sidebar = () => {
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <Link to="/dashboard" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          DashBoard
        </Link>
      </li>
      <li>
        <Link to="/dashboard/user-info-list" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          User Info List
        </Link>
      </li>
      <div className="divider"></div>
      <li>
        <Link to="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          Home
        </Link>
      </li>
      <li>
        <Link to="/webinar" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          Webinar
        </Link>
      </li>
      <li>
        <Link to="/community" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          Community
        </Link>
      </li>
      <li>
        <Link to="/testimonials" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          Testimonial
        </Link>
      </li>
      <li>
        <Link to="/register" className="block hover:bg-gray-700 px-3 py-2 rounded-md">
          Register
        </Link>
      </li>
    </>
  );
  // HandelLogout
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/admin-panel-2025");
  };

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-4xl mx-auto flex items-center justify-between">
        {/* Left Section: Menu */}
        <div className="flex items-center">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="btn btn-ghost">
                <img src="/assets/icons8-menu-144.png" alt="Menu" className="w-6 h-6" />
              </label>
            </div>
            <div className="drawer-side z-50">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-4">
                {/* Logo */}
                <div className="flex justify-center py-4">
                  <img src="/assets/logo.png" alt="Logo" className="w-48 h-16" />
                </div>
                {/* Links */}
                <div className="space-y-2">{links}</div>
                {/* Logout Button */}
                <div className="mt-4">
                  <button onClick={handleLogout} className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition">
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Center Section: Dashboard Title */}
        <div className="hidden lg:block text-lg font-semibold">Admin Dashboard</div>

        {/* Right Section: Profile */}
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

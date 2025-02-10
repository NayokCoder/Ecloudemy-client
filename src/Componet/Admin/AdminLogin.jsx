import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // Admin login credentials (for demo purpose)
    const validUsername = "admin";
    const validPassword = "admin123";

    if (username === validUsername && password === validPassword) {
      // Simulate login success
      alert("Login Successful!");
      setError(""); // Clear error
      // Redirect or perform any further action here
      navigate("/admindash"); // Redirect to home page (or any route you want)
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
              Username
            </label>
            <input type="text" id="username" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input type="password" id="password" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 mt-4 rounded-md shadow-md font-bold text-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

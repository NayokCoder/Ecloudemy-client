import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // সঠিক লগইন তথ্য
    const validUsername = "admin";
    const validPassword = "admin@helo12";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true"); // লগইন স্ট্যাটাস সংরক্ষণ
      setError("");
      navigate("/dashboard"); // ড্যাশবোর্ডে পাঠানো
    } else {
      setError("ভুল ইউজারনেম অথবা পাসওয়ার্ড");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96 transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">অ্যাডমিন লগিন</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
              ইউজারনেম
            </label>
            <input type="text" id="username" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="ইউজারনেম দিন" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
              পাসওয়ার্ড
            </label>
            <input type="password" id="password" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="পাসওয়ার্ড দিন" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 mt-4 rounded-md shadow-md font-bold text-lg hover:from-purple-600 hover:to-blue-500 transition duration-300">
            লগিন
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

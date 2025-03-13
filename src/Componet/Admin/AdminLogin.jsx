import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
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
      setError("Your username or password is incorrect"); // ভুল তথ্য দিলে এই এরর দেখানো
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ backgroundImage: "url('')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex bg-white rounded-lg shadow-2xl w-3/4 max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Hello, welcome!</h1>
          <img src="/public/assets/" alt="" />
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi risus.</p>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                Username
              </label>
              <input type="text" id="username" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                Password
              </label>
              <input type="password" id="password" className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Type Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="flex justify-between text-sm mb-4">
              <div>
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            <button type="submit" className="w-full bg-blue-500 text-white py-3 mt-4 rounded-md shadow-md font-bold text-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>

            <button type="button" className="w-full border border-blue-500 text-blue-500 py-3 mt-4 rounded-md shadow-md font-bold text-lg hover:bg-blue-500 hover:text-white transition duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

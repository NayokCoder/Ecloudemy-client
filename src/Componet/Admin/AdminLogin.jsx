import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please fill in both fields.");
      return;
    }

    const validUsername = "admin";
    const validPassword = "admin@helo12";

    if (username === validUsername && password === validPassword) {
      setLoading(true);
      setError("");
      localStorage.setItem("isLoggedIn", "true");

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } else {
      setError("Your username or password is incorrect");
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen p-4"
      style={{
        backgroundImage: "url('')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-2xl w-full max-w-4xl overflow-hidden">
        {/* Left Side */}
        <div className="md:w-1/2 bg-blue-600 text-white p-10 flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome! To Ecloudemy Admin Login</h1>
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi risus.</p>
          <NavLink to="/" className="text-blue-200 hover:underline mt-4 font-semibold">
            Go Back Home
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 p-10">
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

            {error && <p className="text-red-700 text-sm font-semibold text-center">{error}</p>}

            <button type="submit" className="w-full bg-blue-500 text-white py-3 mt-4 rounded-md shadow-md font-bold text-lg hover:bg-blue-600 transition duration-300 flex justify-center items-center" disabled={loading}>
              {loading ? (
                <>
                  <span className="loading loading-ring loading-xs"></span>
                  <span className="loading loading-ring loading-sm"></span>
                  <span className="loading loading-ring loading-md"></span>
                  <span className="loading loading-ring loading-lg"></span>
                  <span className="loading loading-ring loading-xl"></span>
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

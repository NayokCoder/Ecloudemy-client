import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

const AdminRoute = ({ children }) => {
  const [auth, setAuth] = useState(isAuthenticated());

  useEffect(() => {
    const checkAuth = () => {
      setAuth(isAuthenticated());
    };

    window.addEventListener("storage", checkAuth); // লোকালস্টোরেজ পরিবর্তন হলে চেক করবে

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  return auth ? children : <Navigate to="/admin-panel-2025" replace />;
};

export default AdminRoute;

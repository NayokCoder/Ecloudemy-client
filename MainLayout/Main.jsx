import React from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router";
import Footer from "../shared/Footer";
import WhatsApp from "../src/Componet/Whatsapp";

const Main = () => {
  return (
    <div>
      <Navbar />
      <WhatsApp />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;

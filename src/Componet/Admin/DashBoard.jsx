import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import DashNav from "./DashNav";

const DashBoard = () => {
  return (
    <div className="md:flex ">
      <Sidebar className="z-50 " />
      <div className="w-full bg-slate-100 h-screen ">
        <DashNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;

import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import DashNav from "./DashNav";

const DashBoard = () => {
  return (
    <div className="md:flex bg-gray-900 ">
      <Sidebar className="z-50" />
      <div className="w-full">
        <DashNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;

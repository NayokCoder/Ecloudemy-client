import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const DashBoard = () => {
  return (
    <div className="">
      <Sidebar className="z-50" />
      <Outlet />
    </div>
  );
};

export default DashBoard;

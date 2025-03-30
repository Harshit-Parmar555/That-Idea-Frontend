import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./custom/Navbar";

const Layout = () => {
  return (
    <div className="w-full min-h-screen max-h-auto flex flex-col bg-white">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;

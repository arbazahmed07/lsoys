import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layout/Navbar"; // Assuming Navbar is in the same folder
import Footer from "../section/Footer"
const RootLayout = () => {
  return (
    <div className="">
      <Navbar />

      {/* Main content area */}
      <div className="">
        {/* The content will be rendered via Outlet */}
        <Outlet />

      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;

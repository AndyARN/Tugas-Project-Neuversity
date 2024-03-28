/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Footer from "../components/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <nav>Admin Navbar</nav>
      <main>{children}</main>

      <Footer />
    </div>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../components/Navbar";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

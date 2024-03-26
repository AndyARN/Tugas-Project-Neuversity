/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function ClientLayout({ children }) {
  return (
    <>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}

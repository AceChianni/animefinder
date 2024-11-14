// src/app/layout.js

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "../styles/globals.css"; // Global CSS imports

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <div className="content">
      <Sidebar />
      <main>{children}</main>
    </div>
  </div>
);

export default Layout;

import "../styles/globals.css";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => (
  <html lang="en">
    <body>
      <Navbar />
      <div className="main-content">{children}</div>
    </body>
  </html>
);

export default Layout;

import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/quiz">Quiz</Link>
    <Link to="/recommendations">Recommendations</Link>
    <Link to="/contact">Contact Us</Link>
    <Link to="/waifu">Waifu</Link>
  </nav>
);

export default Navbar;

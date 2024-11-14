import Link from "next/link";

const Navbar = () => (
  <nav className="navbar">
    <Link href="/">Home</Link>
    <Link href="/quiz">Quiz</Link>
    <Link href="/recommendations">Recommendations</Link>
    <Link href="/contact">Contact Us</Link>
    <Link href="/waifu">Waifu</Link>
  </nav>
);

export default Navbar;

import { Link } from "react-router-dom";
import "./navbar.css";
import "./button.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">MSh</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="btn-grad">Olib boring!</button>
    </nav>
  );
};

export default Navbar;

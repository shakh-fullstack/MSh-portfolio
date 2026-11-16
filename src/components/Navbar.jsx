import { Outlet, NavLink, Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="logo-img" style={{ width: '40px', height: '40px' }} />
          <div className="logo-text-box">
          <span className="logo-name"> Shakhboz </span>
          <span className="logo-sub"> Mukhtorov </span>
          </div>
          </Link>
        </div>

        <div className="nav-links">
          <NavLink className={({isActive}) => isActive ? "active-link" : "nav-link"} to="/">Home</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : "nav-link"} to="/about">About</NavLink>
          <NavLink  className={({isActive}) => isActive ? "active-link" : "nav-link"} to="/projects">Projects</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : "nav-link"} to="/contact">Contact</NavLink>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import Button from "@material-ui/core/Button";
import { Navbar } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar flex-row-center">
        <div className="logo_div flex-row-center">
          <Link to="/" className="flex-row-center logo_link">
            <img src={Logo} alt="Holiday Home Logo" />
            <h1 className="logo_heading">Holiday Home</h1>
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="navlink_div">
          <ul className="flex-row-center">
            <li>
              <Link to="/" className="nav_links">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav_links">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav_links">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav_links">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#004b23", color: "white" }}
                >
                  Log In
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;

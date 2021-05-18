import React, { useState, componentDidMount, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Navbar } from "react-bootstrap";
import Logo from "../assets/logo.png";
import DehazeIcon from "@material-ui/icons/Dehaze";


const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    setShowMenu(true);
  };

  return (
    <>
      <nav
        className={
          toggle ? "navbar flex-column-center " : "navbar flex-row-center"
        }
      >
        <div className="wrapper flex-row-center">
          <div className="logo_div flex-row-center">
            <Link to="/" className="flex-row-center logo_link">
              <img src={Logo} alt="Holiday Home Logo" />
              <h1 className="logo_heading">Holiday Home</h1>
            </Link>
          </div>
          <div className="menu_btn_wrapper">
            <button onClick={handleToggle}>
              <DehazeIcon className="menu_btn" />
            </button>
          </div>
        </div>
        <ul className={toggle ? "nav-link-box no-margin flex-column-center show" : "flex-row-center non-show no-margin"}>
          <li>
            <Link to="/" className="nav_links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/rates" className="nav_links">
              Rates
            </Link>
          </li>
          <li>
            <Link to="/bookeddates" className="nav_links">
              Booked Dates
            </Link>
          </li>
          <li>
            <Link to="/thingstodo" className="nav_links">
              Things to do
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="nav_links">
              Photo Album
            </Link>
          </li>
          <li>
            <Link to="/reservation" className="nav_links">
            Make a Reservation
              {/* <Button
                variant="contained"
                style={{ backgroundColor: "#004b23", color: "white" }}
              >
                Log In
              </Button> */}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

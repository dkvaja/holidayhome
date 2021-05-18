import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer flex-column-center">
        <div className="footer_links flex-row-center">
          <ul className="flex-row-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
        <div className="social_media flex-column-center">
          <h2>Connect with us on</h2>
          <div className="sm-box flex-row-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="sm-link"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?hl=en"
              target="_blank"
              className="sm-link"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="sm-link"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://www.reddit.com/"
              target="_blank"
              className="sm-link"
            >
              <RedditIcon />
            </a>
          </div>
        </div>
        <p>
          Copyright ©️ {new Date().getFullYear()} - Holiday Home | All Right
          Reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;

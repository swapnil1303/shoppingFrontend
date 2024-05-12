import React from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import fb from "../assest/fb.png";
import twitter from "../assest/twitter.png";
import linkedin from "../assest/linkedin.png";
import yt from "../assest/yt.png";

const Footer = () => {
  return (
    <footer className="bg-slate-200" >
        <div class="container footer-section flex" style={{paddingBlock:"50px"}}>
          <div style={{ display: "flex" }}>
            <img src={logo} alt="logo" width={"50px"} />
            <Link
              to={"/"}
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#dc2626",
              }}
            >
              Scraptastic
            </Link>
          </div>
          <div class="link-column flex">
            <a href="" class="hover-link">
              Overview
            </a>
            <a href="" class="hover-link">
              Pricing
            </a>
            <a href="" class="hover-link">
              Accounts
            </a>
            <a href="" class="hover-link">
              Customers
            </a>
            <a href="" class="hover-link">
              FAQ
            </a>
            <a href="" class="hover-link">
              Sign up
            </a>
            
          </div>
          <div class="link-column flex">
            <a href="" class="hover-link">
              Gift Card Terms
            </a>
            <a href="" class="hover-link">
              Media Center
            </a>
            <a href="" class="hover-link">
              Cookie Preferences
            </a>
            <a href="" class="hover-link">
              Become an Affilicate
            </a>
            <a href="" class="hover-link">
              Global Selling
            </a>
            <a href="" class="hover-link">
              Build Your Brand
            </a>
            <a href="" class="hover-link">
              Advertise Your Products
            </a>
          </div>
          <div class="link-column flex">
            <a href="" class="hover-link">
              Blog
            </a>
            <a href="" class="hover-link">
              Examples
            </a>
            <a href="" class="hover-link">
              Guides
            </a>
            <a href="" class="hover-link">
              Help center
            </a>
            <a href="" class="hover-link">
              Contact
            </a>
            <a href="" class="hover-link">
              Careers
            </a>
            <a href="" class="hover-link">
              Terms And Services
            </a>
          </div>
        </div>

      <div class="subfooter">
        <div class="container subfooter-container flex">
          <div class="subfooter-options flex">
            <a href="" class="hover-link">
              Privacy policy
            </a>
            <a href="" class="hover-link">
              Terms & conditions
            </a>
            <a href="" class="hover-link">
              Security information
            </a>
          </div>
          <div class="social-media flex">
            <a href="#">
              <img src={fb} alt="facebook" width="50%" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" width="50%" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" width="50%" />
            </a>
            <a href="#">
              <img src={yt} alt="youtube" width="50%" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

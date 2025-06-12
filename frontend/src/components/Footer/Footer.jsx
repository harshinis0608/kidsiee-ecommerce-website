import React from "react";
import "./Footer.css";
import logo_icon from "../assets/logo.png";
import instagram_icon from "../assets/instagram_icon.jpg";
import Pinterest_icon from "../assets/Pinterest_icon.jpg";
import whatsapp_icon from "../assets/whatsapp_icon.jpg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo_icon} alt="" className="kid" />
        <p>KIDSIEE</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">

        <div className="footer-icon-container">
          <img src={instagram_icon} alt="" className="insta" />
        </div>

        <div className="footer-icon-container">
          <img src={Pinterest_icon} alt="" className="pint"/>
        </div>

        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt="" className="what"/>
        </div>

      </div>

      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Footer;

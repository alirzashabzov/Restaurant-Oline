import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiYoutube } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { images } from "../../constants";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans"> 54 W St, Shirvan, NY 1009, USA</p>
        <p className="p__opensans">+994-(AZ)-050-993-34-87</p>
        <p className="p__opensans">alirzash2007@gmail.com</p>
      </div>
      F
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others."
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: "15" }}
          alt=""
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
          <FiYoutube />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans"> Monday : Friday</p>
        <p className="p__opensans">08:00 AM - 12:00 PM</p>
        <p className="p__opensans">Saturday : Friday</p>
        <p className="p__opensans">07:00 AM - 11:00 PM</p>
      </div>
    </div>

    <div className="footer_copyright">
      <p className="p__opensans">
        © 2023 Gericht - Alirza Shahbazov. All Rights Reserved.
      </p>
    </div>
  </div>
);

export default Footer;

import React from "react";
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import logo from "../../../../assets/images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="landingPage-header">
      <img src={logo} alt="digicord logo" />
      <div className="landingPage-header-links">
        <a href="https://twitter.com/DIGI_CORD?s=09">
            <BsTwitter />
        </a>
        <a href="https://www.facebook.com/digicord4/">
            <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/invites/contact/?i=188vqiv9ez55j&utm_content=ogv8vk5">
            <AiFillInstagram />
        </a>
        <a href="https://www.linkedin.com/in/digicord-nig">
            <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Header;

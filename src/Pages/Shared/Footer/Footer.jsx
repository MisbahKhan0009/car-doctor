import React from "react";
import logo from "/logo.png";
import "./Footer.css";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer mt-10 p-32 w-full bg-base-200 text-base-content">
      <aside>
        <img className="footer-logo" src={logo} alt="" />
        <p>
          Car Doctor is your ultimate <br /> destination for any problem with
          car.
          <br />
          Serving our clients since 2012.
        </p>
        <div className="flex text-3xl ">
          <button className="tooltip tooltip-bottom" data-tip="Youtube">
            <AiFillYoutube className="me-2" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="Twitter">
            <AiFillTwitterCircle className="mx-2" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="Instagram">
            <AiFillInstagram className="mx-2" />
          </button>
          <button className="tooltip tooltip-bottom" data-tip="Linkedin">
            <AiFillLinkedin className="mx-2" />
          </button>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">About</h6>
        <Link className="link link-hover">Home</Link>
        <Link className="link link-hover">Service</Link>
        <Link className="link link-hover">Contact</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link className="link link-hover">Why Car Doctor</Link>
        <Link className="link link-hover">About</Link>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <Link className="link link-hover">Support Center</Link>
        <Link className="link link-hover">Feedbacky</Link>
        <Link className="link link-hover">Accesbility</Link>
      </nav>
    </footer>
  );
};

export default Footer;

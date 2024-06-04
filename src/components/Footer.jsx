import React from "react";
import { Footers } from "./data";
import { Link } from "react-router-dom";
import footerlogo from "../assets/image/footer.png";

const Footer = () => {
  return (
    <div className="h-80  bg-gray-700 text-white  mt-56">
      <div className="container mx-auto flex justify-between pt-10">
        <div className="footer_logo">
          <a href="/">
            <a href="/home">
              {" "}
              <img src={footerlogo} alt="Logo" />
            </a>
          </a>
        </div>
        <div className="footer_menu">
          <ul className="flex gap-10">
            {Footers.map(({ id, name, urlLink }) => (
              <li key={id}>
                <Link to={urlLink}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer_icons"></div>
      </div>
    </div>
  );
};

export default Footer;

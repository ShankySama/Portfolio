import React from "react";
import Card from "./Card";
import { footerData } from "../data";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      {footerData.profiles.map((profile, index) => (
        <Card profile={profile} key={index} />
      ))}
    </div>
  );
};

export default Footer;

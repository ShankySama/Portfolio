import React from "react";
import Card from "./Card";
import { footerData } from "../data";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_title_container">
        <h1 className="footer_title">{footerData?.title}</h1>
      </div>
      <div className="footer_container_cards">
        {footerData?.profiles.map((profile, index) => (
          <Card profile={profile} key={index} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Footer);

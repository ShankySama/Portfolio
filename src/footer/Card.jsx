import React from "react";
import gmail_icon from "../assets/images/gmail_icon.png";
import linkedin_icon from "../assets/images/linkedin_icon.png";
import leetCode_icon from "../assets/images/leetcode_icon.png";

const Card = ({ profile, index }) => {
  const icons = [gmail_icon, linkedin_icon, leetCode_icon];
  let anchorAttributes = {};
  if (profile.type === "Gmail") {
    anchorAttributes = { href: "mailTo:" + profile.value };
  } else {
    anchorAttributes = {
      href: profile.value,
      target: "_blank",
      rel: "noreferrer",
    };
  }
  return (
    <a className="card_link" {...anchorAttributes}>
      <div className="card">
        <div>
          <img src={icons[index]} {...profile?.icon} alt={profile?.alt} />
        </div>
        <div>
          <h3 className="type">{profile?.type}</h3>
        </div>
      </div>
    </a>
  );
};

export default React.memo(Card);

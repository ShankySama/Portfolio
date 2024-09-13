import React from "react";

const Card = ({ profile }) => {
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
          <img {...profile?.icon} alt={profile?.alt} />
        </div>
        <div>
          <h3 className="type">{profile?.type}</h3>
        </div>
      </div>
    </a>
  );
};

export default React.memo(Card);

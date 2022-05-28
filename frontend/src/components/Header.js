import React from "react";

export default function Header(props) {
  return (
    <div className="head">
      <div className="contentHead">
        <label className="textLogo">{props.name_}</label>
      </div>
    </div>
  );
}

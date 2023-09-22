import React from "react";
import "./BurguerButton.css";

export const BurguerBotton = (props) => {
  return (
    <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

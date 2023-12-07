/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Icons = ({ property1, className, onClick }) => {
  return (
    <div className={`icons ${property1} ${className}`} onClick={onClick}>
      {property1 === "radio-on" && (
        <>
          <div className="ellipse" />
          <div className="div" />
        </>
      )}
    </div>
  );
};

Icons.propTypes = {
  property1: PropTypes.oneOf(["radio-on", "radio-off"]),
};

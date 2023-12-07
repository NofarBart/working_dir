/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Component = ({ property1, className, text = "Notes:" }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`component ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="overlap-group-2">
        <div className="notes">{text}</div>
        <div
          className="frame"
          onClick={() => {
            dispatch("click_146");
          }}
        >
          <div className="enter-additional">
            {state.property1 === "default" && <>Enter additional input</>}

            {state.property1 === "fiiling-with-cursor" && <>|</>}

            {state.property1 === "filled" && <>Input value</>}
          </div>
        </div>
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "fiiling-with-cursor",
        };

      case "click_146":
        return {
          property1: "fiiling-with-cursor",
        };
    }
  }

  if (state.property1 === "fiiling-with-cursor") {
    switch (action) {
      case "click_146":
        return {
          property1: "filled",
        };
    }
  }

  return state;
}

Component.propTypes = {
  property1: PropTypes.oneOf(["fiiling-with-cursor", "filled", "default"]),
  text: PropTypes.string,
};

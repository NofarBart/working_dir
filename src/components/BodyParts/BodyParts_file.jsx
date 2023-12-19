import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Icons } from "../Icons";
import "./style.css";

export const BodyParts = ({ noOfOptions, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    noOfOptions: noOfOptions || "zero",
  });

  return (
    <span className={`body-parts ${className}`}>
      <span
        className="group"
        onClick={() => {
          dispatch("click");
        }}
      >
        <Icons className="icons-instance" property1={state.noOfOptions === "one" ? "radio-on" : "radio-off"} />
        <span className="text-wrapper">legs</span>
      </span>
      <span className="overlap-group">
        <span
          className="group"
          onClick={() => {
            dispatch("click_164");
          }}
        >
          <Icons
            className="icons-instance"
            onClick={() => {
              dispatch("click_188");
            }}
            property1={state.noOfOptions === "two" ? "radio-on" : "radio-off"}
          />
          <span className="text-wrapper">tail</span>
        </span>
        <span
          className="group-2"
          onClick={() => {
            dispatch("click_167");
          }}
        >
          <Icons className="icons-instance" property1={state.noOfOptions === "three" ? "radio-on" : "radio-off"} />
          <span className="text-wrapper-2">tongue</span>
        </span>
      </span>
    </span>
  );
};

function reducer(state, action) {
  if (state.noOfOptions === "zero") {
    switch (action) {
      case "click_164":
        return {
          noOfOptions: "two",
        };
    }
  }

  if (state.noOfOptions === "one") {
    switch (action) {
      case "click_188":
        return {
          noOfOptions: "two",
        };
    }
  }

  if (state.noOfOptions === "three") {
    switch (action) {
      case "click_164":
        return {
          noOfOptions: "two",
        };
    }
  }

  switch (action) {
    case "click":
      return {
        ...state,
        noOfOptions: "one",
      };

      // //change start
      // case "click_188":
      // return {
      //   ...state,
      //   noOfOptions: "two",
      // };
      // //change end

    case "click_167":
      return {
        ...state,
        noOfOptions: "three",
      };
  }

  return state;
}

BodyParts.propTypes = {
  noOfOptions: PropTypes.oneOf(["two", "zero", "three", "one"]),
};

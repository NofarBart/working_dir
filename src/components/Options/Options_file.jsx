/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Options = ({ options, visibleOptions, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    options: options || "default",
    visibleOptions: visibleOptions || "noooo",
  });

  return (
    <div
      className={`options ${state.visibleOptions} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.visibleOptions === "noooo" && (
        <div
          className="option"
          onClick={() => {
            dispatch("click_112");
          }}
        >
          <div className="option-2">
            {state.options === "default" && <>Select an option</>}

            {state.options === "one" && <>Option 1</>}

            {state.options === "two" && <>Option 2</>}

            {state.options === "three" && <>Option 3</>}

            {state.options === "four" && <>Option 4</>}
          </div>
        </div>
      )}

      {state.visibleOptions === "yes" && (
        <>
          <div className="option-wrapper">
            <div className="option-2">
              {state.options === "default" && <>Select an option</>}

              {state.options === "four" && <>Option 4</>}

              {state.options === "two" && <>Option 2</>}

              {state.options === "one" && <>Option 1</>}

              {state.options === "three" && <>Option 3</>}
            </div>
          </div>
          <div
            className="div-2"
            onClick={() => {
              dispatch("click_65");
            }}
          >
            <div className={`div-wrapper ${state.options}`}>
              <div className="text-wrapper-3">Option 1</div>
            </div>
            <div className={`option-3 ${state.options}`}>
              <div className="option-4">Option 2</div>
            </div>
            <div className={`option-5 ${state.options}`}>
              <div className="option-6">Option 3</div>
            </div>
            <div className={`option-7 ${state.options}`}>
              <div className="option-8">Option 4</div>
            </div>
          </div>
        </>
      )}

      <img
        className="arrow"
        alt="Arrow"
        src={
          state.visibleOptions === "yes"
            ? "https://cdn.animaapp.com/projects/65720f3d965b11a5aed5a18f/releases/65722649cd9388f80f7868d7/img/arrow-1.svg"
            : "https://cdn.animaapp.com/projects/65720f3d965b11a5aed5a18f/releases/65722649cd9388f80f7868d7/img/arrow.svg"
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.options === "default" && state.visibleOptions === "noooo") {
    switch (action) {
      case "click":
        return {
          options: "default",
          visibleOptions: "yes",
        };
    }
  }

  if (state.options === "default" && state.visibleOptions === "yes") {
    switch (action) {
      case "click":
        return {
          options: "default",
          visibleOptions: "noooo",
        };

      case "click_65":
        return {
          options: "default",
          visibleOptions: "noooo",
        };
    }
  }

  if (state.options === "four" && state.visibleOptions === "yes") {
    switch (action) {
      case "click":
        return {
          options: "four",
          visibleOptions: "noooo",
        };

      case "click_65":
        return {
          options: "default",
          visibleOptions: "noooo",
        };
    }
  }

  if (state.options === "two" && state.visibleOptions === "yes") {
    switch (action) {
      case "click":
        return {
          options: "two",
          visibleOptions: "noooo",
        };

      case "click_65":
        return {
          options: "default",
          visibleOptions: "noooo",
        };
    }
  }

  if (state.options === "one" && state.visibleOptions === "yes") {
    switch (action) {
      case "click":
        return {
          options: "one",
          visibleOptions: "noooo",
        };

      case "click_65":
        return {
          options: "default",
          visibleOptions: "noooo",
        };
    }
  }

  if (state.options === "one" && state.visibleOptions === "noooo") {
    switch (action) {
      case "click":
        return {
          options: "one",
          visibleOptions: "yes",
        };
    }
  }

  if (state.options === "two" && state.visibleOptions === "noooo") {
    switch (action) {
      case "click":
        return {
          options: "two",
          visibleOptions: "yes",
        };

      case "click_112":
        return {
          options: "two",
          visibleOptions: "yes",
        };
    }
  }

  if (state.options === "three" && state.visibleOptions === "noooo") {
    switch (action) {
      case "click":
        return {
          options: "three",
          visibleOptions: "yes",
        };

      case "click_112":
        return {
          options: "three",
          visibleOptions: "yes",
        };
    }
  }

  if (state.options === "four" && state.visibleOptions === "noooo") {
    switch (action) {
      case "click":
        return {
          options: "four",
          visibleOptions: "yes",
        };
    }
  }

  if (state.options === "three" && state.visibleOptions === "yes") {
    switch (action) {
      case "click":
        return {
          options: "three",
          visibleOptions: "noooo",
        };

      case "click_65":
        return {
          options: "default",
          visibleOptions: "noooo",
        };
    }
  }

  return state;
}

Options.propTypes = {
  options: PropTypes.oneOf(["default", "two", "three", "four", "one"]),
  visibleOptions: PropTypes.oneOf(["yes", "noooo"]),
};

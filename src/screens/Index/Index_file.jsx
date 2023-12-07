import React from "react";
import { BodyParts } from "../../components/BodyParts";
import { Component } from "../../components/Component";
import { Options } from "../../components/Options";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-3">
        <div className="overlap">
          <div className="a-mouse-from-th-wrapper">
            <img
              className="a-mouse-from-th"
              alt="A mouse from th"
              src="https://cdn.animaapp.com/projects/65720f3d965b11a5aed5a18f/releases/65722649cd9388f80f7868d7/img/a-mouse-from-th-6d2bdcf3-6c9c-4ee8-8fed-d79017113343-1.png"
            />
          </div>
          <BodyParts className="body-parts-instance" noOfOptions="zero" />
          <Component className="component-1" property1="default" />
          <Component className="component-instance" property1="default" text="Videos locations:" />
          <div className="text-wrapper-4">Subject:</div>
          <div className="text-wrapper-5">Attempt:</div>
          <div className="text-wrapper-6">Directory (save at):</div>
          <div className="text-wrapper-7">Experimental Paradigm:</div>
          <div className="text-wrapper-8">Parts:</div>
          <div className="frame-2">
            <div className="text-wrapper-9">Run</div>
          </div>
          <div className="frame-3">
            <div className="text-wrapper-9">Restart</div>
          </div>
          <Options className="options-instance" options="default" visibleOptions="noooo" />
          <Options className="design-component-instance-node" options="default" visibleOptions="noooo" />
          <Options className="options-2" options="default" visibleOptions="noooo" />
          <div className="frame-4">
            <div className="text-wrapper-9">Choose location</div>
          </div>
        </div>
        <img
          className="deepbrain-logo"
          alt="Deepbrain logo"
          src="https://cdn.animaapp.com/projects/65720f3d965b11a5aed5a18f/releases/65722649cd9388f80f7868d7/img/deepbrain-logo-1.png"
        />
      </div>
    </div>
  );
};

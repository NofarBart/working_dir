import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["fiiling-with-cursor", "filled", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "fiiling-with-cursor",
    className: {},
    text: "Notes:",
  },
};

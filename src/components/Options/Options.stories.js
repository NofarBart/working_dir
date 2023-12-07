import { Options } from ".";

export default {
  title: "Components/Options",
  component: Options,
  argTypes: {
    options: {
      options: ["default", "two", "three", "four", "one"],
      control: { type: "select" },
    },
    visibleOptions: {
      options: ["yes", "noooo"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    options: "default",
    visibleOptions: "yes",
    className: {},
  },
};

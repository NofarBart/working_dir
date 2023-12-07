import { Icons } from ".";

export default {
  title: "Components/Icons",
  component: Icons,
  argTypes: {
    property1: {
      options: ["radio-on", "radio-off"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "radio-on",
    className: {},
  },
};

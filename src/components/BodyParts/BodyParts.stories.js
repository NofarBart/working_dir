import { BodyParts } from ".";

export default {
  title: "Components/BodyParts",
  component: BodyParts,
  argTypes: {
    noOfOptions: {
      options: ["two", "zero", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    noOfOptions: "two",
    className: {},
  },
};

import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Checkbox, { CheckboxProps } from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  componentSize: "medium",
  colorType: "primary",
  disabled: false,
};

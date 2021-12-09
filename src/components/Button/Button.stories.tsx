import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  children: "Button",
  variant: "contained",
  componentSize: "medium",
  colorType: "primary",
  href: "",
  disableRipple: false,
  disabled: false,
  fullWidth: false,
};

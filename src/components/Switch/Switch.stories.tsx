import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Switch, { SwitchProps } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<SwitchProps> = (args) => <Switch {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  componentSize: "medium",
  colorType: "primary",
  disabled: false,
};

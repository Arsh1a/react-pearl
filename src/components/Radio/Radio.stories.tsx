import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Radio, { RadioProps } from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<RadioProps> = (args) => <Radio {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  componentSize: "medium",
  colorType: "primary",
  disabled: false,
};

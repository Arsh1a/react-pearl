import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import TextInput, { TextInputProps } from "./TextInput";
import Button from "../Button";

export default {
  title: "Components/TextInput",
  component: TextInput,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = {
  placeholder: "Text input",
  componentSize: "medium",
  colorType: "light",
  width: "400px",
  disabled: false,
};

export const WithButton = Template.bind({});
WithButton.args = {
  ...Default.args,
  children: <Button>Submit</Button>,
};

import { Meta, StoryFn } from "@storybook/react";
import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    otherClasses: ["class"],
    value: { type: "string" },
    type: { control: "select", options: ["text", "search", "password", "tel"] },
    id: { type: "string" },
    title: { type: "string" },
    placeholder: { type: "string" },
  },
} as Meta;

const Template: StoryFn = args => <Input {...args} />;

export const WithTitle = Template.bind({});

WithTitle.args = {
  value: "Default value",
  type: "text",
  title: "Default input",
};

export const WithoutTitle = Template.bind({});

WithoutTitle.args = {
  value: "Default value",
  type: "text",
};

import { Meta, StoryFn } from "@storybook/react";
import { Error } from "./Error";

export default {
  title: "shared/Error",
  component: Error,
  argTypes: {
    otherClasses: ["class"],
    text: { control: "string" },
  },
} as Meta;

const Template: StoryFn = args => <Error {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Error",
};

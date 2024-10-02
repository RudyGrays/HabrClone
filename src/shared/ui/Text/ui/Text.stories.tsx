import { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    otherClasses: ["class"],
    children: { type: "string" },
    tag: {
      controls: "select",
      options: ["p", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    size: {
      controls: "select",
      options: ["small", "medium", "large"],
    },
    color: {
      controls: "select",
      options: ["primary", "secondary", "error", "success", "warning"],
    },
    weight: {
      controls: "select",
      options: ["normal", "bold"],
    },
    align: {
      controls: "select",
      options: ["left", "center", "right"],
    },
  },
} as Meta;

const Template: StoryFn = args => <Text {...args}>{args.children} </Text>;

export const Default = Template.bind({});
Default.args = {
  children: "Default Text",
};

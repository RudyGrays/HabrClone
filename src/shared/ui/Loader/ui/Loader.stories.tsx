import { Meta, StoryFn } from "@storybook/react";
import Loader from "./Loader";

export default {
  title: "shared/Loader",
  component: Loader,
  argTypes: {
    otherClasses: ["class"],
  },
} as Meta;

const Template: StoryFn = args => <Loader {...args} />;

export const Default = Template.bind({});

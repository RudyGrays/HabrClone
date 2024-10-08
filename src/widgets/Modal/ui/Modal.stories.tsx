import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "widgets/Modal",
  component: Modal,
  argTypes: {},
} as Meta;

const Template: StoryFn = args => (
  <Modal id="testId" testOpen={true} {...args}>
    {args.children}
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  children: "test modal",
};

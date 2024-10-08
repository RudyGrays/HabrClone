import { Meta, StoryFn } from "@storybook/react";
import Header from "./Header";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "widgets/Header",
  component: Header,
  argTypes: {},
} as Meta;

const Template: StoryFn = args => <Header {...args} />;

export const Default = Template.bind({});

Default.decorators = [StoreDecorator({})];

export const WithAuth = Template.bind({});

WithAuth.decorators = [
  StoreDecorator({
    user: {
      authorized: true,
    },
  }),
];

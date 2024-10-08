import { Meta, StoryFn } from "@storybook/react";
import LangSwitcher from "./LangSwitcher";
import { i18nextDecorator } from "shared/config/storybook/i18nextDecorator/i18nextDecorator";

export default {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  argTypes: {},
} as Meta;

const Template: StoryFn = args => <LangSwitcher {...args} />;

export const RU = Template.bind({});

RU.decorators = [i18nextDecorator("ru")];

export const EN = Template.bind({});

EN.decorators = [i18nextDecorator("en")];

import { Meta, StoryFn } from "@storybook/react";
import CustomLink from "./CustomLink";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { EnumTheme } from "app/providers/ThemeProvider/ui/ThemeContext";

export default {
  title: "shared/CustomLink",
  component: CustomLink,
  argTypes: {
    otherClasses: ["class"],
    children: [],
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = args => (
  <CustomLink {...args}>{args.children}</CustomLink>
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Customlink",
};

Default.decorators = [ThemeDecorator(EnumTheme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Customlink",
  disabled: true,
};

import { Meta, StoryFn } from "@storybook/react";
import { EnumTheme } from "app/providers/ThemeProvider/ui/ThemeContext";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button } from "shared/ui/Button";
import { ButtonVariants } from "shared/ui/Button";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    otherClasses: ["class"],
    variants: ["class"],
  },
} as Meta;

const Template: StoryFn = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Outline = Template.bind({});
Outline.args = {
  children: "Outline Button",
  variants: [ButtonVariants.outline],
};

Outline.decorators = [ThemeDecorator(EnumTheme.DARK)];

export const Rounded = Template.bind({});
Rounded.args = {
  children: "Rounded Button",
  variants: [ButtonVariants.rounded, ButtonVariants.outline],
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary Button",
  variants: [ButtonVariants.primary],
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary Button",
  variants: [ButtonVariants.secondary],
};

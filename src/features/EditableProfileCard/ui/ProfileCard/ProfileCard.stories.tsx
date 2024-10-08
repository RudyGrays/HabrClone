import { Meta, StoryFn } from "@storybook/react";
import ProfileCard from "./ProfileCard";
import { ProfileErrorsEnum } from "entities/Profile";

export default {
  title: "features/EditableProfileCard/ProfileCard",
  component: ProfileCard,
  argTypes: {
    otherClasses: ["class"],
    children: [],
  },
} as Meta;

const Template: StoryFn = args => (
  <ProfileCard {...args} profile={args.profile || {}} />
);

export const Default = Template.bind({});

Default.args = {
  profile: {
    age: 20,
    country: "Россия",
    lastname: "Grays",
    name: "Rudy",
  },
};

export const Loading = Template.bind({});

Loading.args = {
  isLoading: true,
};

export const Error = Template.bind({});

Error.args = {
  errors: ProfileErrorsEnum.SERVER_ERROR,
};

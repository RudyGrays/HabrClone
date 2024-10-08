import { Meta, StoryFn } from "@storybook/react";
import ProfilePage from "./ProfilePage";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    otherClasses: ["class"],
    children: [],
  },
} as Meta;

const Template: StoryFn = args => <ProfilePage {...args} />;

export const Default = Template.bind({});

Default.decorators = [
  StoreDecorator({
    profile: {
      newProfileData: {
        age: "20",
        country: "Россия",
        lastname: "Grays",
        name: "Rudy",
      },
      profileData: {
        age: "20",
        country: "Россия",
        lastname: "Grays",
        name: "Rudy",
      },
    },
  }),
];

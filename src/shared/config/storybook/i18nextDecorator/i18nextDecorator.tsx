import { StoryFn } from "@storybook/react";
import { I18nextProvider } from "react-i18next";
import i18n from "shared/config/i18n/i18nForTests";
type lng = "en" | "ru";
export const i18nextDecorator =
  (lng: lng = "ru") =>
  (StoryComponent: StoryFn): JSX.Element => {
    i18n.changeLanguage(lng);
    return (
      <I18nextProvider i18n={i18n}>
        <StoryComponent />
      </I18nextProvider>
    );
  };

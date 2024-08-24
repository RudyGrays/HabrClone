import "app/styles/index.scss";
import { StoryFn } from "@storybook/react";
import { EnumTheme } from "app/providers/ThemeProvider/ui/ThemeContext";

export const ThemeDecorator =
  (theme: EnumTheme) => (StoryComponent: StoryFn) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };

import type { Preview } from "@storybook/react";
import { EnumTheme } from "app/providers/ThemeProvider/ui/ThemeContext";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator(EnumTheme.DARK), RouterDecorator],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

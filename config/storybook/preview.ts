import type { Preview } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/StyleDecorator/StyleDecorator";

const preview: Preview = {
  decorators: [StyleDecorator],
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

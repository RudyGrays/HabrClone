import type { StorybookConfig } from "@storybook/react-webpack5";
import * as webpack from "webpack";

const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: "webpack5",
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),

  webpackFinal: async config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __PROJECT__: JSON.stringify("storybook"),
        __API_URL__: JSON.stringify("http://localhost:8000"),
      }),
    );

    return config;
  },
};
export default config;

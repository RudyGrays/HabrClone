import path from "path";
import { BuildPaths } from "../build/types/config";
import webpack from "webpack";
import { buildScssLoader } from "../build/loaders/buildScssLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", ".tsx");
  config.module.rules.push(buildScssLoader(true));

  config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "automatic" }],
      ],
    },
  });
  return config;
};

import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const PORT: number = 3000;

  const config = buildWebpackConfig({
    mode: env.mode || "development",
    paths,
    isDev: env.mode === "development" ? true : false,
    port: env.port || PORT,
    apiUrl: env.apiUrl,
    project: env.project || "frontend",
  });

  return config;
};

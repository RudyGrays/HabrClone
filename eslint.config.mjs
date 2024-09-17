import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintReact from "eslint-plugin-react";
import eslintReactHooks from "eslint-plugin-react-hooks";
import eslintReactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import eslintTypescript from "typescript-eslint";
import i18nextPlugin from "eslint-plugin-i18next";
import unusedImports from "eslint-plugin-unused-imports";
import path from "path";

/** @type {import('eslint').Linter.Config[]} */
export default eslintTypescript.config(
  {
    plugins: {
      "@typescript-eslint": eslintTypescript.plugin,
      "react-hooks": eslintReactHooks,
      "react-refresh": eslintReactRefresh,
      react: eslintReact,
      prettier: eslintPluginPrettier,
      i18next: i18nextPlugin,
      "unused-imports": unusedImports,
    },
  },
  {
    ignores: ["node_modules", "dist", "public"],
  },
  js.configs.recommended,
  ...eslintTypescript.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: path.__dirname,
      },
    },
  },

  {
    files: ["**/*.{js,ts,tsx}"],
    rules: {
      ...eslintConfigPrettier.rules,
      "i18next/no-literal-string": ["error", { markupOnly: true }],
      "import/no-unresolved": "off",
      "import/prefer-default-export": "off",
      "react/require-default-props": "off",
      "react/react-in-jsx-scope": "off",
      "no-shadow": "off",
      "react/jsx-indent": ["warn", 2],
      "react/jsx-props-no-spreading": "off",
      "no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react-hooks/rules-of-hooks": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-constant-binary-expression": "off",
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react-icons-kit/entypo",
              message: "Please use react-icons-kit/entypo/your-icon instead.",
            },
            {
              name: "react-icons-kit/fa",
              message: "Please use react-icons-kit/fa/your-icon instead.",
            },
            {
              name: "react-icons-kit/feather",
              message: "Please use react-icons-kit/feather/your-icon instead.",
            },
            {
              name: "react-icons-kit/icomoon",
              message: "Please use react-icons-kit/icomoon/your-icon instead.",
            },
            {
              name: "react-icons-kit/iconic",
              message: "Please use react-icons-kit/iconic/your-icon instead.",
            },
            {
              name: "react-icons-kit/ikons",
              message: "Please use react-icons-kit/ikons/your-icon instead.",
            },
            {
              name: "react-icons-kit/ionicons",
              message: "Please use react-icons-kit/ionicons/your-icon instead.",
            },
            {
              name: "react-icons-kit/linea",
              message: "Please use react-icons-kit/linea/your-icon instead.",
            },
            {
              name: "react-icons-kit/md",
              message: "Please use react-icons-kit/md/your-icon instead.",
            },
            {
              name: "react-icons-kit/metrize",
              message: "Please use react-icons-kit/metrize/your-icon instead.",
            },
            {
              name: "react-icons-kit/noto_emoji_regular",
              message:
                "Please use react-icons-kit/noto_emoji_regular/your-icon instead.",
            },
            {
              name: "react-icons-kit/oct",
              message: "Please use react-icons-kit/oct/your-icon instead.",
            },
            {
              name: "react-icons-kit/typicons",
              message: "Please use react-icons-kit/typicons/your-icon instead.",
            },
          ],
        },
      ],
      "@typescript-eslint/no-require-imports": "off",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    files: ["**/src/**/*.test.{js,ts,tsx}"],
    rules: {
      "i18next/no-literal-string": "off",
    },
  },
);

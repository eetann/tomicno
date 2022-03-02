module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "import",
    "unused-imports",
    "react-hooks",
  ],
  rules: {
    "react/jsx-uses-vars": 1,
    "react/jsx-uses-react": 1,
    "@typescript-eslint/no-unused-vars": "off",
    "import/no-named-as-default-member": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
        project: "packages/*/tsconfig.json",
      },
    },
  },
  overrides: [
    {
      // import を sort するため、AutoFix をかける範囲で設定を上書く
      files: ["src/**/*.{js,jsx,ts,tsx}"],
      rules: {
        "import/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "parent",
              "sibling",
              "index",
              "object",
              "type",
            ],
            pathGroups: [
              {
                pattern: "@alias/**",
                group: "parent",
                position: "before",
              },
            ],
            alphabetize: {
              order: "asc",
            },
            "newlines-between": "always",
          },
        ],
      },
    },
  ],
};

// eslint.config.cjs
const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");

module.exports = defineConfig([
  // Osnova: ESLint recommended pravila
  js.configs.recommended,

  // Naše prilagođavanje za ovaj repo
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      // Kao i ranije: unused vars samo warn, console dozvoljen
      "no-unused-vars": "warn",
      "no-console": "off",
    },
  },
]);

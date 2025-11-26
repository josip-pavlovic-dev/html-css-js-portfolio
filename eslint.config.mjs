import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  // 1. ESLint preporučena pravila (core rules)
  js.configs.recommended,

  // 2. Naša prilagođena podešavanja za sve .js fajlove u projektu
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest", // podržava najnoviji JS (ES202x)
      sourceType: "module", // kod je u ES Module modu
      globals: {
        ...globals.browser, // dodaje globalne promenljive za browser: window, document, itd.
      },
    },
    rules: {
      // 3. Pravila prilagođena projektu:
      "no-unused-vars": "warn", // neiskorišćene promenljive kao upozorenje (a ne grešku)
      "no-console": "off", // dozvoljeno koristiti console.log (korisno tokom razvoja)
    },
  },
]);

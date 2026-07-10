import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node // ESLint hiểu các biến Node.js như 'process'
      }
    } 
  },
  { 
    files: ["**/*.js"], 
    languageOptions: { sourceType: "commonjs" } 
  },
]);
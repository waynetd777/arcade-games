// Copyright © 2026 Wayne Davies. Free software under the GNU General Public License, version 3 or later.
// SPDX-License-Identifier: GPL-3.0-or-later. See LICENSE in the project root.

// ESLint for the games' inline scripts and the service worker (`npm run lint`).
import js from "@eslint/js";
import html from "eslint-plugin-html";
import globals from "globals";

export default [
  { ignores: ["node_modules"] },
  js.configs.recommended,
  {
    rules: {
      "no-empty": ["error", { allowEmptyCatch: true }],
      "no-unused-vars": ["error", { args: "none", caughtErrors: "none" }],
    },
  },
  {
    files: ["**/*.html"],
    plugins: { html },
    languageOptions: { globals: globals.browser, sourceType: "script" },
  },
  { files: ["sw.js"], languageOptions: { globals: globals.serviceworker, sourceType: "script" } },
  { files: ["eslint.config.js"], languageOptions: { sourceType: "module" } },
];

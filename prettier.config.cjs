/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: true,
  trailingComma: "all",
  bracketSpacing: true,
  printWidth: 80,
  tabWidth: 2,
  singleQuote: false,
  arrowParens: "always",
};

module.exports = config;

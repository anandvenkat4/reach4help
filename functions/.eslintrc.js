module.exports = {
  extends: [
    '../.eslintrc-ts.js',
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  env: {
    browser: false,
    es6: true,
  },
  /*
   * DO NOT SPECIFY RULES OR PLUGINS IN THIS FILE UNLESS THEY SHOULD ONLY
   * APPLY TO THE functions DIRECTORY, AND NOTHING ELSE!!!
   */
  plugins: [
    // see ../.eslintrc-ts.js
  ],
  rules: {
    // see ../.eslintrc-ts.js
    "no-underscore-dangle": "off", // We need to shadow variables
    "lines-between-class-members": "off",
    "import/newline-after-import": "off"
  }
};
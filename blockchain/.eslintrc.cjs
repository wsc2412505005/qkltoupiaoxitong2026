module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    mocha: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "script",
  },
  rules: {},
  ignorePatterns: ["artifacts/", "cache/", "node_modules/"],
};

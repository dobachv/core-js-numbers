module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // Дополнительные правила
    'no-console': 'off',
    'import/extensions': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
  },
};
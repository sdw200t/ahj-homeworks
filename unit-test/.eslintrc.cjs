module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'max-classes-per-file': 'off',
    'no-useless-constructor': 'off',
    'import/extensions': 'off',
    'no-prototype-builtins': 'off',
  },
};

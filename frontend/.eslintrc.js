module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-useless-escape': 'off',
    'no-unused-vars': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-v-slot': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  globals: {
    axios: 'readonly',
  },
};

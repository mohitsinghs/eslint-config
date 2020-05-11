module.exports = {
  extends: [
    'eslint-config-standard',
    'eslint-config-standard-react',
    'plugin:vue/recommended',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    'eslint-config-prettier/standard',
    'eslint-config-prettier/vue',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}

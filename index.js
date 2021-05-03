module.exports = {
  extends: ['standard', 'standard-jsx', 'standard-react', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
}

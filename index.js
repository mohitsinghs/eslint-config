require('./patch-eslint7')

module.exports = {
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
    'prettier/standard',
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

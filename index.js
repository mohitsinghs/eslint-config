require('./patch-eslint7')

module.exports = {
  extends: [
    'eslint-config-standard',
    'eslint-config-standard-react',
    'eslint-config-prettier',
    'eslint-config-prettier/react',
    'eslint-config-prettier/standard',
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


module.exports = {
  extends: [
    'standard',
    'standard-jsx',
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

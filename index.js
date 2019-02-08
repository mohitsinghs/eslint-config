module.exports = {
  extends: [
    'standard',
    'standard-react',
    'prettier',
    'prettier/babel',
    'prettier/react',
    'prettier/standard',
  ],
  parser: 'babel-eslint',
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'prettier/prettier': [
      {
        singleQuote: true,
        jsxSingleQuote: true,
        trailingComma: 'es5',
        semi: false,
      },
    ],
  },
}

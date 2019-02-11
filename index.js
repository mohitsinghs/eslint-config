module.exports = {
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
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

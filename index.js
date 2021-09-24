module.exports = {
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'prettier',
    'plugin:jest/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}

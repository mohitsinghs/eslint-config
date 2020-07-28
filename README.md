# eslint-config

![](https://github.com/mohitsinghs/eslint-config/workflows/.github/workflows/main.yml/badge.svg)
[![npm version](https://badge.fury.io/js/%40mohitsingh%2Feslint-config.svg)](https://badge.fury.io/js/%40mohitsingh%2Feslint-config)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mohitsinghs/eslint-config/blob/master/LICENSE)

This configuration uses [Prettier](https://prettier.io) for formatting and [Standard](https://standardjs.com) for linting. The additions are [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) plugin and [babel-eslint](https://github.com/babel/babel-eslint) as parser.

## Usage

Install with your preferred package manager

```sh
# with npm
npm i -D eslint @mohitsingh/eslint-config
# or with yarn
yarn add --dev eslint @mohitsingh/eslint-config
```

Add the following eslint config in your package.json

```json
"eslintConfig": {
  "extends": "@mohitsingh"
}
```

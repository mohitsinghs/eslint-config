# eslint-config

![](https://github.com/mohitsinghs/eslint-config/workflows/.github/workflows/main.yml/badge.svg)
[![npm version](https://badge.fury.io/js/%40mohitsingh%2Feslint-config.svg)](https://badge.fury.io/js/%40mohitsingh%2Feslint-config)
[![license MIT](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/mohitsinghs/eslint-config/blob/master/LICENSE)

## About

> I perfer to keep one linter configuation for all my Javascript projects, but [Eslint](https://eslint.org) seems to force otherwise, discouraging global installs and configurations. I ended up patching eslint v7 based on a patch from Microsoft for v6 to make it work globally. With this config, it just works.

This configuation uses [Prettier](https://prettier.io) for formatting and standard for linting. The additons are [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) plugin and [babel-eslint](https://github.com/babel/babel-eslint) as parser.

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


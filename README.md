<h1 align="center">eslint-config</h1>
<p align="center">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/workflow/status/mohitsinghs/eslint-config/ci?style=flat-square">
  <a href="https://www.npmjs.com/package/@mohitsingh/eslint-config"><img src="https://img.shields.io/npm/v/@mohitsingh/eslint-config.svg?style=flat-square" alt="npm version"></a>
  <img alt="node-current" src="https://img.shields.io/node/v/@mohitsingh/eslint-config?style=flat-square">
  <a href="https://github.com/mohitsinghs/eslint-config/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square" alt="license MIT"></a>
</p>
<p align="center">
  <b>Read data from json and yaml files recursively</b><br/>
  <br>
  <br>
</p>

## Features

- [Prettier](https://prettier.io) for formatting
- [Standard](https://standardjs.com) for linting
- [react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) plugin
- [babel-eslint](https://github.com/babel/babel-eslint) as parser.

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

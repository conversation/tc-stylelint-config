# tc-stylelint-config

Standard TC sharable config for stylelint

https://github.com/stylelint/stylelint

## Usage

First you'll need to install stylelint. In order to get a consistent version, it's recommended that you leverage the peer dependencies of this package.

```
npm i -G install-peerdeps
```

```
install-peerdeps -D conversation/tc-stylelint-config
```

Create a `stylelint.config.js` in the root directory of the project you are intending to use stylelint with, insert the following:

```js
module.exports = {
  "extends": "tc-stylelint-config"
}
```

That's it!

## Adding and removing rules

Be sure to discuss with the rest of the team before modifying rules. The easiest way is to create a pull request with examples and reasons why you want to make the change.

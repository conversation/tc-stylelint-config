# tc-stylelint-config
Standard TC sharable config for stylelint

## Usage

```
npm i -D conversation/tc-stylelint-config
```

Create a `stylelint.config.js` in the root directory of the project you are intending to use stylelint with, insert the following:

```js
module.exports = {
  "extends": "tc-stylelint-config"
}
```

That's it!

## Adding and removing rules

Be sure to discuss with the rest of the team before adding and removing rules. The easiest way is to create a pull request with examples and reasons why you want to modify the rules.

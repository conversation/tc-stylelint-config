# tc-stylelint-config

Standard TC sharable config for stylelint

https://github.com/stylelint/stylelint

## Usage

Installing this package will also install the appropriate version of stylelint to match the configured rules.

```
npm i -D conversation/tc-stylelint-config#0.1.0
```

Create a `stylelint.config.js` in the root directory of the project you are intending to use stylelint with, insert the following:

```js
module.exports = {
  "extends": "tc-stylelint-config"
}
```

Then finally, add some npm scripts to the package.json of your project for convenience.

```js
"scripts": {
  "stylelint": "stylelint 'app/assets/stylesheets/**/*.scss' --syntax scss",
  "stylelint:autofix": "stylelint 'app/assets/stylesheets/**/*.scss' --syntax scss --fix"
}
```

Now you can just execute:
```
npm run stylelint
```

## Adding and removing rules

Be sure to discuss with the rest of the team before modifying rules. The easiest way is to create a pull request with examples and reasons why you want to make the change.

## Making changes

You'll want to save the exact version of stylelint so that we don't automatically download new minor versions and introduce new violations accidentally.

For example, to upgrade to 9.1.0:

```
npm i --save-exact stylelint@9.1.0
```

If you choose to upgrade stylelint or change the rules, you should also bump the minor version, and push up a new tag matching the latest version. If there are drastic changes, consider bumping the major version.

```
git commit -m "Prepare to release 7.6.5"
git tag -a 7.6.5 -m "7.6.5"
git push origin 7.6.5
```

Then you can upgrade each project to use that new version:
```
npm i -D conversation/tc-stylelint-config#7.6.5
```

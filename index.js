"use strict"

module.exports = {
  "rules": {
    "block-no-empty": null,
    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always-multi-line",
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-named": "never",
    "color-no-invalid-hex": true,
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-space-after": "always",
    "function-url-quotes": "always",
    "indentation": [2, { "ignore": "inside-parens" }],
    "length-zero-no-unit": true,
    "max-nesting-depth": 7,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "no-duplicate-selectors": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "selector-class-pattern": "^[\-_0-9a-z]+$",
    "selector-type-case": "lower",
    "unit-case": "lower",
    "unit-whitelist": ["cm", "ex", "deg", "pt", "px", "em", "rem", "vh", "vw", "%", "s", "ms"],
    "value-list-comma-space-after": "always",
  }
}

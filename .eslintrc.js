/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true,
  },
  rules: {
    //disabled
    'react/react-in-jsx-scope': 'off',
    "import/no-unresolved": "off",

    //warn
    'react/jsx-no-target-blank': 'warn',
    "import/order": [
      "warn",
      {
        "groups": [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type"
        ],
        "pathGroups": [
          {
            "pattern": "@/**/**",
            "group": "parent",
            "position": "before"
          }
        ],
        "alphabetize": { "order": "asc" }
      }
    ],


    //error
    "react/self-closing-comp": ["error", { "component": true, "html": true }],
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["../",]
      }
    ],
  }
}

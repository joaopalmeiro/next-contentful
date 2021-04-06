module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
  },
  // To enable features such as async/await
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module', // Imports
    ecmaFeatures: {
      jsx: true,
    },
  },
  // "!.prettierrc.js": To lint the .prettierrc.js file (ignored by default by ESLint)
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:prettier/recommended', // Prettier plugin
  ],
  rules: {
    'react/prop-types': 'off',
    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',
    // This rule is not compatible with the <Link /> component
    'jsx-a11y/anchor-is-valid': 'off',
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
}

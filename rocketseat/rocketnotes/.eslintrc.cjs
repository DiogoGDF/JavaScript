module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'semi': ["warn", "always"],
        "quotes": ["warn", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
        "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 1, "maxBOF": 0 }],
        "indent": ["warn", 4],
        "comma-dangle": "warn",
        "no-tabs": ["warn"],
        "no-lone-blocks": ["warn"],
        "no-trailing-spaces" : "warn"
    },
}

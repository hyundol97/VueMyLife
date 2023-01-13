module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "plugin:prettier/recommended"
    ],
    parserOptions: {
        parser: "@babel/eslint-parser"
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "vue/valid-v-slot": ["error", { allowModifiers: true }],
        "prettier/prettier": [
            "error",
            {
                trailingComma: "none",
                semi: true,
                tabWidth: 4,
                singleQuote: false,
                bracketSpacing: true,
                jsxBracketSameLine: true
            }
        ]
    }
};

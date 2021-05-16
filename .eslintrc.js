module.exports = {
	plugins: ["react", "simple-import-sort"],
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:prettier/recommended",
		"prettier/react",
	],
	parser: "babel-eslint",
	settings: {
		react: {
			version: "detect",
		},
	},
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"react/prop-types": "off",
		"simple-import-sort/imports": "error",
		"prettier/prettier": [
			"error",
			{
				semi: false,
				singleQuote: true,
				printWidth: 80,
				tabWidth: 2,
				jsxSingleQuote: false,
				trailingComma: "none",
				arrowParens: "avoid",
			},
		],
	},
	env: {
		browser: true,
		es6: true,
		node: true,
	},
};

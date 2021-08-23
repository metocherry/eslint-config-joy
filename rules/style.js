module.exports = {
  rules: {
    'semi': ['error', 'never'],
    'quote-props': [
      'error',
      'consistent-as-needed',
      { keywords: false, unnecessary: true, numbers: false },
    ],
    'no-plusplus': 'off',
    'max-len': ['error', 100, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
}

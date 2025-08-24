import love from 'eslint-config-love'
import eslintPluginJsonc from 'eslint-plugin-jsonc'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      'package-lock.json'
    ]
  },
  {
    ...love,
    files: ['**/*.js', '**/*.ts']
  },
  {
    files: ['**/*.js', '**/*.ts'],
    rules: { 'no-console': 'off' }
  },
  ...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
  {
    files: ['*.json', '*.jsonc', '*.json5'],
    rules: {
      'jsonc/indent': ['error', 2],
      'jsonc/array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 2
        }
      ],
      'jsonc/array-element-newline': [
        'error',
        'always',
        {
          multiline: true,
          minItems: 2
        }
      ],
      'jsonc/array-bracket-spacing': ['error', 'never'],
      'jsonc/object-curly-newline': ['error', 'always'],
      'jsonc/object-property-newline': ['error'],
      'jsonc/object-curly-spacing': ['error', 'never'],
      'jsonc/sort-array-values': [
        'error',
        {
          pathPattern: '.*',
          order: {
            type: 'asc'
          },
          minValues: 4
        }
      ],
      'jsonc/comma-dangle': ['error', 'never']
    }
  }
]

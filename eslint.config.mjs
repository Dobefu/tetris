import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      vue: true,
      typescript: true,
    },
    {
      files: ['**/*.vue', '**/*.ts'],
      rules: {
        // Not all attributes in TresJS can be hyphenated, like the "shadow-mapSize" attribute.
        'vue/attribute-hyphenation': 'off',

        // These rules conflict with Prettier.
        'antfu/consistent-list-newline': 'off',
        'style/operator-linebreak': 'off',
        'style/brace-style': 'off',
      },
    },
  ),
)

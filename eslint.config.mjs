import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      vue: true,
      typescript: true,
    },
    {
      files: ['**/*.vue'],
      rules: {
        // Not all attributes in TresJS can be hyphenated, like the "shadow-mapSize" attribute.
        'vue/attribute-hyphenation': 'off',
      },
    },
  ),
)

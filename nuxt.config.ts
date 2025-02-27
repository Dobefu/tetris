export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@tresjs/nuxt', '@nuxt/eslint'],

  eslint: {
    config: {
      standalone: false,
    },
  },
})

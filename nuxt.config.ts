// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/public/assets/css/main.css"],
  devtools: { enabled: false },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    "@nuxt/test-utils/module",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
  ],
  imports: {
    dirs: ["stores"],
  },
});

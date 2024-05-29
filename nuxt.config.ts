// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      baseMediaUrl: process.env.BASE_MEDIA_URL,
      host: process.env.NITRO_HOST
    }
  },
  nitro: {
    preset: 'node-server',
  },
  devServer: {
    port: 6000
  },
}
)

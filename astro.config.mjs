import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
  },
});

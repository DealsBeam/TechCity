// https://astro.build/config
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";

export default defineConfig({
  site: "https://techfoundry.com",
  markdown: {
    extendDefaultPlugins: true,
  },
  integrations: [
    tailwind(),
    expressiveCode(),
    mdx(),
    sitemap(),
    icon()
  ],
});

import { defineConfig } from "astro/config";
import { sanityIntegration } from "@sanity/astro";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sanityIntegration({
    projectId: "44st9i6p",
    dataset: "production",
    apiVersion: "2023-02-08",
    useCdn: false
  }), tailwind()]
});
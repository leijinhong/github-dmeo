// astro.config.ts
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    integrations: [react(), vue(), tailwind()],
    output: "server", // 选择服务器渲染
    adapter: cloudflare(),
});

import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://chang-xinhai.github.io",
  base: "/Awesome-Robot-Data-Engine",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  build: { format: "directory" },
});

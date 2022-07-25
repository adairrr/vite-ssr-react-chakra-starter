import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import ssr from "vite-plugin-ssr/plugin";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    ssr({
      prerender: true,
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      lib: resolve(__dirname, "src/lib"),
    },
  },
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  optimizeDeps: { include: ["cross-fetch"] },
});

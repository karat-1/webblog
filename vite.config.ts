import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";

export default defineConfig({
  plugins: [react(), mdx()],
  define: {
    global: "window",
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "window",
      },
      plugins: [NodeGlobalsPolyfillPlugin({ buffer: true })],
    },
  },
  build: {
    outDir: "dist", // Ensure Vercel serves this directory
    assetsDir: "assets", // Keep assets inside a dedicated folder
  },
});

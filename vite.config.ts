import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ship modern JS (all evergreen browsers); avoids unnecessary transpilation/polyfills
    target: "es2022",
    // Source maps for production debugging / Lighthouse "missing source map" audit.
    // Only fetched by DevTools, no runtime cost; note they expose readable source.
    sourcemap: true,
  },
}));

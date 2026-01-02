import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig({
  base: "/", // ✅ CUSTOM DOMAIN KE LIYE MUST
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    componentTagger(), // dev-only bhi chalega, issue nahi
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

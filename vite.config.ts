import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    warmup: {
      // Pre-transform veelgebruikte modules zodra de dev server start
      // → Snellere eerste paint in de preview
      clientFiles: [
        "./src/main.tsx",
        "./src/App.tsx",
        "./src/pages/Index.tsx",
        "./src/components/Layout.tsx",
      ],
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Pre-bundle zware dependencies bij dev start → minder losse module-requests
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router-dom",
      "framer-motion",
      "lucide-react",
      "react-helmet-async",
      "@tanstack/react-query",
    ],
  },
}));

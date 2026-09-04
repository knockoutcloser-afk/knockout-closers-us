import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    preset: "vercel"
  },
  tanstackStart: {
    server: { 
      entry: "app/ssr.tsx" 
    },
  },
});

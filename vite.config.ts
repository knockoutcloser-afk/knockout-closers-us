import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    preset: "vercel"
  },
  router: {
    client: {
      input: "app/client.tsx"
    }
  },
  tanstackStart: {
    server: { entry: "app/ssr.tsx" },
  },
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  server: { port: 3000 },
  build: {
    chunkSizeWarningLimit: 5000000, // Sesuaikan ukuran batas sesuai kebutuhan Anda
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  base: "/",
});

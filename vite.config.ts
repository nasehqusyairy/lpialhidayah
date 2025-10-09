import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  optimizeDeps: {
    include: ["react-countup"],
  },
  build: {
    commonjsOptions: {
      include: [/react-countup/, /node_modules/],
    },
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site: https://<user>.github.io/<repo>/
// Set BASE_PATH=/repo-name/ in CI (see .github/workflows/deploy-pages.yml). Local dev uses "/".
const base = process.env.BASE_PATH ?? "/";

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});

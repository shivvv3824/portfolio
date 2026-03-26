/** Paths under `public/` for the current Vite `base` (e.g. GitHub Pages `/repo/`). */
export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL;
  const normalized = path.replace(/^\//, "");
  return `${base}${normalized}`;
}

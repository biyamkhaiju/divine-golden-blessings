// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel sets VERCEL=1 during its builds. There the site is exported as plain
// static files (prerendered index.html in dist/client, see vercel.json), which
// works regardless of the Vercel dashboard's framework/output settings.
// Everywhere else (including Lovable publishing) the default target is kept.
const onVercel = !!process.env["VERCEL"];

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(onVercel ? { prerender: { enabled: true, crawlLinks: true } } : {}),
  },
  ...(onVercel ? { nitro: false as const } : {}),
});

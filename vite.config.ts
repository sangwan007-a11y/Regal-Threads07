// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Lovable hosting builds the SSR/worker output. Anywhere else (a laptop running
// `npx vite build` for cPanel/Apache shared hosting) we build a fully static SPA
// and flatten everything into `dist/` so the folder can be uploaded as-is.
const staticExport = !process.env["LOVABLE"];

function flattenStaticOutput(): Plugin {
  return {
    name: "cpanel-static-output",
    apply: "build",
    closeBundle: {
      order: "post",
      handler() {
        process.once("beforeExit", () => {
          const dist = path.resolve("dist");
          const client = path.join(dist, "client");
          if (!fs.existsSync(path.join(client, "index.html"))) return;
          for (const entry of fs.readdirSync(client)) {
            fs.rmSync(path.join(dist, entry), { recursive: true, force: true });
            fs.renameSync(path.join(client, entry), path.join(dist, entry));
          }
          fs.rmSync(client, { recursive: true, force: true });
          fs.rmSync(path.join(dist, "server"), { recursive: true, force: true });
        });
      },
    },
  };
}

export default defineConfig({
  ...(staticExport ? { nitro: false as const, plugins: [flattenStaticOutput()] } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          // Static SPA shell: every URL serves the same prerendered index.html and
          // the client router takes over, so deep links/refreshes work on Apache
          // once the shipped .htaccess rewrite is in place.
          spa: { enabled: true, prerender: { outputPath: "/index.html", crawlLinks: false } },
        }
      : {}),
  },
});

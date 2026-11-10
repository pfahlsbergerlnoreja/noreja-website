import { defineConfig } from "vite";
import type { ManualChunksOption } from "rollup";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

/**
 * Every lucide icon shared by two lazy pages used to become its own sub-1 kB
 * chunk, so a subpage fetched ~25 of them as a second wave of requests once its
 * page chunk had arrived. Icons used only by lazy pages now share one chunk.
 * The icons the main bundle uses, plus the helpers every icon is built with, go
 * into a small "icon-base" chunk that loads with the main bundle, so the home
 * page does not download the subpages' icons. Both have to be assigned
 * explicitly: left to Rollup, they were placed in "icons" and the main bundle
 * imported that chunk after all. (Rollup's experimentalMinChunkSize was tried
 * first: it merged whole pages into the main bundle.)
 */
function lazyIconsChunk(): ManualChunksOption {
  // Icon files (e.g. "icons/arrow-right.js") the main bundle imports.
  let mainIcons: Set<string> | undefined;

  return (id, { getModuleIds, getModuleInfo }) => {
    const lucideFile = id.replace(/\\/g, '/').match(/\/lucide-react\/dist\/esm\/(.+)$/)?.[1];
    if (!lucideFile || lucideFile === 'lucide-react.js') return undefined;
    if (!lucideFile.startsWith('icons/')) return 'icon-base';
    const iconFile = lucideFile;

    if (!mainIcons) {
      const moduleIds = [...getModuleIds()];

      // The app imports icons by name from the package barrel, which re-exports
      // each icon file under several names (CheckCircle2, CircleCheck, …).
      const fileByName = new Map<string, string>();
      const barrel = moduleIds.find((m) => m.replace(/\\/g, '/').endsWith('/lucide-react/dist/esm/lucide-react.js'));
      const barrelCode = (barrel && getModuleInfo(barrel)?.code) || '';
      for (const [, names, file] of barrelCode.matchAll(/export \{([^}]*)\} from '\.\/(icons\/[^']+)'/g)) {
        for (const name of names.matchAll(/default as (\w+)/g)) fileByName.set(name[1], file);
      }

      // Walk the app's own modules statically reachable from the entry — the
      // ones that end up in the main bundle — and collect their icon imports.
      mainIcons = new Set();
      const seen = new Set<string>();
      const stack = moduleIds.filter((m) => getModuleInfo(m)?.isEntry);
      while (stack.length) {
        const moduleId = stack.pop()!;
        if (seen.has(moduleId) || moduleId.includes('node_modules')) continue;
        seen.add(moduleId);
        const info = getModuleInfo(moduleId);
        for (const [, names] of (info?.code ?? '').matchAll(/import\s*\{([^}]*)\}\s*from\s*["']lucide-react["']/g)) {
          for (const name of names.split(',')) {
            const file = fileByName.get(name.trim().split(/\s+as\s+/)[0]);
            if (file) mainIcons.add(file);
          }
        }
        stack.push(...(info?.importedIds ?? []));
      }
    }

    return mainIcons.has(iconFile) ? 'icon-base' : 'icons';
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode, isSsrBuild }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Ship modern JS (all evergreen browsers); avoids unnecessary transpilation/polyfills
    target: "es2022",
    // Source maps for production debugging / Lighthouse "missing source map" audit.
    // Only fetched by DevTools, no runtime cost; note they expose readable source.
    sourcemap: true,
    // Never inline raster images as base64. Vite's default (< 4 kB) put dozens
    // of logos into the main bundle, which every page has to download and parse
    // before it renders, where as files they load lazily and cache on their own.
    // Returning undefined keeps the default for everything else (e.g. SVG).
    assetsInlineLimit: (filePath) =>
      /\.(png|jpe?g|webp|gif|avif)$/i.test(filePath) ? false : undefined,
    // dist/.vite/manifest.json: lets scripts/prerender.ts add modulepreload
    // hints for each route's lazy page chunk (it deletes the file afterwards).
    // Only for the client build — the SSR build has no use for it.
    manifest: !isSsrBuild,
    rollupOptions: {
      output: {
        manualChunks: isSsrBuild ? undefined : lazyIconsChunk(),
      },
    },
  },
}));

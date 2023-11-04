import react from '@vitejs/plugin-react-swc';
import path from 'path'
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import makeManifest from './make-manifest';
 
const root = path.resolve(__dirname, '../../../', 'src');
const pagesDir = path.resolve(root, 'pages');
const assetsDir = path.resolve(root, 'assets');
const outDir = path.resolve(__dirname, '../../../', 'dist/chrome');
const publicDir = path.resolve(__dirname, '../../../', 'public');

export default defineConfig({
  resolve: {
    alias: {
      "@": root,
      '@src': root,
      '@assets': assetsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [ 
    makeManifest(),
  ],
  publicDir,
  build: {
    outDir,
    sourcemap: process.env.__DEV__ === 'true',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        offscreen: path.resolve(pagesDir, 'offscreen', 'index.html'),
        background: path.resolve(pagesDir, 'background', 'index.ts'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
    target: 'chrome116',
  },
});

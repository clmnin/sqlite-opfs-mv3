import type { Manifest } from "webextension-polyfill";
import pkg from "../../../package.json";

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: pkg.displayName,
  short_name: pkg.shortName,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author.name,
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  content_security_policy: {
    extension_pages: "script-src 'self' 'wasm-unsafe-eval'",
  },
  permissions: ["offscreen"],
};

export default manifest;

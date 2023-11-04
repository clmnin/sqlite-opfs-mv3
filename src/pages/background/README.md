# Sqlite in a manifest v3 chrome extension

We have to use a [offscreen](https://developer.chrome.com/docs/extensions/reference/offscreen/) page to create a web worker and also to have access to the OPFS API.

## How to run it
```shell
pnpm install
pnpm build
```

Load the build at [chrome://extensions](chrome://extensions)
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  dts: {
    only: true,
  },
  sourcemap: false,
  clean: true,
  format: ["esm"],
  outDir: "npm/types",
  loader: {
    ".scss": "css",
  },
});

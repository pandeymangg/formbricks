import type { Options } from "tsup";

const config: Options = {
  entryPoints: ["src/index.ts"],
  dts: true,
  format: ["cjs", "esm"],
  minify: true,
  sourcemap: true,
};

export default config;

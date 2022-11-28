import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import summary from "rollup-plugin-summary";
import { terser } from "rollup-plugin-terser";

export default {
  preserveEntrySignatures: "strict",
  plugins: [
    // Enable TS
    typescript(),
    // Resolve bare module specifiers to relative paths
    resolve(),
    // Minify JS
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
    }),
    // Output summary
    summary(),
  ],
  onwarn(warning) {
    if (warning.code !== "THIS_IS_UNDEFINED") {
      // eslint-disable-next-line no-console
      console.error(`(!) ${warning.message}`);
    }
  },
  input: "./src/index.ts",
  output: {
    file: "./dist/shoelace.js",
    format: "esm",
  },
};

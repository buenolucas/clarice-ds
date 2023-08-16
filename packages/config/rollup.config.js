import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pkg = require("./package.json");

export default {
  input: pkg.source,
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    // nodeResolve(),
    commonjs(),
    typescript(),
  ],
};

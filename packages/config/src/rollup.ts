import { RollupOptions as RollupConfigP } from "rollup";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import fs from "fs";

export interface RollupOptions extends RollupConfigP {
  package?: string;
}

export const withRollup = (config: RollupOptions) => {
  let rawdata = fs.readFileSync("package.json", "utf-8");
  let pkg = JSON.parse(rawdata);

  const baseConfig = {
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
      // commonjs(),
      typescript(),
    ],
  };
  return baseConfig;
};

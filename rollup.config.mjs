import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";

export default {
  /* Specify main file for EdgeWorker */
  input: "main.ts",

  /* Define external modules, which will be provided by the EdgeWorker platform */
  external: ["http-request", "create-response", "cookies", "log"],

  /* Define output format as an ES module and specify the output directory */
  output: {
    format: "es",
    dir: "dist",
  },

  /* Bundle all modules into a single output module */
  plugins: [
    /* We <3 types */
    typescript(),

    /* Convert CommonJS modules to ES6 */
    commonjs(),

    /* Resolve modules from node_modules */
    resolve(),

    /* Package json data as an ES6 module */
    json(),
  ],
};

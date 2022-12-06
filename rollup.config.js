import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json"); // can refer to diff properties on package.json

// two config objects

//first exports js files that has all of the components in it 
//second exports types the .d.ts files in case whoever is using our library is using typescript
export default [
  {
    input: "src/index.ts", // what is entry point? index.ts (the file that exports all of the components)
    output: [ //outputs 2 things
      { //commonjs modules, defined by main field in package.json module
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      { // es6 module
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [ // all of the plugins we imported
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }), // need to specify whete th location is
    ],
  },
   {
    input: "dist/esm/types/index.d.ts", // input for the types file where the types of the components wil be defined
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()], 
  },
]
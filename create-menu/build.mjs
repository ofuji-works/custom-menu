import * as esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/main.ts"],
  bundle: true,
  outfile: "dist/main.js",
  platform: "node",
  tsconfig: "tsconfig.json",
});

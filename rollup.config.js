import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import autoprefixer from "autoprefixer";
import chalk from "chalk";
import del from "rollup-plugin-delete";
import esbuild from "rollup-plugin-esbuild";
import postcss from "rollup-plugin-postcss";
import sass from "sass";
import pkg from "./package.json" with { type: "json" };

// import alias from '@rollup/plugin-alias';

function stripUseClient() {
  return {
    name: "strip-use-client",
    transform(code, id) {
      if (id.includes("@ant-design/icons")) {
        return code.replace(/^["']use client["'];?/m, "");
      }
      return null;
    },
  };
}

const externals = Object.keys(pkg.externals || {});
const pkgResult = { include: {}, external: {} };

export default {
  input: "src/index.ts",
  output: [
    {
      file: "npm/dist/esm/index.js",
      format: "esm",
      sourcemap: false,
    },
    {
      file: "npm/dist/umd/index.js",
      format: "umd",
      sourcemap: false,
      name: "BaseflowWidgets",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        dayjs: "dayjs",
        antd: "antd",
        "@baseflow/react": "Baseflow",
      },
    },
  ],
  external: (id) => {
    const hit = externals.some((mod) => mod === id || id.startsWith(`${mod}/`));
    if (hit) {
      if (!pkgResult.external[id]) {
        pkgResult.external[id] = true;
        console.warn(chalk.red("external: "), id);
      }
    } else if (!pkgResult.include[id]) {
      pkgResult.include[id] = true;
      console.warn(chalk.green("include: "), id);
    }
    return hit;
  },
  plugins: [
    del({ targets: "dist" }),
    resolve({ browser: true }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    commonjs(),
    stripUseClient(),
    esbuild({
      target: "es2020",
      tsconfig: "tsconfig.umd.json",
      // minify: true,
    }),
    url({
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
    }),
    postcss({
      modules: false, // css-module
      extract: true, // css 文件
      minimize: true,
      sourceMap: false,
      url: { maxSize: 20 * 1024 },
      extensions: [".scss", ".css"],
      use: { sass: sass },
      plugins: [autoprefixer()],
    }),
    terser({
      // 压缩选项
      compress: {
        pure_funcs: ["console.log"], // 移除指定函数
        // 更多压缩选项：https://github.com/terser/terser#compress-options
      },
      // 混淆选项
      mangle: true,
      // 输出选项
      format: {
        comments: false, // 移除注释
      },
    }),
  ],
};

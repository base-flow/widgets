import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser from "@rollup/plugin-terser";
import url from "@rollup/plugin-url";
import autoprefixer from "autoprefixer";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
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

const extensions = [".js", ".ts", ".tsx", ".jsx"];
const esmExternals = { ...pkg.peerDependencies, "react/jsx-runtime": true };
const umdExternals = { ...pkg.peerDependencies };
const externalResult = { esm: {}, umd: {} };

const BabelESMConfig = {
  babelHelpers: "bundled",
  extensions,
  exclude: "node_modules/**",
  presets: [
    ["@babel/preset-react", { runtime: "automatic" }],
    ["@babel/preset-typescript", { allowDeclareFields: true }],
    [
      "@babel/preset-env",
      {
        targets: { chrome: "100" },
        useBuiltIns: "usage",
        corejs: 3,
        modules: false,
      },
    ],
  ],
  plugins: [["babel-plugin-react-compiler", { target: "18" }]],
};

const BabelUMDConfig = {
  ...BabelESMConfig,
  presets: BabelESMConfig.presets.map((item) => {
    if (item[0] === "@babel/preset-react") {
      return ["@babel/preset-react", { runtime: "classic" }];
    }
    return item;
  }),
};

const ESMConfig = {
  input: "src/index.ts",
  output: {
    file: "npm/dist/esm/index.js",
    format: "esm",
    sourcemap: false,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      dayjs: "dayjs",
      antd: "antd",
      "@baseflow/react": "Baseflow",
      "react/jsx-runtime": "reactCompilerRuntime",
    },
  },
  external: (id) => {
    if (esmExternals[id]) {
      if (!externalResult.esm[id]) {
        externalResult.esm[id] = true;
      }
      return true;
    }
    if (id.startsWith("react-dom/client")) {
      console.error("included react-dom/client");
    }
    return undefined;
  },
  plugins: [
    del({ targets: "dist" }),
    resolve({ extensions, browser: true }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      preventAssignment: true,
    }),
    commonjs(),
    stripUseClient(),
    url({
      include: ["**/*.svg", "**/*.png", "**/*.jpg", "**/*.jpeg", "**/*.gif"],
      limit: 10 * 1024, // <10kb 转 base64
      emitFiles: true,
    }),
    postcss({
      modules: false, // css-module
      extract: true, // css 文件
      minimize: true,
      sourceMap: false,
      url: { maxSize: 20 * 1024 },
      extensions: [".scss", ".css"],
      use: [
        [
          "sass",
          {
            // 在这里屏蔽特定的废弃警告
            silenceDeprecations: ["legacy-js-api"],
          },
        ],
      ],
      plugins: [autoprefixer()],
    }),
    babel(BabelESMConfig),
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
    {
      name: "custom-end",
      closeBundle() {
        console.log("--------------------------------------------------");
        console.log(externalResult);
      },
    },
  ],
};

export default [
  ESMConfig,
  {
    ...ESMConfig,
    output: {
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
    external: (id) => {
      if (umdExternals[id]) {
        if (!externalResult.umd[id]) {
          externalResult.umd[id] = true;
        }
        return true;
      }
      return undefined;
    },
    plugins: ESMConfig.plugins.map((item, n) => {
      if (item.name === "babel") {
        return babel(BabelUMDConfig);
      }
      return item;
    }),
  },
];

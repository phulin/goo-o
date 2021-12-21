/* eslint-env node */

/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require("path");
/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const { merge } = require("webpack-merge");

const sharedConfig = {
  mode: "production",
  optimization: {
    minimize: false,
  },
  performance: {
    hints: false,
  },
  devtool: false,
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        // exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  externals: {
    "canadv.ash": "commonjs canadv.ash",
    kolmafia: "commonjs kolmafia",
  },
};

const scriptsConfig = merge(
  {
    entry: {
      gooo: "./src/index.ts",
      "gooo-combat": "./src/combat.ts",
    },
    output: {
      path: path.resolve(__dirname, "KoLmafia", "scripts", "goo-o"),
      filename: "[name].js",
      libraryTarget: "commonjs",
    },
  },
  sharedConfig
);

module.exports = [scriptsConfig];

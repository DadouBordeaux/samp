const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  devtool: "inline-source-map",
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  resolve: {
    alias: {
      cesium$: "cesium/Cesium",
      cesium: "cesium/Source",
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ["url-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      // Define relative base path in cesium for loading assets
      CESIUM_BASE_URL: JSON.stringify(""),
    }),

    new CopyWebpackPlugin({
      patterns: [
        // { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
        // {
        //   from: "node_modules/cesium/Build/Cesium/ThirdParty",
        //   to: "ThirdParty",
        // },
        // { from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets" },
        // { from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets" },

        { from: "./assets/", to: "images" },

        {
          from: path.join(cesiumSource, cesiumWorkers),
          to: "Workers",
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: "Assets",
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: "Widgets",
        },
      ],
    }),
  ],
};

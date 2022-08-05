const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/users.html"),
      filename: "users.html",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/timer.html"),
      filename: "timer.html",
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/comments.html"),
      filename: "comments.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};

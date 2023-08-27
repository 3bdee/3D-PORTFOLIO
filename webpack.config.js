const path = require("path");

module.exports = {
  entry: "./src/index.js", // Specify the entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Specify the output directory
    filename: "bundle.js", // Specify the output bundle file name
  },
  module: {
    rules: [
      // Define your loaders/rules for different file types (e.g., JavaScript, CSS, etc.)
      // For example, you can use babel-loader for JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              throwIfNamespace: false,
            },
          },
        ],
      },
    ],
  },
};

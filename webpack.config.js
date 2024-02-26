const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/MyReactComponent.js", // Entry point of your React component
  output: {
    filename: "my-react-component.js", // Output file name
    path: path.resolve(__dirname, "dist"), // Output directory
    library: "MyReactComponent", // Name of the global variable exposed
    libraryTarget: "umd", // Universal Module Definition
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader", // Use Babel for transpiling React code
          options: {
            presets: ["@babel/preset-react"], // React preset for Babel
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

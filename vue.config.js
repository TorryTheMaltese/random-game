const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "/random-game",
  outputDir: path.resolve(__dirname, "dist"),
});

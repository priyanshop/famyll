module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  env: {
    production: {
      plugins: [
        "react-native-paper/babel",
        [
          "module-resolver",
          {
            extensions: [".tsx", ".ts", ".js", ".json"],
          },
        ],
        "react-native-reanimated/plugin",
      ],
    },
  },
};

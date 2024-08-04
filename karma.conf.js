module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: ["src/**/*.spec.ts"],
    preprocessors: {
      "src/**/*.spec.ts": ["typescript"],
    },
    browsers: ["ChromeHeadless"],
    reporters: ["progress"],
    singleRun: true,
    logLevel: config.LOG_INFO,
    typescriptPreprocessor: {
      options: {
        sourceMap: true,
      },
    },
  });
};

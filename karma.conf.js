module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      "karma-jasmine",
      "karma-coverage",
      "karma-jasmine-html-reporter",
      "@angular-devkit/build-angular/plugins/karma",
      "karma-puppeteer-launcher",
    ],
    browsers: ["Puppeteer"],
    client: {
      clearContext: false,
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage/frontend"),
      subdir: ".",
      reporters: [{ type: "html" }, { type: "text-summary" }],
    },
    reporters: ["progress", "kjhtml"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    restartOnFileChange: true,
  });
};

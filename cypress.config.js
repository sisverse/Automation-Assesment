const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practicetestautomation.com/",
    chromeWebSecurity: false,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 25000,
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {},
  },
});

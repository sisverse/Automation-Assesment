const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://practicetestautomation.com/",
    chromeWebSecurity: false,
    experimentalModifyObstructiveThirdPartyCode: true, // this configuration prevents authentication workflow from entering an infinite redirect loop.
    experimentalOriginDependencies: true,
    pageLoadTimeout: 100000,
    defaultCommandTimeout: 25000,
    viewportWidth: 1366,
    viewportHeight: 768,
    setupNodeEvents(on, config) {},
  },
});

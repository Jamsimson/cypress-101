const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  e2e: {
    baseUrl: "https://uatservice-etax.one.th/",
  },
});

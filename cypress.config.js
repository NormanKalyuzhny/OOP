const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: `https://qauto2.forstudy.space/`,
    env:{BASE_URL: "https://guest:welcome2qauto@qauto2.forstudy.space"},
    specPattern: 'cypress/integration/tests/**/*.{js,jsx,ts,tsx}',
    supportFile: false
  },
});
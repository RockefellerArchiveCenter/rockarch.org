module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Wait for fonts to load before taking a screenshot
  await page.evaluateHandle('document.fonts.ready');
};

// Disable CSS transitions which can cause layout shifts to be delayed until after the screenshot has actually
// been taken: https://github.com/garris/BackstopJS/issues/1449#issuecomment-1367493309
const fs = require("fs")

module.exports = async (page) => {
  // Disable transitions
  await page.addStyleTag({ content: fs.readFileSync("backstop_data/engine_scripts/backstop.css", "utf-8") })

  // Prompt lazy-loaded images to load
  await page.evaluate(() => document.querySelectorAll("img[loading=lazy]").forEach(img => img.loading = "eager"))

  await page.waitForNetworkIdle({ idleTime: 250 })
}
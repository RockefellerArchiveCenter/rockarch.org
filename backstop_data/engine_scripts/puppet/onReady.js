module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');

  // Disable CSS transitions to avoid layout shifts being delayed
  const fs = require("fs")
  await page.addStyleTag({ content: fs.readFileSync("backstop_data/engine_scripts/backstop.css", "utf-8") });
};

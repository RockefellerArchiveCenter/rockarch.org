module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');

  // Disable CSS transitions which can cause layout shifts to be delayed until after the screenshot has actually
  // been taken: https://github.com/garris/BackstopJS/issues/1449#issuecomment-1367493309
  const fs = require("fs")
  await page.addStyleTag({ content: fs.readFileSync("backstop_data/engine_scripts/backstop.css", "utf-8") });
};

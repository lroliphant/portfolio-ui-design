const browserslist = require("browserslist");
const { bundle, browserslistToTargets, composeVisitors } = require("lightningcss");

module.exports = (config) => {
  // config.setDataDeepMerge(true); // what does this do?

  // to recognize our file and include in the build directory
  config.addPassthroughCopy("src/images/**/*");
  config.addPassthroughCopy("src/fonts/*");
  config.addPassthroughCopy("src/styles/*");

  // watch for changes
  config.addWatchTarget("/src/scripts/");
  config.addWatchTarget("/src/styles/");

  config.addLayoutAlias("base", "layouts/base.njk");

  // config.addFilter("readableDate", require("./lib/filters/readableDate")); // add npm package to do this
  // config.addFilter("minifyJs", require("./lib/filters/minifyJs"));

  // config.addTransform("minifyHtml", require("./lib/transforms/minifyHtml")); // what does this do?

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["njk", "html"],
  };
};

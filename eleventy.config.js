const lightningCSS = require("@11tyrocks/eleventy-plugin-lightningcss");
const esbuild = require('esbuild');

module.exports = (config) => {

  // to recognize our file and include in the build directory
  config.addPassthroughCopy("src/images/**/**/*");
  config.addPassthroughCopy("src/fonts/*");
  config.addPassthroughCopy("src/styles/**/*");
  config.addPassthroughCopy("src/content/**/*");

  // watch for changes
  config.addWatchTarget("/src/scripts/");
  config.addWatchTarget("/src/styles/");

	// plugins
	config.addPlugin(lightningCSS);

  // config.addTransform("minifyHtml", require("/src/scripts/transforms/minifyHtml"));

  // JavaScript
	config.addTemplateFormats("js");

	config.addExtension("js", {
		outputFileExtension: "js",
		compile: async (content, path) => {
			if (path !== "./src/scripts/index.js") {
				return;
			}

			return async () => {
				let { outputFiles } = await esbuild.build({
					target: "es2020",
					entryPoints: [path],
					minify: true,
					bundle: true,
					write: false,
				});

				return outputFiles[0].text;
			};
		},
	});

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    templateFormats: ["njk", "html"],
  };
};

const htmlmin = require("html-minifier");
const prettier = require("prettier");
const env = process.env.NODE_ENV || "production";

module.exports = function(config) {
  config.addPassthroughCopy("cms.yml");

  config.addCollection("personnel", function(collection) {
    return collection.getFilteredByGlob("_src/personnel/*.md");
  });

  // config.addCollection("post", function(collection) {
  //   return collection.getFilteredByGlob("_src/post/*.md");
  // });

  config.addCollection("service", function(collection) {
    return collection.getFilteredByGlob("_src/service/*.md");
  });

  config.addFilter("log", function(value) {
    console.log(JSON.stringify(value));
    return value;
  });

  config.addFilter("currency", function(value) {
    return "£" + value.toFixed(2);
  });

  if (env === "production") {
    config.addTransform("minify", function(content, outputPath) {
      if (outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: false,
          collapseWhitespace: true
        });
      }

      return content;
    });

    config.addTransform("prettify", function(content, outputPath) {
      if (outputPath.endsWith(".html")) {
        return prettier.format(content, {
          parser: "html",
          printWidth: 99999,
          useTabs: true,
          htmlWhitespaceSensitivity: "ignore"
        });
      }

      return content;
    });
  }

  config.setBrowserSyncConfig({
    files: "_dist/**/*",
    ghostMode: false,
    localOnly: true,
    online: false,
    open: "local",
    proxy: false,
    server: { baseDir: "_dist", index: "index.html" }
  });

  return {
    dir: {
      input: "_src",
      layouts: "_layouts",
      output: "_dist"
    }
  };
};

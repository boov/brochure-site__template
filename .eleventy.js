const env = process.env.NODE_ENV || "production";
const htmlmin = require("html-minifier");
const prettier = require("prettier");

module.exports = function (config) {
  config.addPassthroughCopy("cms.yml");
  config.addPassthroughCopy("humans.txt");

  config.addCollection("dish", function (collection) {
    return collection.getFilteredByGlob("_src/dish/*.md");
  });

  config.addCollection("personnel", function (collection) {
    return collection.getFilteredByGlob("_src/personnel/*.md");
  });

  config.addCollection("post", function (collection) {
    return collection.getFilteredByGlob("_src/post/*.md").reverse();
  });

  config.addCollection("project", function (collection) {
    return collection.getFilteredByGlob("_src/project/*.md").reverse();
  });

  config.addCollection("service", function (collection) {
    return collection.getFilteredByGlob("_src/service/*.md");
  });

  config.addCollection("testimonial", function (collection) {
    return collection.getFilteredByGlob("_src/testimonial/*.md");
  });

  config.addCollection("vacancy", function (collection) {
    return collection.getFilteredByGlob("_src/vacancy/*.md").reverse();
  });

  config.addFilter("gbp", function (value) {
    return "£" + value.toFixed(2);
  });

  config.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy");
  });

  config.addFilter("thousands", function (value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  if (env === "production") {
    config.addTransform("minify", function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        return htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: false,
          collapseWhitespace: true
        });
      }

      return content;
    });

    config.addTransform("prettify", function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        return prettier.format(content, {
          parser: "html",
          printWidth: 99999,
          useTabs: true
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

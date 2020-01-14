const PurgeCSS = require("purgecss");
const fs = require("fs");
const src = "_dist/**/*.html";
const dest = "_dist/_assets/styles/main.css";

const output = new PurgeCSS({
  content: [src],
  css: [dest],
  fontFace: false,
  keyframes: false,
  whitelistPatterns: [/--reveal/, /--hidden/]
}).purge();

fs.writeFile(dest, output[0].css, function(err) {
  if (err) return console.log(err);
});

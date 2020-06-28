const Parcel = require("parcel-bundler");

const files = [
  "./_src/_assets/fonts/**/*",
  "./_src/_assets/images/**/*",
  "./_src/_assets/scripts/*.js",
  "./_src/_assets/styles/*.scss"
];

const options = {
  hmr: false,
  outDir: "./_dist/_assets",
  publicUrl: "/_assets",
  sourceMaps: false
};

(async function () {
  const bundler = new Parcel(files, options);
  await bundler.bundle();
})();

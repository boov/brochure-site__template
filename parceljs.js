const Parcel = require("parcel-bundler");

const files = [
  "./_src/_assets/fonts/**/*",
  "./_src/_assets/images/**/*",
  "./_src/_assets/scripts/*.js",
  "./_src/_assets/styles/*.scss"
];

const options = {
  autoInstall: true,
  hmr: false,
  outDir: "./_dist/_assets",
  scopeHoist: false,
  sourceMaps: false
};

(async function() {
  const bundler = new Parcel(files, options);
  await bundler.bundle();
})();

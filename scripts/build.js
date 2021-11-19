const { join } = require("path");
const fse = require("fs-extra");
const { exec } = require("child_process");

const root = process.cwd();
const dist = join(root, "dist");
const src = join(root, "src");
const assets = join(root, "assets");

const deleteDist = () => {
  if (fse.pathExistsSync(dist)) {
    console.log("> deleteDist");
    fse.removeSync(dist);
  }
};

const copyAssets = () => {
  console.log("> copyAssets");
  fse.copySync(assets, join(dist, "assets"));
};

compileMD = () => {
  console.log("> compileMD");
  exec("index-md", (error, stdout, stderr) => {
    if (error || stderr) {
      console.log("Failed to execute index-md");
    }
    if (error) {
      console.log(error.message);
      return;
    }
    if (stderr) {
      console.log(stderr);
      return;
    }
    console.log(stdout);
  });
};

deleteDist();
copyAssets();
compileMD();

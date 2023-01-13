//@ts-check
const { dirname, resolve } = require("path");
const { app, BrowserWindow } = require("electron");
const express = require("express");
var serveIndex = require("serve-index");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

if (app.commandLine.hasSwitch("help")) {
  console.log(
    "Runs a directory. Either run from the directory, or pass the directory as an argument"
  );
  process.exit(0);
}

/**@type {string[]} */
const args = process.argv;

const workingFile =
  args.length && args[2] ? resolve(process.cwd(), args[2]) : process.cwd();

const workingDir = workingFile.endsWith(".html")
  ? dirname(workingFile)
  : workingFile;

//console.log({args, cwd: process.cwd(), appPath: app.getAppPath(), workingFile, workingDir})

Promise.all([
  new Promise((ok, no) => {
    const server = express()
      .use(function (req, res, next) {
        res.header("Cross-Origin-Embedder-Policy", "require-corp");
        res.header("Cross-Origin-Opener-Policy", "same-origin");
        next();
      })
      .use(express.static(workingDir))
      .use(serveIndex(workingDir))
      .listen(0, () => ok(server.address()))
      .on("error", no);
  }),
  app.whenReady(),
]).then(([{ port }]) => {
  const mainWindow = new BrowserWindow();
  const url = `http://localhost:${port}`;
  console.log(`listening on port ${url}`);
  mainWindow.loadURL(url);
});

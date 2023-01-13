const options = {
  name: "Web Player",
  id: "mutnt.directorybrowser",
  categories: ["Network", "Utility"],
  genericName: "Browser",
  description: "Run local directories in an electron browser",
  mimeType: ["text/html"],
};

module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    /** /
    {
      name: "@electron-forge/maker-squirrel",
      config: { options },
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        format: "ULFO",
        options,
      },
    },
    /**/
    {
      name: "@electron-forge/maker-flatpak",
      config: {
        options,
      },
    },
  ],
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "mutnt",
          name: "web-player",
        },
        prerelease: true,
      },
    },
  ],
};

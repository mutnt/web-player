module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    /*
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
    */
    {
      name: "@electron-forge/maker-flatpak",
      config: {
        options: {
          name: "Web Player",
          id: "mutnt.directorybrowser",
          categories: ["Network", "Utility"],
          genericName: "Browser",
          description: "Run local directories in an electron browser",
          mimeType: ["text/html"],
        },
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

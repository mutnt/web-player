# Web Player

Local Directory Server and Browser

Point it at a directory and run it to get the directory served through an express server and rendered in a browser.

If you use the flatpak, do this so the app can access your local directories:

```sh
flatpak override mutnt.directorybrowser --filesystem="$HOME"
```
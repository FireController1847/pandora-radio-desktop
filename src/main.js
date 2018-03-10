const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// Main
let window;
app.on('ready', () => {
  window = new BrowserWindow({
    width: 1024,
    height: 768,
    minHeight: 10,
    minWidth: 10,
    autoHideMenuBar: true,
    icon: path.join(__dirname, './assets/icons/pandora.ico'),
    backgroundColor: "linear-gradient(180deg,#00a0ee,#386aff 50%)",
    show: false
  });
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  window.once('ready-to-show', () => {
    window.show();
  });
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
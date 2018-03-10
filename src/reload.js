const reload = require('electron-reload');
reload(__dirname, {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron.cmd'),
  hardResetMethod: 'exit'
});
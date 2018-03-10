const path = require('path');
const fs = require('fs');

window.onload = () => {
  window.webview = document.querySelector('webview');
  window.webview.addEventListener('dom-ready', evt => {
    window.webview.insertCSS(fs.readFileSync(path.join(__dirname, './assets/css/style.css'), 'utf8'));
  });
  window.webview.addEventListener('page-title-updated', evt => {
    document.title = evt.title;
  });
};
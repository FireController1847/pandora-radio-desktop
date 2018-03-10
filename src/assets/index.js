const path = require('path');
const fs = require('fs');

window.onload = () => {
  window.webview = document.querySelector('webview');
  window.webview.addEventListener('dom-ready', function(evt) {
    this.openDevTools();
    this.insertCSS(fs.readFileSync(path.join(__dirname, './assets/css/style.css'), 'utf8'));
    this.executeJavaScript(fs.readFileSync(path.join(__dirname, './assets/js/disabledragdrop.js'), 'utf8'));
  });
  window.webview.addEventListener('page-title-updated', evt => {
    document.title = evt.title;
  });
};
document.addEventListener('drop', function(e) {
  console.log('Drop');
  e.preventDefault();
  e.stopPropagation();
});
document.addEventListener('dragover', function(e) {
  console.log('Drag');
  e.preventDefault();
  e.stopPropagation();
});
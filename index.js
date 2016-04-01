var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready', function () {
  var window = new BrowserWindow();
  window.loadUrl('http://localhost:8000');
});

try {
  var tty = require("tty.js");
} catch (e) {
  console.log("Couldn't find tty.js");
  return;
}
var options = {
  "port": 8000,
  "shell": "bash"
};
var ttyServer = tty.createServer(options);

ttyServer.listen();

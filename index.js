const { app, BrowserWindow } = require('electron');

function createWindow () {
   // Create the browser window.
   let win = new BrowserWindow({
       width: 800,
       height: 600,
       webPreferences: {
           nodeIntegration: true
       }
   });

   let ytMusicUrl = "https://music.youtube.com";

   // and load the youtube music url.
   win.loadURL(ytMusicUrl);
}

app.on('ready', createWindow);
const {app, BrowserWindow, ipcMain	} = require('electron');
const path = require("path");
const isDev = require('electron-is-dev');


function writeLog(str, object){
  console.log(`LOG: ${str}`)
  if(object != undefined && typeof(object) != 'undefined' && object != null)
    console.log(object)
}

let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 340,
    height: 588,
    resizable: false,
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true, // is default value after Electron v5
      preload: path.join(__dirname, 'preload.js') // use a preload script
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );

  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

  
ipcMain.on('resize-back', (event, arg) => {
  win.resizable = true;
  win.setSize(340,588)
  win.resizable = false;
})

ipcMain.on('resize', (event, arg) => {
  win.resizable = true;
  win.setSize(185, 310)
  win.resizable = false;
})
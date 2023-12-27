const {BrowserWindow, app} = require('electron')
const path = require('path')
// require('devtron').install();
const createWindow = ()=>{
  const mainWindow = new BrowserWindow({
        width:800,
        height:800,
      webPreferences:{
            preload: path.resolve(__dirname, './reload.js')
      }
    })
    mainWindow.loadFile(path.resolve(__dirname,'index.html'))
    mainWindow.webContents.openDevTools()

}
let a =  true;
if (a) {
    a = false;
}
app.whenReady().then(()=>{
    // require('devtron').install();
    console.log(12360565656565656)
    createWindow()
})
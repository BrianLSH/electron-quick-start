const {BrowserWindow, app,ipcMain} = require('electron')
const path = require('path')
// require('devtron').install();
const createWindow = ()=>{
  const mainWindow = new BrowserWindow({
        width:800,
        height:800,
      webPreferences:{
            preload: path.resolve(__dirname, './reload.js'),
            nodeIntegration: true // 让预加载脚本可以使用node权限
      }
    })
    mainWindow.loadFile(path.resolve(__dirname,'index.html'))
    mainWindow.webContents.openDevTools()

}

// 监听来自预加载的send事件
// 主进程是node环境 可以在控制台看得到
// 渲染进程是chrome环境  去控制台看
ipcMain.on('send', ()=>{
    // console.log('from preload event')
})

// render调用preload 里面的 ipcrederers来和主进程通信
ipcMain.on('test1', ()=>{
    console.log('test1')  //主进程是node环境，在终端cmd看就行
})


app.whenReady().then(()=>{
    // require('devtron').install();
    console.log(12360565656565656)
    createWindow()
})
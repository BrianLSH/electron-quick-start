const fs = require('fs')

// console.log('prelaod')
const {ipcRenderer,contextBridge} = require('electron')
// 预加载脚本可以获取dom、操作dom 通过适合放在渲染进程 各司其事  预加载脚本负责通信
window.addEventListener('DOMContentLoaded', ()=>{
    let ele = document.getElementById('test')
    // console.log(ele)
})

// nodeIntegration: true // 让预加载脚本可以使用node权限
const content = fs.readFileSync('package.json', "utf-8")
// console.log(content)

/*
* 跟主进程发送事件
* */
ipcRenderer.send('send')


// 渲染进程和预加载脚本变量是独立的
window.nm = 'liu'
// console.log('preload',window.nm)
// 暴露变量
// contextBridge.exposeInMainWorld('test', {
//     name:'张三'
// })
contextBridge.exposeInMainWorld('test', {
    test1:()=>{
        ipcRenderer.send('test1') // 调用主进程
    }
})


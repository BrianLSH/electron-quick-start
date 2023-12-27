const fs = require('fs')
console.log('prelaod')

// 预加载脚本可以获取dom 通过适合放在渲染进程 各司其事  预加载脚本负责通信
window.addEventListener('DOMContentLoaded', ()=>{
    let ele = document.getElementById('test')
    console.log(ele)
})

// nodeIntegration: true // 让预加载脚本可以使用node权限
const content = fs.readFileSync('package.json', "utf-8")
console.log(content)


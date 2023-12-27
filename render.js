// 渲染进程和预加载脚本变量是独立的
window.nm = 'hui'
// console.log('render',window.nm)

// 渲染进程和预加载脚本之间通信
// 1、预加载脚本---桥接--暴露变量
// 2、预加载脚本----回调函数调----用执行一些脚本
// console.log(window.test.name)
window.addEventListener('DOMContentLoaded', ()=>{
    let ele = document.getElementById('test1')
    ele.addEventListener('click', ()=>{
        window.test.test1();
    })
    // console.log(ele)
})
import {ref} from 'vue'
export const isScreen=ref(false)

// 切换状态
export function toggleFullScreen(){
  isFullScreen()? exitFullScreen():fullScreen()
  isScreen.value=!isFullScreen()
}

// 全屏
function fullScreen(){
  const docElm=document.documentElement;
  if(docElm.requestFullscreen){
    docElm.requestFullscreen()
  }
}

// 退出全屏
function exitFullScreen(){
  if(document.exitFullscreen){
    document.exitFullscreen()
  }
}
// 判断是否全屏
function isFullScreen(){
  return document.fullscreenElement !== null
}

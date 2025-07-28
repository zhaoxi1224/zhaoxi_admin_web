import { ref } from "vue"
export const theme=ref('light')

// 设置黑夜模式
export function setThem(val: string) {
  if (val === "dark") {
    document.body.setAttribute('arco-theme','dark')
  } else {
    document.body.removeAttribute('arco-theme')
  }
  theme.value = val
  localStorage.setItem("theme",val)
}

// 读取主题
export function loadTheme() {
  const val=localStorage.getItem("theme")
  if (val === "dark") {
    setThem(val)
  }
}

loadTheme()

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/base.css"
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import "nprogress/nprogress.css"
import '@/assets/public.less'
import '@/assets/iconfont.css'
import {apiMock} from "@/mock"


const app = createApp(App)

apiMock()
app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.use(ArcoVueIcon)

app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
//导入插件
import router from './router'
import store from './store/main'
//导入封装的请求
import yRequest from './service'
//导入样式
// import 'element-plus/dist/index.css'
import 'normalize.css'
import '@/assets/css/index.less'
//element-plus组件
import globalEl from './global'

const app = createApp(App)
//注册element-plus和其他的组件
app.use(globalEl)
app.use(router)
app.use(store)
//挂载app
app.mount('#app')

yRequest.request({
  url: '/home/multidata',
  method: 'GET'
})

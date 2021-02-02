import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入element组件库
import './plugins/element.js'
// 引入全局样式
import './assets/css/global.css'
// 引入字体图标
import './assets/fonts/iconfont.css'
// 导入axios的包
import axios from 'axios'

import TreeTable from 'vue-table-with-tree-grid'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 设置请求拦截器
axios.interceptors.request.use((config) => {
  // console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 这里一点更要返回config 不然拿不到真实数据
  return config
})

// 这个叫响应拦截器   // 无效 token 的处理
axios.interceptors.response.use((res) => {
  if (res.data.meta.msg === '无效token' && res.data.meta.status === 400) {
    location.href = '/#/login'
  }
  // 这里也返回res不然拿不到真实数据
  return res
})
// 在Vue实例原型上去挂载这个$http 这样一个方法便于操作axios 请求数据
Vue.prototype.$http = axios

Vue.component('tree-table', TreeTable)
Vue.config.productionTip = false

new Vue({
  // 挂在路由
  router,
  render: (h) => h(App)
}).$mount('#app')

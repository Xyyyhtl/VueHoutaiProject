import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入element-ui组件
import ElementUI from 'element-ui'
// 导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI) // 全局注册elementUI
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

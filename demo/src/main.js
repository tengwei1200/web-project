// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './style/import.scss'
import Co_component from "./component/index";
import InitRules from "./utils/initRules";
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' //这个样式必须引入

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
router.afterEach((to, from, next) => {
  NProgress.done()
})

Vue.prototype.$initRules = InitRules;
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Co_component)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

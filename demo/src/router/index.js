import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'

Vue.use(Router)
export default new Router({
  routes: [
      { path: '/', redirect: '/carMange' },
      { path: '/carMange', name: '车辆管理',component: Layout, meta: { keepAlive: false },children: [
          { path: '/carMange/carCount', name: '车辆总表', component: () => import ('../views/carMange/carCount') , meta: {keepAlive: true} },
          { path: '/carMange/secondCar', name: '过户车辆', component: () => import ('../views/carMange/secondCar') , meta: {keepAlive: true} },
          { path: '/carMange/realName', name: '实名认证', component: () => import ('../views/carMange/realName'), meta: {keepAlive: true} },
          { path: '/carMange/productCar', name: '地图测试', component: () => import ('../views/carMange/productCar') , meta: {keepAlive: true} },
        ]
      },
      {
        path: '/carTest', name:'车辆型号', component: Layout, meta: { keepAlive: false }, children: [
          { path: '/carTest/testCar', name: '测试车', component: () => import ('../views/carTest/testCar') , meta: {keepAlive: true} },
          { path: '/carTest/mediaCar', name: '媒体车', component: () => import ('../views/carTest/mediaCar') , meta: {keepAlive: true} },
          { path: '/carTest/exhibiCar', name: '展车', component: () => import ('../views/carTest/exhibiCar'), meta: {keepAlive: true} },
        ] 
      }
  ]
})
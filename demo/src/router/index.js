import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout'
import CarCount from '@/views/carMange/carCount'
import SecondCar from '@/views/carMange/secondCar'
import RealName from '@/views/carMange/realName'
import ProductCar from '@/views/carMange/productCar'

import TestCar from '@/views/carTest/testCar'
import MediaCar from '@/views/carTest/mediaCar'
import ExhibiCar from '@/views/carTest/exhibiCar'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/carMange', name: '车辆管理',component: Layout, meta: { keepAlive: false },children: [
        { path: '/carMange/carCount', name: '车辆总表', component: CarCount, meta: {keepAlive: true} },
        { path: '/carMange/secondCar', name: '过户车辆', component: SecondCar, meta: {keepAlive: true} },
        { path: '/carMange/realName', name: '实名认证', component: RealName, meta: {keepAlive: true} },
        { path: '/carMange/productCar', name: '产线车辆', component: ProductCar, meta: {keepAlive: true} },
      ]
    },
    {
      path: '/carTest', name:'车辆型号', component: Layout, meta: { keepAlive: false }, children: [
        { path: '/carTest/testCar', name: '测试车', component: TestCar, meta: {keepAlive: true} },
        { path: '/carTest/mediaCar', name: '媒体车', component: MediaCar, meta: {keepAlive: true} },
        { path: '/carTest/exhibiCar', name: '展车', component: ExhibiCar, meta: {keepAlive: true} },
      ] 
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
 
//组件模块
import corpUserManagement from '../pages/corpUserManagement' 
import  approvalDetail from '../pages/corpUserManagement/approvalDetail'

Vue.use(Router)
 
export default new Router({
  routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: resolve => require(['../pages/corpUserManagement'], resolve),
  //     redirect: '/home',
  // },
  {
    path: '/home/corpUserManagement',
    name: 'corpUserManagement',
    component: corpUserManagement
},
{
  path: '/home/approvalDetail',
  name: 'approvalDetail',
  component: approvalDetail
}
  ]
})
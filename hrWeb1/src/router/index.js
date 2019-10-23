import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import ResetPassword from '../views/ResetPassword.vue'
import ResetResult from '../views/ResetResult.vue'
import Register from '../views/Register.vue'
import RegisterResult from '../views/RegisterResult.vue'
import UserLicense from '../views/UserLicense.vue'
import JobDetail from '../views/JobDetail.vue'
// import Resumes from '../views/Resumes.vue'
import Resume from '../views/Resume.vue'
import Position from '../views/Position.vue'
import Station from '../views/Station.vue'
import JobList from '../views/JobList.vue'
import Personal from '../views/Personal.vue'
import InforChange from '../views/inforchange.vue'
import AboutUs from '../views/AboutUs.vue'
import Specialty  from '../views/Specialty.vue'
import Gap  from '../views/Gap.vue'
// import map from '../views/maps.vue'

Vue.use(Router);

const router = new Router({
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'front',
            component: resolve => require(['../layout/front/index'], resolve),
            redirect: '/home',
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: Home
                },
            ]
        },
        {
            path: '/',
            name: 'front',
            component: resolve => require(['../layout/front/nav'], resolve),
            redirect: '/home',
            children: [
                {
                    path: '/resume',
                    name: '简历',
                    component: Resume
                },
                {
                    path: '/position',
                    name: '企业详情',
                    component: Position
                },
                {
                    path: '/personal',
                    name: '百度地图',
                    component: Personal
                },
                {
                    path: '/inforchange',
                    name: 'inforchange',
                    component: InforChange
                },
                {
                    path: '/joblist',
                    name: '职位',
                    component: JobList
                },
                {
                    path: '/aboutus/:id',
                    name: '职位',
                    component: AboutUs
                },
                {
                    path: '/specialty',
                    name: '职位',
                    component: Specialty
                },
                {
                    path: '/gap',
                    name: '空白',
                    component: Gap
                },
                {
                    path: '/station',
                    name: '空白',
                    component: Station
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/reset-password',
            name: 'reset-password',
            component: ResetPassword
        },
        {
            path: '/reset-result',
            name: 'reset-result',
            component: ResetResult
        },
        {
            path: '/register-result',
            name: 'register-result',
            component: RegisterResult
        },
        {
            path: '/user-license',
            name: 'user-license',
            component: UserLicense
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: JobDetail
        },
        
    ]
});


// 注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
    const token = store.state.token
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
      if (token) { // 通过vuex state获取当前的token是否存在
        next()
      } else {
        alert('该页面需要登陆')
        next({
          path: '/login'
          // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }
    } else {
      next()
    }
  })

  export default router
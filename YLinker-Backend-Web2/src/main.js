import Vue from 'vue'
import App from './App.vue'
import router from './router' ;
import './plugins/element.js'
import store from './store'
// import axios from 'axios'
// require('./mock')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'theme/index.css';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
// import vuescroll from 'vuescroll';
import BaiduMap from 'vue-baidu-map'
Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.use(vuescroll, {
//   ops: {
//     bar: {
//       onlyShowBarOnScroll: false,
//       background: '#c1c1c1',
//     }
//   },
//   name: 'Scroll'
// });
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'LGSF5bLoRGYzsOBrr20kXazopMHxLgL1'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

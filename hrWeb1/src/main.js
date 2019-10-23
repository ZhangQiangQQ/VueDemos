import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import 'theme/index.css';
import './utils/http'
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import scroll from 'vue-seamless-scroll'
// import Cookies from 'js-cookie'
import Moment from 'moment'
import { Message } from 'element-ui'
import {CodeToTag} from './cookie';
import cookie from 'vue-cookie'

Vue.use(scroll)
// import vuescroll from 'vuescroll';
import BaiduMap from 'vue-baidu-map'
Vue.use(ElementUI);
// Vue.prototype.$Cookies=Cookies;
Vue.prototype.$moment = Moment;
Vue.prototype.$message = Message
Vue.prototype.$cookie = cookie;
Vue.prototype.$CodeToTag = {
  CodeToTag
}
// 定义全局时间戳过滤器
Vue.filter('formatDate', function(value) {
  var timestamp = (new Date()).getTime()-24*60*60*1000
  var timestampOne = (new Date()).getTime()-48*60*60*1000
  if(value > timestamp) {
    return Moment(value).format('今天'+'HH:mm');
  }
  else if(value > timestampOne && value < timestamp) {
    return Moment(value).format('昨天'+'HH:mm');
  }
  else{
    return Moment(value).format('MM-DD');
  }
});
Vue.filter('formatDateOne', function(value) {
  return Moment(value).format('YYYY-MM')
})
Vue.filter('formatDateTwo', function(value) {
  return Moment(value).format('YYYY-MM-DD HH:mm')
})
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

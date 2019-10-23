import Vue from 'vue'
import Vuex from 'vuex'
import corpUserManagement from './modules/corpUserManagement'
import approvalDetail from './modules/corpUserManagement/approvalDetail'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    corpUserManagement,
    approvalDetail
  },
  strict: debug
//   plugins: debug ? [createLogger()] : []
})
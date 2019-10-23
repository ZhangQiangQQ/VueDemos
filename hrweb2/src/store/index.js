import Vue from 'vue';
import Vuex from 'vuex';
import { DONE_LOGOUT, DONE_LOGIN } from './mutation-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin: true
  },
  mutations: {
    [DONE_LOGIN] (state) {
      state.hasLogin = true;
    },
    [DONE_LOGOUT] (state) {
      state.hasLogin = false;
    }
  }
});

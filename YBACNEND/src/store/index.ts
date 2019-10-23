import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './root-states';
import {
  SYNC_USER_INFO,
  RESET_USER_INFO,
  UPDATE_LOGIN_STATUS,
  UPDATE_CONSTANTS,
  LOGOUT,
} from './mutation-types';
import { logout } from '../apis/account';
import router from '../router';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    userInfo: {},
    hasLogin: false,
    constants: {
      initialized: false,
      enterpriseForm: [],
      industryTypes: [],
      positionCatalogs: [],
      districts: [],
      options: {},
    },
  },
  mutations: {
    [UPDATE_LOGIN_STATUS](state: RootState, payload) {
      state.hasLogin = !!payload;
    },
    [SYNC_USER_INFO](state: RootState, payload) {
      state.userInfo = payload;
      state.hasLogin = true;
    },
    [RESET_USER_INFO](state: RootState) {
      state.userInfo = {};
      state.hasLogin = false;
    },
    [UPDATE_CONSTANTS](state: RootState, payload) {
      state.constants = {
        ...payload,
        initialized: true,
      };
    },
    async [LOGOUT](state: RootState) {
      state.userInfo = {};
      state.hasLogin = false;
      try {
        await logout();
        router.push({ name: 'login' });
      } catch (e) {
        // in case the redirect URL is invalid;
        router.push({ name: 'login' });
      }
    },
  },
};

export default new Vuex.Store<RootState>(store);

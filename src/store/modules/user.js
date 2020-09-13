import loginApi from '@/api/loginApi';
import {getToken, setToken} from '@/utils/auth';
import Cookies from 'js-cookie';

const user = {
  state: {
    token: getToken(),
    username: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USERNAME: (state, username) => {
      state.username = username;
    }
  },

  actions: {
    // 登录
    login({commit}) {
      return new Promise((resolve, reject) => {
        let userInfo = {
          username: 'admin',
          password: '111'
        }
        loginApi
          .login(userInfo)
          .then(response => {
            if (response.data.token) {
              const data = response.data;
              commit('SET_TOKEN', data.token); // 登录时保存token到vuex
              setToken(data.token); // 同时也保存到cookie
              Cookies.set('username', data.username); // 保存用户名
              commit('SET_USERNAME', data.username);
              resolve(response);
            } else {
              resolve(response);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default user;

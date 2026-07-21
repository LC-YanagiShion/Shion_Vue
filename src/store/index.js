import { createStore } from 'vuex';

export default createStore({
  state: {
    token: false, // 用户是否登录
    username: '',//保存用户名的状态
    activeNavPath: "", // 导航栏名称
  },
  //获取器
  getters: {
    getToken: (state) => state.token, // 获取用户是否登录的getter
    getActiveNavPath: (state) => state.activeNavPath, // 获取导航栏名称的getter
    getUsername: (state) =>  state.username,//获取用户名的getter
    
  },
  //修改器
  mutations: {
    setToken(state, token) {
      state.token = token; //更新用户登录状态的mutation 
    },
    setActiveNavPath(state, activeNavPath) {
      state.activeNavPath = activeNavPath; //更新导航栏名称的mutation
    },
    setUsername(state, username) {
      state.username = username; //更新用户名的mutation
    },
  },
  actions: {
   updatateUsername({ commit }, username) {
     commit('setUsername', username);//更新用户名的action（通常用于异步操作）
   }, 
  },
  modules: {
    
  },
});
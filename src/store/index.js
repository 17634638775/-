import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    token: '',
    id: '',
    shuliang: [],
    ck: [],
    zongjia:0,
    zfb:{},
    sl:0
  },
  mutations: {
    save(state, token) {
      state.token = token
    },
    dingdan(state, item) {
      state.id = item[0]
      state.shuliang = item[1]
    },
    ck(state, item) {
      state.ck = item
      console.log(state.ck,"地址")
    },
    zongjia(state,item){
      state.zongjia=item
      console.log(state.zongjia,"vuex")
    },
    zfb(state,item){
      state.zfb=item
    },
    shuliang(state,item){
      state.sl=item
    }

  },
  actions: {
    save(context, token) {
      context.commit('save', token)
    },
    dingdan(context, item) {
      context.commit('dingdan', item)
      console.log(item, "双重")
    },
    ck(context, item) {
      context.commit("ck", item)
    },
    zongjia(context,item){
      context.commit('zongjia',item)
    },
    zfb(context,item){
      context.commit('zfb',item)
    },
    shuliang(context,item){
      context.commit('shulaing',item)
    }
  },
  modules: {}
})
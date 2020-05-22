import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    page: 'loginPage'
  },
  getters: {
    Get_Page (state){
      return state.page;
    }
  },
  mutations: {
    Change_Page_Mutation(state, payload) {
      state.page = payload;
    }
  },
  actions: {
    Change_Page_Action(context, payload){
      context.commit('Change_Page_Mutation',payload)
    }
  },
  modules: {
  }
})

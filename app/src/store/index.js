import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    asideWidth: "200px",
    title: "音乐馆"
  },
  getters: {

  },
  mutations: {
    open(state) {
      this.state.asideWidth = "200px"
    },
    close(state) {
      this.state.asideWidth = "120px"
    },
    setTitle(state, title) {
      this.state.title = title
    }
  },
  actions: {

  }

})

export default store

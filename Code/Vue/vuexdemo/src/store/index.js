import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 1000
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})

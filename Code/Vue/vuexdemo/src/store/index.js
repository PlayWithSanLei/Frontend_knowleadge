import { createStore } from 'vuex'
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state) {
      state.name = 'lisi'
    }
  },
  actions: {},
  getters: {}
}

export default createStore({
  state: {
    counter: 1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'James', age: 24},
      {id: 112, name: 'kobe', age: 40},
      {id: 113, name: 'curry', age: 10},
    ],
    info: {
      name: 123,
      age: 12,
      zs: 'zs'
    }
  },
  mutations: { /*这里必须是同步方法*/
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrCount(state, payload) {
      state.counter += payload.count
    },
    decrCount(state, count) {
      state.counter -= count
    },
    updateInfo(state) {
      state.info['sanlei'] = '123'
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    moreTWStudents(state) {
      return state.students.filter(s => s.age >= 20)
    },
    getStudent(state, getters) {
      return getters.moreTWStudents.length
    },
    moreAgeStudents(state) {
      return age => {
        return state.students.filter(s => s.age >= age)
      }
    }
  },
  actions: {
    aUpdateInfo(context) {
      setTimeout(() => {
        context.commit('updateInfo')
      },1000)
    }
  },
  modules: {
    a: moduleA
  }
})

<template>
  <div class="hello">
    helloVuex
    <h2>modules</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateModule"></button>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="addCount(10)">+</button>
    <button @click="subCount(5)">-</button>
    <h2>平方</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.moreTWStudents }}</h2>
    <h2>{{ $store.getters.getStudent }}</h2>
    <h2>{{ $store.getters.moreAgeStudents(40) }}</h2>

    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo()">增加</button>
  </div>
</template>
<script>
export default {
  name: "HelloVuex",
  methods: {
    addCount(count) {
      // this.$store.commit('incrCount', count)
      this.$store.commit({
        type: 'incrCount',
        count: count
      })
    },
    subCount(count) {
      this.$store.commit('decrCount', count)
    },
    updateInfo() {
      this.$store.dispatch('aUpdateInfo')
    },
    updateModule() {
      this.$store.commit('updateName')
    }
  },
  computed: {}
}
</script>

<style scoped>
.hello {
  border: 1px solid red;
}
</style>

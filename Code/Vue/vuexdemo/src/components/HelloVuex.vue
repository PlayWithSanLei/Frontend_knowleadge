<template>
  <div class="hello">
    helloVuex
    <h2>{{$store.state.counter}}</h2>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>
  </div>
</template>

<script>
export default {
  name: "HelloVuex",
  methods: {
    add() {
      this.$store.commit('increment')
    },
    sub() {
      this.$store.commit('decrement')
    }
  }
}
</script>

<style scoped>
  .hello {
    border: 1px solid red;
  }
</style>

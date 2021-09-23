<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{counter}}</h2>
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>

    <HelloVuex></HelloVuex>
  </div>
</template>
<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'APP',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: 'app组件',
      counter: 0
    }
  }
}
</script>
<style lang="less">

</style>

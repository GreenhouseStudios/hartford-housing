<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FullPageTest></FullPageTest>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FullPageTest from './components/FullPageTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FullPageTest,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

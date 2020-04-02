<template>
  <div id="app">
    <Header></Header>
    <FullPageTest></FullPageTest>
    <Footer></Footer>
  </div>
</template>

<script>
import FullPageTest from './components/FullPageTest.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    FullPageTest,
    Header,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

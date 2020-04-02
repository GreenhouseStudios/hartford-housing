<template>
    <div>
    <ul class="nav">
      <li>
        <a href="#funders">Funders</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
      return {
      }
  }
}
</script>

<style scoped>
div {
  background-color:white;
  position: fixed;
  width: 100vw;
  height: 5vh;
  bottom: 0;
  z-index: 99;
}
li{
    text-decoration: none;
    display: inline;
    margin: 10px;
}
</style>
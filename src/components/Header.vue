<template>
  <div>
    <h1>Making Hartford Home</h1>
    <!-- <ul class="nav">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#intro">Introduction</a>
      </li>
      <li>
        <a href="#maps">Maps</a>
      </li>
      <li>
        <a href="#Settlement">Settlement</a>
      </li>
      <li>
        <a href="#housing">Housing</a>
      </li>
      <li>
        <a href="about">Profiles</a>
      </li>
    </ul> -->
    
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<style scoped>
div {
  background-color: white;
  position: fixed;
  width: 100vw;
  height: 10vh;
  top: 0;
  z-index: 99;
}
h1 {
  float: left;
  margin-left: 2vw;
}
li {
  text-decoration: none;
  display: inline;
  margin-left: 100px;
}
</style>
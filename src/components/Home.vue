<template>
  <div class="section">
    <v-img :src="require('../assets/pubhousingmap.jpg')" gradient="rgba(255,255,255,1),rgba(255,255,255,0.05)">
      <div id="subtitle">
        <h1 class="display-2 font-weight-bold">{{subtitle.toUpperCase()}}</h1>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      subtitle: "Hartford Bound: Making Hartford Home"
    };
  }
}
</script>

<style scoped>
.bod {
  max-width: 500px;
}
#subtitle {
  height: 100%;
  text-align: center;
  margin: auto;
  padding: 250px  0;
}
h1 {
  position: relative;
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(81, 159, 200, 0) 30%,
    rgb(81, 159, 200) 30%
  );
}
h1::after {
  content: "";
  background-color: rgb(81, 159, 200);
  position: relative;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
}
.section{
  height: 500;
}
</style>
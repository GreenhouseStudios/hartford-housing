<template>
  <div class="section">
    <v-img :src="require('../assets/pubhousingmap.jpg')" gradient="rgba(255,255,255,1),rgba(255,255,255,0.05)">
      <div id="subtitle">
        <h1 class="display-4 font-weight-bold ma-2">{{title.toUpperCase()}}</h1>
        <h1 class="display-4 font-weight-bold ma-2">{{subtitle.toUpperCase()}}</h1>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Hartford Bound:",
      subtitle: "Making Hartford Home"
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
}
.section{
  height: 500;
}
</style>
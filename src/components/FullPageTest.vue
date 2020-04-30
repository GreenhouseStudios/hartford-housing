<template>
  <div>
    <About></About>
    <Introduction></Introduction>
    <Maps></Maps>
    <Settlement></Settlement>
    <Housing></Housing>
    <Profiles></Profiles>
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Introduction from "./Introduction"
import Maps from "./Maps";
import Settlement from "./Settlement";
import Profiles from "./Profiles";
import Housing from "./Housing";

export default {
  name: "FullPageTest",
  components: {
    About,
    Introduction,
    Maps,
    Settlement,
    Housing,
    Profiles
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
h1 {
  position: relative;
  top: 100px;
}
</style>
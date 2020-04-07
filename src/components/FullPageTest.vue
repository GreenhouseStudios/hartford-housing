<template>
  <div>
    <Home></Home>
    <About></About>
    <Maps></Maps>
    <Settlement></Settlement>
    <Housing></Housing>
    <Profiles></Profiles>
  </div>
</template>

<script>
import Home from "./Home";
import About from "./About";
import Maps from "./Maps";
import Settlement from "./Settlement";
import Profiles from "./Profiles";
import Housing from "./Housing";

export default {
  name: "FullPageTest",
  components: {
    Home,
    About,
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
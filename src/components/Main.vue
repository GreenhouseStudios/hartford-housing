<template>
  <!-- <full-page ref="fullpage" :options="options" id="fullpage"> -->
  <v-container fluid>
    <v-row>
      <v-col>
        <Home></Home>
        <About></About>
        <Introduction></Introduction>
        <Maps></Maps>
        <Settlement></Settlement>
        <Housing></Housing>
        <Profiles></Profiles>
      </v-col>
    </v-row>
  </v-container>
  <!-- </full-page> -->
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Maps from "@/components/Maps";
import Settlement from "@/components/Settlement";
import Housing from "@/components/Housing";
import Profiles from "@/components/Profiles";

export default {
  name: "Main",
  components: {
    Home,
    About,
    Introduction,
    Maps,
    Settlement,
    Housing,
    Profiles
  }
};
</script>

<style scoped>
</style>
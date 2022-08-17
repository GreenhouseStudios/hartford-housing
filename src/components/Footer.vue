<template>
  <v-footer
    app
    color="darkBlack"
    class="font-weight-bold d-none d-lg-flex"
    id="footer"
  >
    <v-row class="white--text pr-4 copyright" align-self="center">
      <v-col>
        <router-link to="/People" class="pr-4 footer-link teal--text"
          >Credits</router-link
        >
        <router-link to="/Contact" class="pr-4 footer-link blue--text"
          >Contact</router-link
        >
        <router-link to="/Methodology" class="pr-4 footer-link green--text"
          >Methodology</router-link
        >
        <router-link to="/FutureDirections" class="pr-4 footer-link teal--text"
          >Future Directions</router-link
        >
      </v-col>
      <v-spacer></v-spacer>
      <v-col
        cols="1"
        class="px-0 mx-0 text-right"
        justify-self="end"
        align-self="center"
      >
        &copy; {{ new Date().getFullYear() }}
      </v-col>
      <v-col cols="1" class="pa-0 ma-0" align-self="center">
        <a href="http://www.greenhousestudios.uconn.edu">
          <v-img
            :src="require('@/assets/Logos/GSLogoGreen.png')"
            contain
            max-height="5rem"
            class="mx-0"
          ></v-img>
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
};
</script>
<template>
  <div>
    <v-row>
      <v-col cols="4"></v-col>
      <v-hover v-slot="{ hover }">
        <v-col cols="4">
          <picture>
            <v-img :src="src" contain max-height="90vh"></v-img>
          </picture>
          <Caption v-if="hover" :body="capBody" :heading="capHead"></Caption>
        </v-col>
      </v-hover>
      <v-col cols="4"> </v-col>
    </v-row>
  </div>
</template>

<script>
import Caption from "./Caption.vue";
export default {
  name: "ResponsiveMap",
  components: {
    Caption,
  },
  props: {
    srcset: {
      type: Array,
    },
    capHead:{
      type: String
    },
    capBody:{
      type: String
    }
  },
  computed: {
    src() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return this.srcset[0];
        case "sm":
          return this.srcset[1];
        case "md":
          return this.srcset[2];
        case "lg":
          return this.srcset[3];
        case "xl":
          return this.srcset[4];
      }
    },
  },
};
</script>


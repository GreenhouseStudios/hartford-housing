<template>
  <div>
    <v-row>
      <v-col class="mx-auto">
        <picture>
          <v-img :src="src" contain max-height="90vh"></v-img>
        </picture>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "ResponsiveMap",
  props: {
    srcset: {
      type: Array,
    },
  },
  computed: {
    src() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return require(this.srcset[0]);
        case "sm":
          return require(this.srcset[1]);
        case "md":
          return require(this.srcset[2]);
        case "lg":
          return require(this.srcset[3]);
        case "xl":
          return require(this.srcset[4]);
      }
    },
  },
};
</script>


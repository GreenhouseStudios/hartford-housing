<template>
  <div>
    <h1 class="display-3 pa-5">Hartford Bound Booklet</h1>
    <v-container>
      <v-row>
        <h1 class="dispay-3">Download Hartford Bound in booklet format</h1>
      </v-row>
      <a :href="download(require('../assets/Maps/ethnicracialdist_1940.png'))">Download Booklet</a>
    </v-container>
  </div>
</template>

<script>
export default {
    name: "Methodology",
    methods: {
        download: function(item) {
            if(item)
            console.log('downloading booklet')
            //axios call here
        }
    },
};
</script>

<style scoped>
</style>
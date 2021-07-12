<template>
  <div class="px-12">
    <div class="section">
      <h1 class="section-header display-2 font-weight-bold mt-10">
        Methodology
      </h1>

      <v-row>
        <v-col cols="4"></v-col>
        <v-col cols="4">
          <v-card align-self="center" class="mx-auto ma-10" width="50vw">
            <v-btn
              class="d-block"
              tile
              elevation="0"
              x-large
              :color="section.color"
              width="100%"
              @click="$root.$children[0].$refs.fullpage.api.moveTo(index + 2)"
              v-for="(section,index) in sections"
              :key="section.title"
              >{{section.title}}</v-btn
            >
          </v-card>
        </v-col>
        <v-col cols="4"></v-col>
      </v-row>
    </div>

    <div class="section pa-5" v-for="section in sections" :key="section.title">
      <v-row>
        <v-col cols="1" md="4"></v-col>
        <v-col cols="12" md="4">
          <h1 class="display-1 font-weight-bold">{{section.title}}</h1>
          <p class="my-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam
            etiam erat velit scelerisque in dictum. Sapien eget mi proin sed.
            Facilisi cras fermentum odio eu feugiat pretium nibh. Mauris rhoncus
            aenean vel elit scelerisque. Nascetur ridiculus mus mauris vitae
            ultricies leo integer malesuada nunc. Sem viverra aliquet eget sit
            amet tellus. Lorem mollis aliquam ut porttitor leo a. Enim eu turpis
            egestas pretium. Pretium nibh ipsum consequat nisl vel pretium
            lectus. Sed vulputate odio ut enim blandit volutpat maecenas
            volutpat blandit. Feugiat in fermentum posuere urna. Gravida rutrum
            quisque non tellus orci ac auctor augue. Et malesuada fames ac
            turpis egestas integer. Et odio pellentesque diam volutpat commodo
            sed egestas egestas fringilla.
          </p>
          <v-img
            src="https://via.placeholder.com/300"
            class="mx-auto my-10"
            max-width="300"
          ></v-img>
          <p class="my-5">
            Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras
            tincidunt. Feugiat nisl pretium fusce id velit ut. Libero id
            faucibus nisl tincidunt eget nullam non nisi est. Diam volutpat
            commodo sed egestas egestas. Mi proin sed libero enim sed. Gravida
            dictum fusce ut placerat orci nulla pellentesque. Donec enim diam
            vulputate ut pharetra sit amet. Duis convallis convallis tellus id.
            Massa tincidunt nunc pulvinar sapien. Aliquam eleifend mi in nulla
            posuere sollicitudin aliquam. Orci dapibus ultrices in iaculis nunc
            sed augue lacus. Adipiscing bibendum est ultricies integer quis
            auctor elit sed. Urna neque viverra justo nec ultrices dui sapien
            eget. Et malesuada fames ac turpis egestas maecenas.
          </p>
        </v-col>
        <v-col cols="4" md="4"></v-col>
      </v-row>
    </div>
   
  </div>
</template>

<script>
export default {
  name: "Methodology",
  data() {
    return {
      sections: [
        {title: "Data Collection", body: "", color: "blue"},
        {title: "Map Design", body: "", color: "teal"},
        {title: "Urban Drift", body: "", color: "green"},
      ]
    };
  },
  methods: {
    download: function (item) {
      // if (item) console.log("downloading booklet");
      //axios call here
    },
    
  },
};
</script>

<style scoped>
</style>
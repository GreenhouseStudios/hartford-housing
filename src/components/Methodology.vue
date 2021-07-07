<template>
  <div>
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
              color="blue"
              width="100%"
              @click="navigateToMapSection(3)"
              >Data Collection</v-btn
            >
            <v-btn
              class="d-block"
              tile
              elevation="0"
              x-large
              color="teal"
              width="100%"
              @click="navigateToMapSection(6)"
              >Map Design</v-btn
            >
            <v-btn
              class="d-block"
              tile
              elevation="0"
              x-large
              color="green"
              width="100%"
              @click="navigateToMapSection(10)"
              >Urban Drift</v-btn
            >
          </v-card>
        </v-col>
        <v-col cols="4"></v-col>
      </v-row>
    </div>

    <div class="section pa-5">
      <h1 class="display-1 font-weight-bold">Data Collection</h1>
      <p class="my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat
        velit scelerisque in dictum. Sapien eget mi proin sed. Facilisi cras
        fermentum odio eu feugiat pretium nibh. Mauris rhoncus aenean vel elit
        scelerisque. Nascetur ridiculus mus mauris vitae ultricies leo integer
        malesuada nunc. Sem viverra aliquet eget sit amet tellus. Lorem mollis
        aliquam ut porttitor leo a. Enim eu turpis egestas pretium. Pretium nibh
        ipsum consequat nisl vel pretium lectus. Sed vulputate odio ut enim
        blandit volutpat maecenas volutpat blandit. Feugiat in fermentum posuere
        urna. Gravida rutrum quisque non tellus orci ac auctor augue. Et
        malesuada fames ac turpis egestas integer. Et odio pellentesque diam
        volutpat commodo sed egestas egestas fringilla.
      </p>
      <v-img
        src="https://via.placeholder.com/300"
        class="mx-auto"
        max-width="300"
      ></v-img>
      <p class="my-5">
        Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras
        tincidunt. Feugiat nisl pretium fusce id velit ut. Libero id faucibus
        nisl tincidunt eget nullam non nisi est. Diam volutpat commodo sed
        egestas egestas. Mi proin sed libero enim sed. Gravida dictum fusce ut
        placerat orci nulla pellentesque. Donec enim diam vulputate ut pharetra
        sit amet. Duis convallis convallis tellus id. Massa tincidunt nunc
        pulvinar sapien. Aliquam eleifend mi in nulla posuere sollicitudin
        aliquam. Orci dapibus ultrices in iaculis nunc sed augue lacus.
        Adipiscing bibendum est ultricies integer quis auctor elit sed. Urna
        neque viverra justo nec ultrices dui sapien eget. Et malesuada fames ac
        turpis egestas maecenas.
      </p>
    </div>
    <div class="section">
      <h1 class="display-1 font-weight-bold mt-10">Map Design</h1>
      <p class="my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat
        velit scelerisque in dictum. Sapien eget mi proin sed. Facilisi cras
        fermentum odio eu feugiat pretium nibh. Mauris rhoncus aenean vel elit
        scelerisque. Nascetur ridiculus mus mauris vitae ultricies leo integer
        malesuada nunc. Sem viverra aliquet eget sit amet tellus. Lorem mollis
        aliquam ut porttitor leo a. Enim eu turpis egestas pretium. Pretium nibh
        ipsum consequat nisl vel pretium lectus. Sed vulputate odio ut enim
        blandit volutpat maecenas volutpat blandit. Feugiat in fermentum posuere
        urna. Gravida rutrum quisque non tellus orci ac auctor augue. Et
        malesuada fames ac turpis egestas integer. Et odio pellentesque diam
        volutpat commodo sed egestas egestas fringilla.
      </p>
      <v-img
        src="https://via.placeholder.com/300"
        class="mx-auto"
        max-width="300"
      ></v-img>
      <p class="my-5">
        Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras
        tincidunt. Feugiat nisl pretium fusce id velit ut. Libero id faucibus
        nisl tincidunt eget nullam non nisi est. Diam volutpat commodo sed
        egestas egestas. Mi proin sed libero enim sed. Gravida dictum fusce ut
        placerat orci nulla pellentesque. Donec enim diam vulputate ut pharetra
        sit amet. Duis convallis convallis tellus id. Massa tincidunt nunc
        pulvinar sapien. Aliquam eleifend mi in nulla posuere sollicitudin
        aliquam. Orci dapibus ultrices in iaculis nunc sed augue lacus.
        Adipiscing bibendum est ultricies integer quis auctor elit sed. Urna
        neque viverra justo nec ultrices dui sapien eget. Et malesuada fames ac
        turpis egestas maecenas.
      </p>

      <a :href="download(require('../assets/Maps/ethnicracialdist_1940.png'))"
        >Download Booklet</a
      >
    </div>
    <div class="section">
      <h1 class="display-1 font-weight-bold mt-10">Urban Drift</h1>
      <p class="my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat
        velit scelerisque in dictum. Sapien eget mi proin sed. Facilisi cras
        fermentum odio eu feugiat pretium nibh. Mauris rhoncus aenean vel elit
        scelerisque. Nascetur ridiculus mus mauris vitae ultricies leo integer
        malesuada nunc. Sem viverra aliquet eget sit amet tellus. Lorem mollis
        aliquam ut porttitor leo a. Enim eu turpis egestas pretium. Pretium nibh
        ipsum consequat nisl vel pretium lectus. Sed vulputate odio ut enim
        blandit volutpat maecenas volutpat blandit. Feugiat in fermentum posuere
        urna. Gravida rutrum quisque non tellus orci ac auctor augue. Et
        malesuada fames ac turpis egestas integer. Et odio pellentesque diam
        volutpat commodo sed egestas egestas fringilla.
      </p>
      <v-img
        src="https://via.placeholder.com/300"
        class="mx-auto"
        max-width="300"
      ></v-img>
      <p class="my-5">
        Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras
        tincidunt. Feugiat nisl pretium fusce id velit ut. Libero id faucibus
        nisl tincidunt eget nullam non nisi est. Diam volutpat commodo sed
        egestas egestas. Mi proin sed libero enim sed. Gravida dictum fusce ut
        placerat orci nulla pellentesque. Donec enim diam vulputate ut pharetra
        sit amet. Duis convallis convallis tellus id. Massa tincidunt nunc
        pulvinar sapien. Aliquam eleifend mi in nulla posuere sollicitudin
        aliquam. Orci dapibus ultrices in iaculis nunc sed augue lacus.
        Adipiscing bibendum est ultricies integer quis auctor elit sed. Urna
        neque viverra justo nec ultrices dui sapien eget. Et malesuada fames ac
        turpis egestas maecenas.
      </p>
    </div>
    <div class="section">
      <h1 class="display-1 font-weight-bold mt-10">Map Booklet</h1>
      <p class="my-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat
        velit scelerisque in dictum. Sapien eget mi proin sed. Facilisi cras
        fermentum odio eu feugiat pretium nibh. Mauris rhoncus aenean vel elit
        scelerisque. Nascetur ridiculus mus mauris vitae ultricies leo integer
        malesuada nunc. Sem viverra aliquet eget sit amet tellus. Lorem mollis
        aliquam ut porttitor leo a. Enim eu turpis egestas pretium. Pretium nibh
        ipsum consequat nisl vel pretium lectus. Sed vulputate odio ut enim
        blandit volutpat maecenas volutpat blandit. Feugiat in fermentum posuere
        urna. Gravida rutrum quisque non tellus orci ac auctor augue. Et
        malesuada fames ac turpis egestas integer. Et odio pellentesque diam
        volutpat commodo sed egestas egestas fringilla.
      </p>

      <v-btn color="teal" class="my-10"
        ><a
          :href="download(require('../assets/Maps/ethnicracialdist_1940.png'))"
          >Download Booklet</a
        ></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Methodology",
  data() {
    return {
      // options: {
      //   licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
      //   // menu: "#menu",
      //   navigation: false,
      //   navigationPosition: "right",
      //   fitToSection: false,
      //   autoScrolling: false, //this breaks app bar hiding
      //   verticalCentered: true,
      //   parallax: true,
      //   sectionsColor: ["#EEE"],
      // },
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
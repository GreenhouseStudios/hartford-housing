<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <!-- Map section header -->
      <h1 class="d-none d-md-block section-header display-2 font-weight-bold">
        Maps
      </h1>
      <h1 class="d-md-none section-header display-1 font-weight-bold">Maps</h1>
      <div>
        <div class="section">
          <v-row>
            <v-img
              :src="require('../assets/Maps/ethnicracialdist_1940.png')"
              contain
              max-height="85vh"
            ></v-img>
          </v-row>
          <Card heading="Milagros Ortiz">
            <a @click="navigateToProfile(0)">Milagros Ortiz</a>
          </Card>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/NorthEnd.jpg')"
            contain
            max-height="85vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/BellevueSquare.jpg')"
            contain
            max-height="85vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/PlacesofOrigin.jpg')"
            contain
            max-height="85vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/Agricultural_Workers.jpg')"
            contain
            max-height="85vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/Colleges.jpg')"
            contain
            max-height="85vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/HousingConditions.jpg')"
            contain
            max-height="85vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/Surveys.jpg')"
            contain
            max-height="65vh"
          ></v-img>
        </div>

        <div class="section">
          <b-carousel
            id="carousel-fade"
            style="text-shadow: 0px 0px 2px #000; width: 100%; margin: auto"
            fade
            controls
            img-width="1024"
            img-height="480"
          >
            <b-carousel-slide
              caption="1940"
              :img-src="require('@/assets/GeographicMobility1.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="1960"
              :img-src="require('../assets/GeographicMobility2.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="1980"
              :img-src="require('../assets/GeographicMobility3.jpg')"
            ></b-carousel-slide>
          </b-carousel>
        </div>

        <div class="section">
          <h2 class="ma-5">Race and Ethnicity</h2>
          <v-img
            :src="require('../assets/Race_Ethnicity2.jpg')"
            contain
            max-height="65vh"
          ></v-img>
        </div>

        <div class="section">
          <h2 class="ma-5">Landmarks</h2>
          <v-img
            :src="require('../assets/landmarks.jpg')"
            contain
            max-height="65vh"
          ></v-img>
        </div>

        <div class="section">
          <h2 class="ma-5">Ship Manifest</h2>
          <v-img
            :src="require('../assets/ShipManifest.jpg')"
            contain
            max-height="65vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/Projects.jpg')"
            contain
            max-height="65vh"
          ></v-img>
        </div>

        <div class="section">
          <v-img
            :src="require('../assets/Maps/Racial_Imbalance.jpg')"
            contain
            max-height="65vh"
          ></v-img>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Map from "@/components/Map";
import svgPanZoom from "svg-pan-zoom";
import PublicHousingLocations from "@/assets/PublicHousingLocations.svg";
import Card from "./Card.vue";
export default {
  name: "Maps",
  components: {
    Map,
    Card,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      //   cityPlanOverlays: [
      //     {
      //       bounds: [
      //         ["41.7507553", "-72.7134986"],
      //         ["41.7777551", "-72.6673655"],
      //       ],
      //       img:
      //         require("../assets/mapassets/cityplan/CityPlanExpressway.tif"),
      //     },
      //      {
      //       bounds: [
      //         ["41.7547319", "-72.6930396"],
      //         ["41.7774340", "-72.6668311"],
      //       ],
      //       img: require("../assets/map_assets/city_plan/PlanOverview.tif"),
      //     },
      //   ],
    };
  },
  methods: {
    prev() {
      this.$refs.myCarousel.prev();
    },
    next() {
      this.$refs.myCarousel.next();
    },
    navigateToProfile(i) {
      this.$root.$children[0].navigateToProfile(i);
    },
  },
  mounted() {
    var panZoomTiger = svgPanZoom("#demo-tiger");
    console.log(panZoomTiger);
    const scene4 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger4",
        triggerHook: 0.7,
        duration: 0,
        reverse: false,
      })
      .setClassToggle("#revealslide", "visible");
    this.$scrollmagic.addScene(scene4);

    const scene5 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger5",
        triggerHook: 0.7,
        duration: 0,
        reverse: false,
      })
      .setClassToggle("#revealslide2", "visible");
    this.$scrollmagic.addScene(scene5);

    const scene6 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger6",
        triggerHook: 0.7,
        duration: 0,
        reverse: false,
      })
      .setClassToggle("#revealslide", "visible");
    this.$scrollmagic.addScene(scene6);

    const scene7 = this.$scrollmagic
      .scene({
        triggerElement: "#trigger7",
        triggerHook: 0.7,
        duration: 0,
        reverse: false,
      })
      .setClassToggle("#revealslide2", "visible");
    this.$scrollmagic.addScene(scene7);
  },
};
</script>

<style scoped>
#demo-tiger {
  max-height: 65vh;
  margin: 0 auto;
  width: 500px;
}
/* Crossfade gallery */
@keyframes fader {
  0% {
    background-image: url("~@/assets/GeographicMobility1.jpg");
  }
  10% {
    background-image: url("~@/assets/GeographicMobility1.jpg");
  }
  33% {
    background-image: url("h~@/assets/GeographicMobility2.jpg");
  }
  43% {
    background-image: url("~@/assets/GeographicMobility2.jpg");
  }
  66% {
    background-image: url("h~@/assets/GeographicMobility3.jpg");
  }
  76% {
    background-image: url("~@/assets/GeographicMobility3.jpg");
  }
  100% {
    background-image: url("~@/assets/GeographicMobility1.jpg");
  }
}
#wrapper {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
#gallery {
  max-width: 600px;
  margin: 0 auto;
  animation: fader 15s linear infinite;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#manualgallery {
  max-width: 600px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  animation: fader 15s linear infinite;
  animation-play-state: paused;
}
</style>
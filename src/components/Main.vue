<template>
  <v-container fluid pa-0 style="margin: 0; float: unset; display: visible">
    <!-- changed 'display: contents' to visible because it doesn't work with position:sticky -->
    <Home></Home>
    <About></About>
    <LandAcknowledgement></LandAcknowledgement>
    <Introduction></Introduction>
    <TableContents :tiles="galleryImgs"></TableContents>
    <!-- 0: Hartford Through Time -->
    <div class="mapsection">
      <v-card
        align-content="center"
        width="100vw"
        color="blue"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center py-6 font-weight-bold h1 display-2">
          Hartford Through Time
        </h1>
      </v-card>

      <div class="section map-section map-set">
        <router-link to="/Map/1234">
          <v-card class="d-flex align-center" height="100vh">
            <v-img
              contain
              max-height="90vh"
              :src="
                require('../assets/Maps/Final/BoundariesThroughTime/thumbnail_cityboundaries_labels.jpg')
              "
            ></v-img>
          </v-card>
        </router-link>
      </div>

      <div class="section map-set">
        <MobileSlidesSection
          :imgSet="cityTownImages"
          :slidesOnly="true"
        ></MobileSlidesSection>
      </div>

      <!-- <div class="section map-set">
        <router-link to="/Map/1234">
          <v-card class="d-flex align-center elevation-0" height="100vh">
            <v-img
              :src="require('../assets/Maps/Gifs/ItalyAnimation.gif')"
              max-height="75vh"
              contain
            ></v-img>
          </v-card>
        </router-link>
      </div> -->
    </div>

    <!-- 1:Routes and Roots -->
    <div class="mapsection">
      <v-card
        align-content="center"
        width="100vw"
        color="teal"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center py-6 font-weight-bold h1 display-2">
          Roots and Routes
        </h1>
      </v-card>

      <!-- <div class="section map-section map-set">
        <router-link to="/Map/1234">
          <v-card class="d-flex align-center elevation-0" height="100vh">
            <v-img
              :src="require('../assets/Maps/Gifs/ItalyAnimation.gif')"
              max-height="75vh"
              contain
            ></v-img>
          </v-card>
        </router-link>
      </div> -->

      <div class="section map-set map-section">
        <router-link to="/Map/1234">
          <div class="slide" v-for="(obj, index) in originsImages" :key="index">
            <v-card max-height="800" elevation="0">
              <v-img max-height="80vh" contain :src="obj.img"></v-img>
            </v-card>
          </div>
        </router-link>
      </div>

      <div class="section map-set">
        <router-link to="/Map/1234">
          <v-card class="d-flex align-center" height="100vh">
            <v-img
              contain
              max-height="90vh"
              :src="require('../assets/Maps/Final/Colleges/Colleges.jpg')"
            ></v-img>
          </v-card>
        </router-link>
      </div>

      <div class="section map-set">
        <router-link to="/Map/1234">
          <v-img
            contain
            max-height="90vh"
            :src="require('../assets/Maps/Final/Jamaica/Parishes.jpg')"
          ></v-img>
        </router-link>
      </div>
      <div class="section">
        <router-link to="/Map/1234">
          <v-img
            contain
            max-height="90vh"
            :src="require('../assets/Maps/Final/Jamaica/locations.jpg')"
          ></v-img>
        </router-link>
      </div>
    </div>

    <!-- 2: Mobilities -->
    <div>
      <v-card
        align-content="center"
        width="100vw"
        color="green"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center py-6 font-weight-bold h1 display-2">
          Mobilities
        </h1>
      </v-card>

      <div class="section map-section map-set">
        <v-row class="my-10 mx-auto">
          <h1
            class="
              d-none d-md-block
              map-section-header-green
              section-header
              display-2
              font-weight-bold
              mx-auto
            "
          >
            Ethnic and Racial Distribution
          </h1>
          <h1
            class="d-md-none map-section-header-green section-header h4 mx-auto"
          >
            Ethnic and Racial Distribution
          </h1>
        </v-row>
        <MobileSlidesSection :imgSet="racialEthnicImages"></MobileSlidesSection>
      </div>

      <div div class="section map-set">
        <v-row class="my-10 mx-auto">
          <h1
            class="
              d-none d-md-block
              map-section-header-green
              section-header
              display-2
              font-weight-bold
              mx-auto
            "
          >
            Population Drift and Community Succession
          </h1>
          <h1
            class="d-md-none map-section-header-green section-header h4 mx-auto"
          >
            Population Drift and Community Succession
          </h1>
        </v-row>

        <div class="section" v-for="map in driftMaps" :key="map.label">
          <div>
            <iframe
              :src="'https://www.youtube.com/embed/' + map.code + '?&autoplay=1&loop=1&playlist=' + map.code + '&origin=https://hartfordbound.com'"
              id="myVideo"
              frameborder="0"
              allowfullscreen
              style="pointer-events: none;"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="section map-set">
        <v-row class="my-10 mx-auto">
          <h1
            class="
              d-none d-md-block
              map-section-header-green
              section-header
              display-2
              font-weight-bold
              mx-auto
            "
          >
            Canton Street Case Study
          </h1>
          <h1
            class="d-md-none map-section-header-green section-header h4 mx-auto"
          >
            Canton Street Case Study
          </h1>
        </v-row>

        <v-img
          max-height="90vh"
          contain
          :src="require('../assets/Maps/Final/Canton/Indicator.jpg')"
        ></v-img>
      </div>

      <div class="section">
        <MobileSlidesSection :imgSet="cantonImages"></MobileSlidesSection>
      </div>
      <div class="section">
        <MobileSlidesSection :imgSet="cantonImages2"></MobileSlidesSection>
      </div>
    </div>

    <!-- 3: Neighborhood Clusters -->
    <div class="mapsection">
      <v-card
        align-content="center"
        width="100vw"
        color="blue"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center py-6 font-weight-bold h1 display-2">
          Neighborhood Clusters
        </h1>
      </v-card>

      <div class="section map-section map-set">
        <MobileSlidesSection :imgSet="northEndImages"></MobileSlidesSection>
      </div>

      <div class="section map-set">
        <MobileSlidesSection
          :imgSet="puertoRicanImages"
          :slidesOnly="true"
        ></MobileSlidesSection>
      </div>

      <div class="section map-set">
        <MobileSlidesSection
          :imgSet="westIndianImages"
          :slidesOnly="true"
        ></MobileSlidesSection>
      </div>

      <div class="section map-set">
        <v-img
          max-height="90vh"
          contain
          :src="require('../assets/Maps/Final/ForeignBornPop/1900_FB.jpg')"
        ></v-img>
      </div>

      <div class="section">
        <v-img
          max-height="90vh"
          contain
          :src="require('../assets/Maps/Final/ForeignBornPop/1940.jpg')"
        ></v-img>
      </div>

      <div class="section">
        <v-img
          max-height="90vh"
          contain
          :src="require('../assets/Maps/Final/ForeignBornPop/1980_FB.jpg')"
        ></v-img>
      </div>

      <div class="section">
        <v-img
          max-height="90vh"
          contain
          :src="require('../assets/Maps/Final/ForeignBornPop/2018_FB.jpg')"
        ></v-img>
      </div>
    </div>
    <!-- 4: Housing -->
    <div class="mapsection">
      <v-card
        align-content="center"
        width="100vw"
        color="teal"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center py-6 font-weight-bold h1 display-2">Housing</h1>
      </v-card>

      <div class="section map-section map-set">
        <MobileSlidesSection
          :imgSet="publicHousingImages"
        ></MobileSlidesSection>
      </div>

      <div id="bellevue-trigger"></div>
      <div id="sticky-container">
        <v-img
          :src="require('../assets/Maps/Final/Bellevue/GeographicContext.jpg')"
          max-height="18rem"
          contain
          id="juxt-context"
        ></v-img>
      </div>
      <div class="section d-none d-md-flex map-set">
        <h1
          class="
            text-center
            py-6
            my-6
            font-weight-bold
            h1
            display-2
            map-section-header-green
          "
        >
          Bellevue 1934 vs 1965
        </h1>
        <div class="d-flex">
          <iframe
            frameborder="0"
            class="juxtapose my-10"
            width="90%"
            height="100%"
            src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=1f01859e-7bb2-11eb-83c8-ebb5d6f907df"
          ></iframe>
        </div>
      </div>

      <div class="section d-sm-flex d-md-none">
        <h1
          class="
            text-center
            py-6
            my-6
            font-weight-bold
            h1
            display-2
            map-section-header-green
          "
        >
          Bellevue 1934 vs 1965
        </h1>
        <iframe
          frameborder="0"
          class="juxtapose my-10"
          width="100%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c28c8692-8354-11eb-83c8-ebb5d6f907df"
        >
        </iframe>
      </div>

      <div class="section d-none d-md-flex">
        <h1
          class="
            text-center
            py-6
            my-6
            font-weight-bold
            h1
            display-2
            map-section-header-teal
          "
        >
          Windsor 1934 vs 1965
        </h1>

        <iframe
          frameborder="0"
          class="juxtapose my-10"
          width="90%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0f636f6a-7c40-11eb-83c8-ebb5d6f907df"
        ></iframe>
      </div>

      <div class="section d-sm-flex d-md-none">
        <h1
          class="
            text-center
            py-6
            my-6
            font-weight-bold
            h1
            display-2
            map-section-header-teal
          "
        >
          Windsor 1934 vs 1965
        </h1>
        <iframe
          frameborder="0"
          class="juxtapose my-10"
          width="100%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=6b9e2c68-835a-11eb-83c8-ebb5d6f907df"
        >
        </iframe>
      </div>

      <div class="section map-set">
        <v-row class="my-10 mx-auto">
          <h1
            class="
              d-none d-md-block
              map-section-header-teal
              section-header
              display-2
              font-weight-bold
              mx-auto
            "
          >
            Renting Hartford
          </h1>
          <h1
            class="d-md-none map-section-header-teal section-header h4 mx-auto"
          >
            Renting Hartford
          </h1>
        </v-row>
        <MobileSlidesSection :imgSet="rentingImages"></MobileSlidesSection>
      </div>
      <!-- Not using MobileSlidesSection for the Housing Condition set because we want the middle slide (Slide 2) to be the default slide -->

      <div class="section" v-if="!isMobile">
        <v-row class="my-10 mx-auto">
          <h1
            class="
              d-none d-md-block
              map-section-header-teal
              section-header
              display-2
              font-weight-bold
              mx-auto
            "
          >
            Housing Conditions
          </h1>
          <h1
            class="d-md-none map-section-header-teal section-header h4 mx-auto"
          >
            Housing Conditions
          </h1>
        </v-row>
        <v-card height="100vh" class="elevation-0" align-content="center">
          <v-row align="center">
            <v-col cols="4" align-self="center">
              <v-img
                max-height="71vh"
                contain
                :src="
                  require('../assets/Maps/Final/HousingConditions/LackingPrivateBath2.jpg')
                "
              ></v-img>
            </v-col>
            <v-col cols="4" align-self="center"
              ><v-img
                max-height="90vh"
                contain
                :src="
                  require('../assets/Maps/Final/HousingConditions/State_of_Repair_vs_Occupancy.jpg')
                "
              ></v-img
            ></v-col>
            <v-col cols="4" align-self="center"
              ><v-img
                max-height="71vh"
                contain
                :src="
                  require('../assets/Maps/Final/HousingConditions/NeedingRepair2.jpg')
                "
              ></v-img
            ></v-col> </v-row
        ></v-card>
      </div>
    </div>

    <div class="section" v-if="isMobile">
      <div class="slide">
        <v-img
          max-height="90vh"
          contain
          :src="
            require('../assets/Maps/Final/HousingConditions/LackingPrivateBath2.jpg')
          "
        ></v-img>
      </div>

      <div class="slide active">
        <v-img
          max-height="90vh"
          contain
          :src="
            require('../assets/Maps/Final/HousingConditions/State_of_Repair_vs_Occupancy.jpg')
          "
        ></v-img>
      </div>

      <div class="slide">
        <v-img
          max-height="90vh"
          contain
          :src="
            require('../assets/Maps/Final/HousingConditions/NeedingRepair2.jpg')
          "
        ></v-img>
      </div>
    </div>

    <Settlement></Settlement>
    <Housing></Housing>
    <Timeline></Timeline>

    <div class="section">
      <h2 class="section-header display-1 font-weight-bold">Sources</h2>
      <v-simple-table class="mx-10">
        <template v-slot:default>
          <tbody>
            <tr v-for="n in sources.length" :key="n">
              <td>{{ n }}.{{ sources[n] }}</td>
              <td>
                <a
                  class="inline-link"
                  @click="$root.$children[0].navigateToSection(3)"
                  >Map</a
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <!-- <v-dialog v-model="dialog">
      <v-card v-if="activeProfile">
        <v-card-title class="headline grey lighten-2" primary-title
          >{{ activeProfile.name }}'s Hartford</v-card-title
        >
        <v-img src="@/assets/joshmap.jpg" max-height="600" contain></v-img>
        <v-card-text>{{ activeProfile.body }}</v-card-text>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Maps from "@/components/Maps";
import Settlement from "@/components/Settlement";
import Housing from "@/components/Housing";
import ProfileMenu from "@/components/ProfileMenu";
import Timeline from "@/components/Timeline";
import Card from "@/components/Card";
import Caption from "@/components/Caption";
import ReadMoreCard from "@/components/ReadMoreCard";
import MapCarousel from "@/components/MapCarousel";
import { loremIpsum } from "lorem-ipsum";
import ResponsiveMap from "@/components/ResponsiveMap";
import MobileSlidesSection from "@/components/MobileSlidesSection";
import LandAcknowledgement from "./LandAcknowledgement.vue";
import TableContents from "./TableContents.vue";
export default {
  name: "Main",
  components: {
    Home,
    About,
    Introduction,
    Maps,
    Settlement,
    Housing,
    ProfileMenu,
    Timeline,
    Card,
    ReadMoreCard,
    Caption,
    MapCarousel,
    ResponsiveMap,
    MobileSlidesSection,
    LandAcknowledgement,
    TableContents,
  },
  methods: {
    handleProfileMapClick(index) {
      this.dialog = true;
      this.activeProfile = this.profiles[index];
    },
    toMap(index) {
      if (this.profileToMapMapping.length > index)
        this.$root.$children[0].navigateToMap(this.profileToMapMapping[index]);
      else {
        alert("no matching map");
      }
    },
    navigateToProfile(i) {
      this.$root.$children[0].navigateToProfile(i);
    },
    navigateToMapSection(i) {
      this.$root.$children[0].navigateToMapSection(i);
    },
  },
  data() {
    return {
      profileToMapMapping: [1],
      activeProfile: null,
      dialog: false,
      slides: ["Tenant Activists Profiles", "Historic Firsts"],
      imgs: ["../assets/Maps/Final/NorthEnd/AfricanAmerican.jpg"],
      sourcePlaceholder: loremIpsum({ count: 40, units: "words" }),
      sources: loremIpsum({ count: 50, units: "sentences" }).split("."),
      alleryImgs: [
        require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_599.jpg"),
        require("../assets/Maps/Final/CityTown/1635 (Large).jpg"),
        require("../assets/Maps/Final/Origins/OriginWithLabel.jpg"),
        require("../assets/Maps/Colleges.jpg"),
        require("../assets/Maps/Final/Jamaica/Parishes.jpg"),
        require("../assets/Maps/Final/RaceEthnic/1900_FIX.jpg"),
        require("../assets/Maps/Final/RaceEthnic/1900_FIX.jpg"),
        require("../assets/Maps/Final/Canton/Canton1920.jpg"),
        require("../assets/Maps/Final/NorthEnd/AfricanAmerican.jpg"),
        require("../assets/Maps/Final/PuertoRicans/1960.jpg"),
        require("../assets/Maps/Final/WestIndians/WI1980.jpg"),
        require("../assets/Maps/Final/ForeignBornPop/1900_FB.jpg"),
        require("../assets/Maps/Final/Redlining/RedlinedDistricts1937.jpg"),
        require("../assets/Maps/Final/Jamaica/Parishes.jpg"),
        require("../assets/Maps/Final/Renters/AveMonthlyRent2.jpg"),
        require("../assets/Maps/Final/HousingConditions/LackingPrivateBath2.jpg"),
      ],
      galleryImgs: [
        {
          title: "City Boundaries",
          img: require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_599.jpg"),
        },
        {
          title: "City and Town",
          img: require("../assets/Maps/Final/CityTown/1635 (Large).jpg"),
        },
        {
          title: "Origins",
          img: require("../assets/Maps/Final/Origins/OriginWithLabel.jpg"),
        },
        { title: "Colleges", img: require("../assets/Maps/Colleges.jpg") },
        {
          title: "Jamaica",
          img: require("../assets/Maps/Final/Jamaica/Parishes.jpg"),
        },
        {
          title: "Racial And Ethnic Distribution",
          img: require("../assets/Maps/Final/RaceEthnic/1900_FIX.jpg"),
        },
        {
          title: "Population Drift and Ethnic Succession",
          img: require("../assets/Maps/Final/RaceEthnic/1900_FIX.jpg"),
        },
        {
          title: "Canton",
          img: require("../assets/Maps/Final/Canton/Canton1920.jpg"),
        },
        {
          title: "North End",
          img: require("../assets/Maps/Final/NorthEnd/AfricanAmerican.jpg"),
        },
        {
          title: "Puerto Ricans",
          img: require("../assets/Maps/Final/PuertoRicans/1960.jpg"),
        },
        {
          title: "West Indians",
          img: require("../assets/Maps/Final/WestIndians/WI1980.jpg"),
        },
        {
          title: "Foreign-Born Population",
          img: require("../assets/Maps/Final/ForeignBornPop/1900_FB.jpg"),
        },
        {
          title: "Redlined Districts",
          img: require("../assets/Maps/Final/Redlining/RedlinedDistricts1937.jpg"),
        },
        {
          title: "Bellevue",
          img: require("../assets/Maps/Final/Jamaica/Parishes.jpg"),
        },
        {
          title: "Renters",
          img: require("../assets/Maps/Final/Renters/AveMonthlyRent2.jpg"),
        },
        {
          title: "Housing Conditions",
          img: require("../assets/Maps/Final/HousingConditions/LackingPrivateBath2.jpg"),
        },
      ],
      driftMaps: [
        { label: "Canadians", code: "fgghMRHTKA0" },
        { label: "Italians - Irish - Russians", code: "r4119mpVRis" },
        { label: "Irish", code: "cb0B0oyL5gA" },
        { label: "Italians", code: "kv50tsnkaPE" },
        { label: "Polish", code: "y1FR2AIs-uI" },
        { label: "Russians", code: "SGI3kAdR2yQ" },
      ],
      captions: [
        {
          heading: "Hartford Through Time",
          body: "Harford’s present extent of 18 square miles is an artifact of town and city amalgamation between 1784 and 1896. Each change redefined the city in relation to its commercial business district as well as the future towns and suburbs of East Hartford, Manchester, and West Hartford. By 1881, the town and city had coterminous boundaries and consolidated government followed in April 1896. Native American, European, and African diasporic communities shaped the early histories of mobility, displacement, dispossession, and settlement in Hartford. The Great Migrations of African Americans, West Indians, and Puerto Ricans would transform the twentieth-century trajectory of the city.",
        },
      ],
      boundaryMaps: [
        require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_599.jpg"),
        require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_847.jpg"),
        require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1047.jpg"),
        require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1231.jpg"),
        require("../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1400.jpg"),
        require("../assets/Maps/Final/Renters/Renter-Occupied_3.jpg"),
        require("../assets/Maps/Final/Redlining/RedlinedDistricts1937.jpg"),
      ],
      cityTownImages: [
        { img: require("../assets/Maps/Final/CityTown/1635 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1784 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1853 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1859 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1871 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1873 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1881_FIX2 (Large).jpg") },
        { img: require("../assets/Maps/Final/CityTown/1897_FIX2 (Large).jpg") },
      ],
      originsImages: [
        { img: require("../assets/Maps/Final/Origins/OriginWithLabel.jpg") },
        { img: require("../assets/Maps/Final/Origins/Barbados.jpg") },
        { img: require("../assets/Maps/Final/Origins/Georgia.jpg") },
        { img: require("../assets/Maps/Final/Origins/Jamaica.jpg") },
        { img: require("../assets/Maps/Final/Origins/Puerto_Rico.jpg") },
        { img: require("../assets/Maps/Final/Origins/TheBahamas.jpg") },
        { img: require("../assets/Maps/Final/Origins/TrinidadandTobago.jpg") },
      ],
      cantonImages: [
        { img: require("../assets/Maps/Final/Canton/Canton1920.jpg") },
        { img: require("../assets/Maps/Final/Canton/Canton1930.jpg") },
      ],
      cantonImages2: [
        { img: require("../assets/Maps/Final/Canton/Canton2_Occ.jpg") },
        { img: require("../assets/Maps/Final/Canton/Canton2_Pop.jpg") },
      ],
      northEndImages: [
        {
          img: require("../assets/Maps/Final/NorthEnd/AfricanAmerican.jpg"),
        },
        { img: require("../assets/Maps/Final/NorthEnd/PuertoRican.jpg") },
        { img: require("../assets/Maps/Final/NorthEnd/White.jpg") },
      ],
      rentingImages: [
        {
          img: require("../assets/Maps/Final/Renters/Renter-Occupied_3.jpg"),
        },
        { img: require("../assets/Maps/Final/Renters/AveMonthlyRent2.jpg") },
      ],
      publicHousingImages: [
        {
          img: require("../assets/Maps/Final/Redlining/RedlinedDistricts1937.jpg"),
        },
        {
          img: require("../assets/Maps/Final/SlumClearance/SlumClearance1934.jpg"),
        },
      ],
      westIndianImages: [
        {
          img: require("../assets/Maps/Final/WestIndians/WI1980.jpg"),
        },
        {
          img: require("../assets/Maps/Final/WestIndians/WI1990.jpg"),
        },
        {
          img: require("../assets/Maps/Final/WestIndians/WI2000.jpg"),
        },
        {
          img: require("../assets/Maps/Final/WestIndians/WI2010.jpg"),
        },
        {
          img: require("../assets/Maps/Final/WestIndians/WI2018.jpg"),
        },
      ],
      puertoRicanImages: [
        {
          img: require("../assets/Maps/Final/PuertoRicans/1960.jpg"),
        },
        {
          img: require("../assets/Maps/Final/PuertoRicans/1970.jpg"),
        },
        {
          img: require("../assets/Maps/Final/PuertoRicans/1980.jpg"),
        },
        {
          img: require("../assets/Maps/Final/PuertoRicans/1990.jpg"),
        },
        {
          img: require("../assets/Maps/Final/PuertoRicans/2000.jpg"),
        },
        {
          img: require("../assets/Maps/Final/PuertoRicans/2010.jpg"),
        },
        {
          img: require("../assets/Maps/Final/PuertoRicans/PR2018.jpg"),
        },
      ],
      racialEthnicImages: [
        {
          img: require("../assets/Maps/Final/RaceEthnic/1900_FIX.jpg"),
        },
        {
          img: require("../assets/Maps/Final/RaceEthnic/1940_FIX.jpg"),
        },
      ],
      settings: {
        label: {
          /* All available media queries. Used for the `media` attribute. */
          media: { "max-width": "1400px", orientation: "landscape" },

          /* Delimeters for width or pixel-ratio. Don't mix them! The next line is for width. */
          delimeters: ["200w", "330w", "431w", "520w", "599w", "674w", "754w"],
          // (Or, for pixel ratio, use `['2x', '3x']`)

          /* Used for the `size` attribute. */
          size: [
            [{ "max-width": "330px" }, "280px"],
            [{ "max-width": "431px" }, "440px"]["800px"],
          ],
        },
      },
      plyrOptions: {
        hideControls: true,
      },
    };
  },
  computed: {
    isMobile() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        default:
          return false;
      }
    },
  },
  mounted() {
    const bellevueSticky = this.$scrollmagic
      .scene({
        // ID of element where animation starts
        triggerElement: "#bellevue-trigger",
        // {0,0.5,1} - animations starts from {top,center,end} of window
        triggerHook: 0.1,
        // Duration of animation
        duration: "1700",
      }) // Declaration of animation and attaching to element
      // .setClassToggle("#revealscale", "visible")
      .setPin("#sticky-container", { pushFollowers: false });
    // Helpful tags for orientation on the screen
    // .addIndicators({ name: "2 (duration: 1000)" });
    // Add Scene to controller
    this.$scrollmagic.addScene(bellevueSticky);
  },
};
</script>
<style>
@media only screen and (max-width: 768px) {
  .mobile-only {
    display: visible;
  }
  .desktop-only {
    display: none;
  }
}
@media only screen and (min-width: 768px) {
  .mobile-only {
    display: none;
  }
  .desktop-only {
    display: visible;
  }
}
.banner {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.mapsection {
  width: 100%;
  overflow: visible;
  height: 100%;
}
.section {
  overflow: hidden;
}
.profile-map {
  position: relative;
  top: -100px;
  left: 200px;
}
.wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;
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
.carousel-control-prev-icon {
  color: black;
  background: cadetblue;
}
.map-section-header {
  background-color: #519ec8;
}
.map-section-header-green {
  background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #d1d35e 30%);
}
.map-section-header-teal {
  background: linear-gradient(180deg, rgba(81, 159, 200, 0) 30%, #72b591 30%);
}

.carousel-inner {
  .item {
    opacity: 0;
    -webkit-transition-property: opacity;
    transition-property: opacity;
  }

  .active {
    opacity: 1;
  }

  .active.left,
  .active.right {
    left: 0;
    opacity: 0;
    z-index: 1;
  }

  .next.left,
  .prev.right {
    opacity: 1;
  }
}

.carousel-control {
  z-index: 2;
}
@media all and (transform-3d), (-webkit-transform-3d) {
  .carousel-inner > .item.next,
  .carousel-inner > .item.active.right {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .carousel-inner > .item.prev,
  .carousel-inner > .item.active.left {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .carousel-inner > .item.next.left,
  .carousel-inner > .item.prev.right,
  .carousel-inner > .item.active {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.carousel-item img {
  height: 100vh !important ;
}
#sticky-container {
  z-index: 9999;
}
#juxt-context {
  transform: translate(500px, 450px);
}
.plyr.plyr--stopped .plyr__controls {
  display: none;
}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-color: black; /* in case the video doesn't fit the whole page*/
  /* background-image: ; */
  background-position: center center;
  background-size: contain;
  object-fit: cover; /*cover video background */
  z-index: 3;
}
</style>
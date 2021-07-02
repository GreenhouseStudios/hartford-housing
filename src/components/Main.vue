<template>
  <v-container fluid pa-0 style="margin: 0; float: unset; display: visible">
    <!-- changed 'display: contents' to visible because it doesn't work with position:sticky -->
    <Home></Home>
    <About></About>
    <LandAcknowledgement></LandAcknowledgement>
    <Introduction></Introduction>
    <v-row justify="center" class="map-section-header py-5 text-outline-offset">
      <h1
        class="
          d-none d-md-block
          map-section-header
          section-header
          display-2
          font-weight-bold
          text-outline-offset
        "
      >
        Maps
      </h1>
      <h1 class="d-md-none section-header display-1 font-weight-bold">Maps</h1>
    </v-row>

    <div class="section">
      <v-row align="center">
        <v-card align-self="center" class="mx-auto ma-10" width="50vw">
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="blue"
            width="100%"
            @click="navigateToMapSection(3)"
            >Hartford Through Time</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="teal"
            width="100%"
            @click="navigateToMapSection(6)"
            >Routes and Roots</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="green"
            width="100%"
            @click="navigateToMapSection(10)"
            >Mobilities</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="blue"
            width="100%"
            @click="navigateToMapSection(15)"
            >Neighborhood Clusters</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="teal"
            width="100%"
            @click="navigateToMapSection(20)"
            >Housing</v-btn
          >
        </v-card>
        <!-- <v-col class="mx-auto">
          
        </v-col> -->
      </v-row>
    </div>

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

      <div class="section">
        <ResponsiveMap
          :srcset="boundaryMaps"
          :capHead="captions[0].heading"
          :capBody="captions[0].body"
        ></ResponsiveMap>
      </div>

      <div class="section">
        <MobileSlidesSection
          :imgSet="cityTownImages"
          :slidesOnly="true"
        ></MobileSlidesSection>
      </div>

      <div class="section">
        <v-card class="d-flex align-center elevation-0" height="100vh">
          <v-img
            :src="require('../assets/Maps/Gifs/ItalyAnimation.gif')"
            max-height="75vh"
            contain
          ></v-img>
        </v-card>
      </div>
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

      <div class="section">
        <v-card class="d-flex align-center elevation-0" height="100vh">
          <v-img
            :src="require('../assets/Maps/Gifs/ItalyAnimation.gif')"
            max-height="75vh"
            contain
          ></v-img>
        </v-card>
      </div>

      <div class="section">
        <div class="slide" v-for="(obj, index) in originsImages" :key="index">
          <v-card max-height="800" elevation="0">
            <v-img max-height="80vh" contain :src="obj.img"></v-img>
          </v-card>
        </div>
      </div>

      <div class="section">
        <v-card class="d-flex align-center" height="100vh">
          <v-img
            contain
            max-height="90vh"
            :src="require('../assets/Maps/Colleges.jpg')"
          ></v-img>
        </v-card>
      </div>

      <div class="section">
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/Jamaica/Parishes.jpg')"
        ></v-img>
      </div>
      <div class="section">
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/Jamaica/locations.jpg')"
        ></v-img>
      </div>
    </div>

    <!-- 2: Mobilities -->
    <div class="mapsection">
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

      <div class="section">
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

      <div div class="section">
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
          <v-row justify="center">
            <v-col cols="3"></v-col>
            <v-col cols="6" justify="center" class="d-flex flex-column">
              <h2 class="section-header display-1 font-weight-bold pa-10 ma-10">
                {{ map.label }}
              </h2>
              <v-card min-width="50vw">
                <vue-plyr>
                  <div
                    data-plyr-provider="youtube"
                    :data-plyr-embed-id="map.code"
                  ></div>
                </vue-plyr>
              </v-card>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>
        </div>
      </div>

      <div class="section">
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

      <div class="section">
        <MobileSlidesSection :imgSet="northEndImages"></MobileSlidesSection>
      </div>

      <div class="section">
        <MobileSlidesSection
          :imgSet="puertoRicanImages"
          :slidesOnly="true"
        ></MobileSlidesSection>
      </div>

      <div class="section">
        <MobileSlidesSection
          :imgSet="westIndianImages"
          :slidesOnly="true"
        ></MobileSlidesSection>
      </div>

      <div class="section">
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

      <div class="section">
        <MobileSlidesSection
          :imgSet="publicHousingImages"
        ></MobileSlidesSection>
      </div>

      <div class="section desktop-only">
        <h1
          class="
            text-center
            py-6
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
          class="juxtapose"
          width="90%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=1f01859e-7bb2-11eb-83c8-ebb5d6f907df"
        ></iframe>
      </div>

      <div class="section mobile-only">
        <h1
          class="
            text-center
            py-6
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
          class="juxtapose"
          width="100%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c28c8692-8354-11eb-83c8-ebb5d6f907df"
        >
        </iframe>
      </div>

      <div class="section desktop-only">
        <h1
          class="
            text-center
            py-6
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
          class="juxtapose"
          width="90%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0f636f6a-7c40-11eb-83c8-ebb5d6f907df"
        ></iframe>
      </div>

      <div class="section mobile-only">
        <h1
          class="
            text-center
            py-6
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
          class="juxtapose"
          width="100%"
          height="100%"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=6b9e2c68-835a-11eb-83c8-ebb5d6f907df"
        >
        </iframe>
      </div>

      <div class="section">
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

    <!-- <ProfileMenu></ProfileMenu>
    <div class="section" v-for="(prof, j) in profiles" :key="j">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="6">
            <v-img
              :src="prof.img"
              height="600"
              width="400"
              class="d-none d-md-block"
            ></v-img>
            <v-hover v-slot:default="{ hover }" class="d-none d-md-block">
              <v-card
                :elevation="hover ? 16 : 2"
                height="200"
                width="147"
                class="profile-map"
                @click.stop="toMap(j)"
              >
                <v-img
                  src="@/assets/joshmap.jpg"
                  max-height="200"
                  contain
                ></v-img>
              </v-card>
            </v-hover>
          </v-col>
          <v-col cols="12" md="6">
            <ReadMoreCard
              v-bind:body="prof.body"
              v-bind:heading="prof.name"
              v-bind:image="prof.img"
            ></ReadMoreCard>
          </v-col>
        </v-row>
      </v-container>
    </div> -->

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
import LandAcknowledgement from './LandAcknowledgement.vue';

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
      placeholderProfile: {
        name: 'Ashley "AJ" Johnson',
        img: require("../assets/AJJohnson/PastorAJJohnson.jpg"),
        body: `When he was a young boy, Ashley “AJ” Johnson saw a diagram in his father’s office that molded his views of the role of the church. In this diagram, the church was central, a hub from which social, economic, and political activities emanated. It was a model of community engagement his father adopted with the Urban Hope Refuge Church and a legacy AJ implements in his own ministry. The history of the Johnson family is deeply intertwined with patterns of the Great Migration of African Americans to the north as well as the evolution of the African American community in the North End of Hartford. Bishop Dr. William M. Johnson and Dr. Celeste Johnson, both originally from North Carolina, resettled in New York like 6 million other Africans Americans who made a similar exodus from the South. They worked in the ministry between The Bronx, Harlem, and Hartford. AJ teases that he was a “95 North baby” because his parents split so much of their time between New York and Connecticut. The Johnson family, William and Celeste and their sons, Mylious and Ashley, split their time between New York and Hartford. Dr. William Johnson had a background in urban planning while Dr. Celeste Johnson has a background in education.
Neither their degrees nor their status in the community shielded them from discrimination. The refuge they sought in Rocky Hill proved to be a journey into eviction before the family would settle down in Manchester. AJ’s path took him to South Carolina, in some ways a refuge from some of the challenges of home. There, the community
of black people was an inspiration and he tried to identify where his passion and future lay. Would he get involved in politics? Would he be called to the ministry? He ran unsuccessfully for a seat on Hartford’s Court of Common Council and emerged from that experience with a keen understanding of politics as a tool. Since then, AJ Johnson has found his calling in both of his roles as Lead Community Organizer for the Christian Activities Council (now
the Center for Leadership and Justice) and as Senior Pastor of the Urban Hope Refuge Church in Hartford. In these dual roles, Johnson sustains the legacy of civil rights and human rights pioneers like the Rev. Richard Battles of the Mt. Olive Baptist Church, William Brown, Executive Director of the Urban League of Greater Hartford and of his father Bishop Johnson. The passion he brings to the No More Slumlords movement is duplicated in his support of entrepreneurship in the local community and his backing of a $15 minimum wage.`,
      },
      profiles: new Array(1)
        .fill([
          {
            name: "Milagros Ortiz",
            img: require("../assets/MilagrosOrtiz/milagros.jpg"),
            body: `As a tenant leader in the No More Slum Lords Movement, Milagros Ortiz has become accustomed to sharing her story with the public. Dig a little further and you will be in Campanilla, Toa Baja, Puerto Rico. Here, her family grew so large and tight-knit that they started to move to houses on the same street. Her grandmother was among the first to set off for New York, one of the prime destinations for Puerto Ricans sojourners to the United States. Milagros’ paternal family and some of her maternal relatives settled in The Bronx. Milagros Ortiz the elder, eventually for Connecticut in part to get away from the fast-paced life of New York and to access the American School for the Deaf. The family settled in New Britain. She worked various jobs at CW Tools, McDonalds, and as a cleaning lady to support her family. Her father, Ramon Ortiz was a landscaper and worked across the country.
Milagros Jr remembers her childhood in New Britain being enjoyable, filled with lots of open space and parks and a strong sense of community. They held big family parties and celebrations that helped to maintain the tradition of spending time with your family. Milagros aspired to be a wrestler, making heroes of figures like Stone Cold and Steve Austin. She was active in softball, wrestling, basketball, cheerleading, gymnastics, chorus, and played numerous instruments and attended many
summer camps. Although she hoped to enlist in the military, a pregnancy foiled those plans. She moved several times between New Britain and East Hartford, including to deal with
a difficult relationship. At one time she had several dogs, three snakes, two geckos, two hamsters, two birds, and a cat, a scorpion, amongst many other animals because her autistic son, Jensy, loved animals. She eventually relocated Hartford to Clay Arsenal for larger accommodations and to be closer to family in Hartford.
After a period of good maintenance and property upkeep when she first moved to Hartford, the arrival of a new owner brought disorganization and chaos. Many tenants experienced issues with the management losing important paperwork, receipts,
and work orders. Milagros personally experienced issues with rats. She met Pastor Johnson during a meeting between tenants and the project manager, where
the landlord was a no-show. Tenants agreed to meet at a later time to discuss actionable steps moving forward, which sparked what became known as the No More Slumlords Movement.
It may take a while for Ortiz to tell you that her housing struggles were deadly for her pets, that the comfort Jensy took in these animals was one of the sacrifices she was forced to make. She continues to rebuilt that support network.`,
          },
          {
            name: "Teri Morrison",
            img: require("../assets/TeriMorrison/terimorrisonmainimage.jpg"),
            body: `Teri moved to Garden street with her children and resided there for about 24 years. Mold started seeping through her walls, closets, and furniture and began impacting her children’s health. She moved several times, eventually ending up on Albany Avenue. This time it was mice that enraged her. Everyone knows her home, and especially her kitchen, as especially meticulous. She loves to cook but mice have a way of sapping the inspiration in even the most
committed person. Having moved to address the code violations
in her previous home, for which she filed an official complaint, she now had to contend with vermin. She began communicating with her neighbors and discovered that they had also been experiencing
similar problems. She teamed up with Pastor AJ Johnson and became an active member of the No Slumlords Movement in Hartford. She began using her voice to organize a powerful movement against housing conditions in the city. The main focus of organizing has been holding landlords accountable for the upkeep and maintenance of
their apartments. Education has also featured prominently, as Teri and other leaders uncovered the murky and subtle ways that the municipal housing code and the inspection system encouraged negligence rather than compliance.
Teri will be the first one to tell you that organizing people is difficult work, that sometimes its only five or six people who do the work that impacts thousands of residents. She will also be the first one to remind us that both tenants and landlords need to uphold their responsibilities to the
property and be accountable. She is a model to so many people in her stalwart commitment to making the North End livable, safe, and community-oriented.
 `,
          },
          {
            name: "Joshua Serrano",
            img: require("../assets/JoshuaSerrano/JoshuaSerrano.jpg"),
            body: `The roots of Josh Serrano’s journey into community activism can be traced to his family’s history in Hartford. His mother, at around age 16, Luz Belinda Estremera moved to Hartford from Ponce, Puerto Rico along with his maternal Aunt Edith. It was a journey undertaken by several generations of Puerto Ricans before them. Luz would settle and move around in the north and south end while Edith settled permanently at Bellevue Square. She would marry Jesus Serrano and Josh was born on Enfield St, Hartford. Spurred by the opportunity to pursue a better life for her children, Luz worked in Head Start and Community Renewal Team (CRT); her husband worked as a window washer and eventually became the building superintendent where he lived. The family moved between the north and south end of Hartford, sometimes driven by hardship, in other instances moving to better accommodations. These journeys would take them to Zion, Magnolia, Garden, and Bedford Streets. Along the way, they adopted a cat, Kitty who accompanied them
on their journeys. The family moved finally to the Clay Arsenal Renaissance Apartments (CARA) when Josh was about 13 years old. Ms. Estremera eventually passed down the residency to Joshua who then became the head of household and she moved to the Blue Hills area.`,
          },
          {
            name: 'Ashley "AJ" Johnson',
            img: require("../assets/AJJohnson/PastorAJJohnson.jpg"),
            body: `When he was a young boy, Ashley “AJ” Johnson saw a diagram in his father’s office that molded his views of the role of the church. In this diagram, the church was central, a hub from which social, economic, and political activities emanated. It was a model of community engagement his father adopted with the Urban Hope Refuge Church and a legacy AJ implements in his own ministry. The history of the Johnson family is deeply intertwined with patterns of the Great Migration of African Americans to the north as well as the evolution of the African American community in the North End of Hartford. Bishop Dr. William M. Johnson and Dr. Celeste Johnson, both originally from North Carolina, resettled in New York like 6 million other Africans Americans who made a similar exodus from the South. They worked in the ministry between The Bronx, Harlem, and Hartford. AJ teases that he was a “95 North baby” because his parents split so much of their time between New York and Connecticut. The Johnson family, William and Celeste and their sons, Mylious and Ashley, split their time between New York and Hartford. Dr. William Johnson had a background in urban planning while Dr. Celeste Johnson has a background in education.
Neither their degrees nor their status in the community shielded them from discrimination. The refuge they sought in Rocky Hill proved to be a journey into eviction before the family would settle down in Manchester. AJ’s path took him to South Carolina, in some ways a refuge from some of the challenges of home. There, the community
of black people was an inspiration and he tried to identify where his passion and future lay. Would he get involved in politics? Would he be called to the ministry? He ran unsuccessfully for a seat on Hartford’s Court of Common Council and emerged from that experience with a keen understanding of politics as a tool. Since then, AJ Johnson has found his calling in both of his roles as Lead Community Organizer for the Christian Activities Council (now
the Center for Leadership and Justice) and as Senior Pastor of the Urban Hope Refuge Church in Hartford. In these dual roles, Johnson sustains the legacy of civil rights and human rights pioneers like the Rev. Richard Battles of the Mt. Olive Baptist Church, William Brown, Executive Director of the Urban League of Greater Hartford and of his father Bishop Johnson. The passion he brings to the No More Slumlords movement is duplicated in his support of entrepreneurship in the local community and his backing of a $15 minimum wage.`,
          },
        ])
        .flat(),
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
};
</script>
<style scoped>
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
</style>
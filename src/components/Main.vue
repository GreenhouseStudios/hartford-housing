<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <v-container fluid pa-0 style="margin: 0; float: unset; display: visible">
      <!-- changed 'display: contents' to visible because it doesn't work with position:sticky -->
      <Home></Home>
      <About></About>
      <LandAcknowledgement></LandAcknowledgement>
      <Introduction></Introduction>
      <TableContents :tiles="galleryImgs"></TableContents>
      <!-- 0: Hartford Through Time -->

      <v-card
        align-content="center"
        width="100vw"
        color="blue"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center font-weight-bold h1">Hartford Through Time</h1>
      </v-card>

      <div class="section map-chapter map" id="hartford-through-time" style="background: #D9F2FF">
        <v-card class="d-flex flex-column align-center elevation-0" style="background: #D9F2FF">
          <v-img
            contain
            max-height="90vh"
            :src="
              require('../assets/Maps/Final/BoundariesThroughTime/BoundariesThroughTime3.jpg')
            "
          ></v-img>
          <map-details-button></map-details-button>
        </v-card>
      </div>

      <div class="section map" id="city-town" style="background: #D9F2FF">
        <MobileSlidesSection
          :imgSet="cityTownImages"
          slidesOnly
        ></MobileSlidesSection>
      </div>

      <div class="section map" id="hartford-in-context" style="background: #D9F2FF">
        <v-img
          max-height="90vh"
          :src="require('../assets/Maps/Final/HartfordInContext2.jpg')"
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <!-- 1:Routes and Roots -->

      <v-card
        align-content="center"
        width="100vw"
        color="teal"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center font-weight-bold h1">Roots and Routes</h1>
      </v-card>

      <div
        class="section map-chapter map"
        style="background: #E7FFE7"
        id="routes-roots"
      >
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/BlackRoots1805.jpg')"
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <div class="section map" style="background: #E7FFE7" id="origins">
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/Origins/PrimaryOrigins.jpg')"
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <div
        class="section map"
        style="background: #E7FFE7"
        id="college-recruitment"
      >
        <v-img
          contain
          max-height="90vh"
          :src="
            require('../assets/Maps/Final/ShadeTobaccoRecruitment_update.jpg')
          "
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <div class="section map" style="background: #E7FFE7" id="jamaica-parish">
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/Jamaica/Jamaica_Parish.jpg')"
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <div
        class="section map"
        style="background: #E7FFE7"
        id="jamaica-locality"
      >
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/Jamaica/Jamaica_Locality.jpg')"
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <div class="section map" style="background: #E7FFE7" id="tobacco-valley">
        <v-img
          contain
          max-height="90vh"
          :src="require('../assets/Maps/Final/CTTobaccoValley.jpg')"
        ></v-img>
        <map-details-button></map-details-button>
      </div>

      <!-- 2: Mobilities -->

      <v-card
        align-content="center"
        width="100vw"
        color="green"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center font-weight-bold h1">Mobilities</h1>
      </v-card>

      <v-row class="pa-10" style="background: #FFFFDB">
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
      <div class="section map-chapter map"  id="mobilities" style="background: #FFFFDB">
        <MobileSlidesSection :imgSet="racialEthnicImages" bgColor="#FFFFDB"></MobileSlidesSection>
      </div>

      <v-row class="pa-10" style="background: #FFFFDB">
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

      <div
        class="section"
        style="position: relative; background: #FFFFDB"
        v-for="(map, index) in driftMaps"
        :class="index === 0 ? 'map' : ''"
        :key="map.label"
      >
        <div class="d-flex flex-column align-center">
          <h1 class="highlight-green ma-2 pa-1" style="text-align: center">
            {{ map.label }}
          </h1>
          <div class="mb-5">
            <iframe
              :src="
                'https://www.youtube.com/embed/' +
                map.code +
                '?&autoplay=1&loop=1&mute=1&controls=0&playsinline=1&showinfo=0&modestbranding=1&playlist=' +
                map.code +
                '&origin=https://hartfordbound.com'
              "
              frameborder="0"
              allowfullscreen
              style="pointer-events: none"
              loading="lazy"
              width="1440px"
              height="810px"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- 3: Neighborhood Clusters -->

      <v-card
        align-content="center"
        width="100vw"
        color="blue"
        tile
        class="elevation-0 banner"
      >
        <h1 class="text-center font-weight-bold h1">Neighborhood Clusters</h1>
      </v-card>

      <div class="section map-chapter map" id="neighborhood-clusters" style="background: #D9F2FF">
        <!-- <v-img :src="require('../assets/Maps/Final/Clusters/CemeteryLaneCluster.jpg')"></v-img> -->
        <MobileSlidesSection
          :imgSet="clusters"
          slidesOnly
        ></MobileSlidesSection>
      </div>

      <div class="section map" style="background: #D9F2FF">
        <MobileSlidesSection :imgSet="northEndImages"></MobileSlidesSection>
      </div>

      <div class="section map" style="background: #D9F2FF">
        <v-img :src="require('../assets/Maps/Final/PuertoRicans2.png')"></v-img>
        <map-details-button></map-details-button>
      </div>

      <div class="section map" style="background: #D9F2FF">
        <v-img :src="require('../assets/Maps/Final/WestIndians2.png')"></v-img>
        <map-details-button></map-details-button>
      </div>

      <div class="section map" style="background: #D9F2FF">
        <v-img :src="require('../assets/Maps/Final/MemberLists2.jpg')"></v-img>
        <map-details-button></map-details-button>
      </div>

      <div class="section map d-flex flex-column" style="background: #D9F2FF">
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            max-height="90vh"
            contain
            :src="require('../assets/Maps/Final/ForeignBornPop/1900_FB.jpg')"
          ></v-img>
          <router-link to="/Map/1" class="display-1 font-weight-bold"
            ><v-btn>Map Details</v-btn></router-link
          >
        </div>
      </div>

      <div class="section map d-flex flex-column" style="background: #D9F2FF">
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            max-height="90vh"
            contain
            :src="require('../assets/Maps/Final/ForeignBornPop/1940.jpg')"
          ></v-img>
          <map-details-button></map-details-button>
        </div>
      </div>

      <div class="section map d-flex flex-column" style="background: #D9F2FF">
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            max-height="90vh"
            contain
            :src="require('../assets/Maps/Final/ForeignBornPop/1980_FB.jpg')"
          ></v-img>
          <map-details-button></map-details-button>
        </div>
      </div>

      <div class="section map" style="background: #D9F2FF">
        <div class="d-flex flex-column justify-center align-center">
          <v-img
            max-height="90vh"
            contain
            :src="require('../assets/Maps/Final/ForeignBornPop/2018_FB.jpg')"
          ></v-img>
          <map-details-button></map-details-button>
        </div>
      </div>

      <Settlement></Settlement>
      <Housing></Housing>
      <Timeline></Timeline>
    </v-container>
  </full-page>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Settlement from "@/components/Settlement";
import Housing from "@/components/Housing";
import Timeline from "@/components/Timeline";
import { loremIpsum } from "lorem-ipsum";
import MobileSlidesSection from "@/components/MobileSlidesSection";
import LandAcknowledgement from "./LandAcknowledgement.vue";
import TableContents from "./TableContents.vue";
import MapDetailsButton from "./MapDetailsButton.vue";
export default {
  name: "Main",
  components: {
    Home,
    About,
    Introduction,
    Settlement,
    Housing,
    Timeline,
    MobileSlidesSection,
    LandAcknowledgement,
    TableContents,
    MapDetailsButton,
  },
  methods: {
    MobileSlidesSectionMapClick(index) {
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
      options: {
        licenseKey: "5040F97D-84574F59-952CE4FC-EAD7E65C",
        navigation: false,
        navigationPosition: "right",
        fitToSection: false,
        autoScrolling: false, //this breaks app bar hiding
        slidesNavigation: true, //hide slide dots
        slidesNavPosition: "bottom",
        controlArrows: true,
        verticalCentered: true,
      },
      galleryImgs: [
        //Hartford Through Time
        {
          title: "City Boundaries",
          img: require("../assets/Maps/Final/BoundariesThroughTime/BoundariesThroughTime3.jpg"),
        },
        {
          title: "City and Town",
          img: require("../assets/Maps/Final/CityTown/1635 (Large).jpg"),
        },
        {
          title: "Hartford In Context",
          img: require("../assets/Maps/Final/HartfordInContext2.jpg"),
        },

        //Roots and Routes
        {
          title: "Black Roots",
          img: require("../assets/Maps/Final/BlackRoots1805.jpg"),
        },
        {
          title: "Origins",
          img: require("../assets/Maps/Final/Origins/PrimaryOrigins.jpg"),
        },
        {
          title: "College Workers",
          img: require("../assets/Maps/Final/ShadeTobaccoRecruitment_update.jpg"),
        },
        {
          title: "Jamaica",
          img: require("../assets/Maps/Final/Jamaica/Jamaica_Locality.jpg"),
        },
        {
          title: "CT Tobacco Valley",
          img: require("../assets/Maps/Final/CTTobaccoValley.jpg"),
        },
        //Mobilities
        {
          title: "Racial And Ethnic Distribution",
          img: require("../assets/Maps/Final/RaceEthnic/EthnicRacialDist1900.jpg"),
        },
        {
          title: "Population Drift and Ethnic Succession",
          img: require("../assets/Maps/Final/driftmap.png"),
        },
        //Neighborhood Clusters
        {
          title: "Cemetery Lane",
          img: require("../assets/Maps/Final/churchmovement.jpg"),
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
      ],
      driftMaps: [
        { label: "19th Century Mobility", code: "nUEEx9RvCI0" },
        { label: "Canadians", code: "A1vxNXc5VXM" },
        { label: "Italians - Irish - Russians", code: "m5pspShU30I" },
        { label: "Irish", code: "46hftqsrO8A" },
        { label: "Italians", code: "4KIuzkhkjiY" },
        { label: "Polish", code: "Mc2bnn4xB-I" },
        { label: "Russians", code: "YkcxRNjt3Fw" },
      ],
      captions: [
        {
          heading: "Hartford Through Time",
          body: "Harford’s present extent of 18 square miles is an artifact of town and city amalgamation between 1784 and 1896. Each change redefined the city in relation to its commercial business district as well as the future towns and suburbs of East Hartford, Manchester, and West Hartford. By 1881, the town and city had coterminous boundaries and consolidated government followed in April 1896. Native American, European, and African diasporic communities shaped the early histories of mobility, displacement, dispossession, and settlement in Hartford. The Great Migrations of African Americans, West Indians, and Puerto Ricans would transform the twentieth-century trajectory of the city.",
        },
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
      housingConditionImages: [
        {
          img: require("../assets/Maps/Final/HousingConditions/LackingPrivateBath2.jpg"),
        },
        {
          img: require("../assets/Maps/Final/HousingConditions/NeedingRepair2.jpg"),
        },
        {
          img: require("../assets/Maps/Final/HousingConditions/State_of_Repair_vs_Occupancy.jpg"),
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
          img: require("../assets/Maps/Final/RaceEthnic/EthnicRacialDist1900.jpg"),
        },
        {
          img: require("../assets/Maps/Final/RaceEthnic/EthnicRacialDist1940.jpg"),
        },
      ],
      clusters: [
        {
          img: require("../assets/Maps/Final/Clusters/CemeteryLaneCluster.jpg"),
        },
        { img: require("../assets/Maps/Final/Clusters/CTRIVERCLUSTER.jpg") },
        { img: require("../assets/Maps/Final/Clusters/MillRiverCluster.jpg") },
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
    // get the sticky element
    const stickyElm = [...document.querySelectorAll(".banner")];
    // console.log(stickyElm);
    // let intersecting = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting && e.boundingClientRect.top == -1) {
            e.target.classList.add("isSticky");
            // console.log(e.boundingClientRect)
            // console.log(e.intersectionRect)
          }
        });
      },
      { threshold: 1 }
    );
    stickyElm.map((el) => observer.observe(el));

    const settlement = document.querySelector("#settlement-section");
    const obs = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].boundingClientRect);
        if (
          entries[0].boundingClientRect.top < 200 &&
          entries[0].isIntersecting
        ) {
          stickyElm.map((e) => e.classList.add("hidden"));
        } else if (entries[0].boundingClientRect.top > 400) {
          stickyElm.map((e) =>
            e.classList.contains("hidden")
              ? e.classList.remove("hidden")
              : e.classList.entries
          );
        }
      },
      { threshold: [0.1, 0.5, 1] }
    );
    obs.observe(settlement);
  },
};
</script>
<style>
a {
  margin: 15px 0;
}
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
.fp-section.fp-table {
  height: auto !important;
}
.fp-tableCell {
  height: auto !important;
}
.banner {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  z-index: 2;
  top: -1px;
  padding: 20px 0;
  font-weight: 800;
}
.banner h1 {
  font-weight: 800;
}
.banner.isSticky {
  padding: 10px 0;
  font-size: 8pt;
}
.hidden {
  display: none;
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
.map{
  padding: 50px 0;
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
#myVideo {
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.v-btn {
  text-decoration: none;
}
</style>
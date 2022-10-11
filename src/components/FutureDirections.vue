<template>
<full-page ref="fullpage" :options="options" id="fullpage">
  <div>
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

      <div id="bellevue-trigger"></div>

      <div class="section d-none d-md-flex map-set" style="position: relative">
        <h1
          class="
            text-center
            py-6
            mb-10
            font-weight-bold
            h1
            display-2
            map-section-header-green
          "
        >
          Bellevue 1934 vs 1965
        </h1>
        <div>
          <iframe
            frameborder="0"
            class="juxtapose"
            width="100%"
            height="800px"
            scrolling="no"
            src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=1f01859e-7bb2-11eb-83c8-ebb5d6f907df"
          ></iframe>
        </div>
      </div>

      <div class="section d-sm-flex d-md-none">
        <h1
          class="
            text-center
            py-6
            mb-10
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
          height="600px"
          scrolling="no"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c28c8692-8354-11eb-83c8-ebb5d6f907df"
        >
        </iframe>
      </div>

      <div class="d-md-block ma-2">
        <v-img
          :src="require('../assets/Maps/Final/Bellevue/GeographicContext.jpg')"
          max-height="30em"
          contain
        ></v-img>
      </div>

      <div class="section d-none d-md-flex">
        <h1
          class="
            text-center
            py-6
            mb-10
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
          height="800px"
          scrolling="no"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=0f636f6a-7c40-11eb-83c8-ebb5d6f907df"
        ></iframe>
      </div>

      <div class="section d-sm-flex d-md-none">
        <h1
          class="
            text-center
            py-6
            mb-10
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
          height="600px"
          scrolling="no"
          src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=6b9e2c68-835a-11eb-83c8-ebb5d6f907df"
        >
        </iframe>
      </div>

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
        <h1 class="d-md-none map-section-header-teal section-header h4 mx-auto">
          Renting Hartford
        </h1>
      </v-row>
      <div class="section map-set">
        <MobileSlidesSection :imgSet="rentingImages"></MobileSlidesSection>
      </div>
      <!-- Not using MobileSlidesSection for the Housing Condition set because we want the middle slide (Slide 2) to be the default slide -->

      <div>
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
        <div class="section map-set">
          <MobileSlidesSection
            :imgSet="housingConditionImages"
            slidesOnly
          ></MobileSlidesSection>
        </div>
      </div>
    </div>

    <div class="section map-set">
      <v-row class="ma-10">
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
</full-page>
</template>

<script>
import MobileSlidesSection from "@/components/MobileSlidesSection";
export default {
  name: "FutureDirections",
   components: {
    MobileSlidesSection,
  },
  data() {
    return {
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
    }
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
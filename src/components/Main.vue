<template>
  <v-container fluid pa-0 style="margin: 0; float: unset; display: contents">
    <Home></Home>
    <About></About>
    <Introduction></Introduction>
    <v-row
      justify="center"
      class="map-section-header mt-5 py-5 text-outline-offset"
    >
      <h1
        class="d-none d-md-block map-section-header section-header display-2 font-weight-bold text-outline-offset"
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
            color="teal"
            width="100%"
            >Hartford Through Time</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="blue"
            width="100%"
            >Routes and Roots</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="green"
            width="100%"
            >Mobilities</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="teal"
            width="100%"
            >Housing</v-btn
          >
          <v-btn
            class="d-block"
            tile
            elevation="0"
            x-large
            color="blue"
            width="100%"
            >Neighborhood Clusters</v-btn
          >
        </v-card>
        <!-- <v-col class="mx-auto">
          
        </v-col> -->
      </v-row>
    </div>

    <!-- 0: Hartford Through Time -->

    <div class="section">
      <v-row class="mx-auto">
        <v-col class="mx-auto">
          <ResponsiveMap
            :srcset="[
              '../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_599.jpg',
              '../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_847.jpg',
              '../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1047.jpg',
              '../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1231.jpg',
              '../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1400.jpg',
            ]"
          ></ResponsiveMap>
          <!-- <VuePictureElement
            alt="Some picture"
            :path="'src/assets/Maps/Breakpoints/Boundaries/'"
            :extensions="['jpg']"
            :settings="settings"
            :name="'boundaries'"
          ></VuePictureElement> -->

          <!-- <picture>
            <img
              sizes="(max-width: 1400px) 100vw, 1400px"
              
              :src="require('../assets/Maps/Breakpoints/Boundaries/Boundaries_fbvrbz_c_scale,w_1400.jpg')"
              alt="boundaries"
            />
          </picture> -->
          <!-- <v-img
        contain
        max-height="90vh"
        src="../assets/Maps/Final/Layout7.png?nf_resize=fit&w=300&h=400"
      ></v-img> -->
        </v-col>
      </v-row>
    </div>

    <div class="section">
      <b-carousel
        id="citytowncar"
        style="text-shadow: 0px 0px 2px #000; width: 100%; margin: auto"
        fade
        :interval="2500"
        controls
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1635.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1784.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1853.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1859.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1871.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1873.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1881_FIX2.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/CityTown/1897_FIX2.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <div class="section">
      <v-sheet color="blue" height="100vh" width="100vw">
        <h1 class="section-header display-4 font-weight-bold">
          Arterial Growth
        </h1>
      </v-sheet>
    </div>

    <!-- 1:Routes and Roots -->

    <div class="section">
      <v-sheet color="teal" height="100vh" width="100vw">
        <h1 class="section-header display-4 font-weight-bold">
          Global Roots of Hartford’s North End Population
        </h1>
      </v-sheet>
    </div>

    <div class="section">
      <v-img
        contain
        max-height="90vh"
        :src="
          require('../assets/Maps/Final/Origins/OriginWithLabel.jpg?nf_resize=fit&w=300&h=400')
        "
      ></v-img>
    </div>

    <div class="section">
      <v-img
        contain
        max-height="90vh"
        :src="require('../assets/Maps/Colleges.jpg')"
      ></v-img>
    </div>

    <div class="section">
      <v-img
        contain
        max-height="90vh"
        :src="require('../assets/Maps/Agricultural_Workers.jpg')"
      ></v-img>
    </div>

    <!-- 2: Mobilities -->

    <div class="section">
      <!-- <MapCarousel></MapCarousel> -->

      <b-carousel
        id="race-ethnic"
        style="text-shadow: 0px 0px 2px #000; width: 100%; margin: auto"
        fade
        :interval="2500"
        controls
        img-width="30vw"
      >
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/RaceEthnic/1900_FIX.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
        <b-carousel-slide
          :img-src="
            require('../assets/Maps/Final/RaceEthnic/1940_FIX.jpg?nf_resize=fit&w=300&h=400')
          "
        ></b-carousel-slide>
      </b-carousel>
    </div>

    <div div class="section">
      <v-img
        :src="require('../assets/Maps/Gifs/ItalyAnimation.gif')"
        max-height="75vh"
        contain
      ></v-img>
    </div>

    <!-- <div class="section">
      <v-sheet color="teal" height="100vh" width="100vw">
        <div class="section">
          <v-row class="d-none d-md-block">
            <v-col col="3"></v-col>
            <v-col col="6" class="mx-auto">
              <youtube
                video-id="kgqk1_dDP4o"
                player-width="1600"
                player-height="1200"
                :player-vars="{
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                  loop: 1,
                }"
              ></youtube>
            </v-col>
            <v-col col="3"></v-col>
          </v-row>
          <v-row class="d-block d-md-none">
            <v-col class="mx-auto">
              <youtube
                video-id="kgqk1_dDP4o"
                player-width="400"
                player-height="300"
                :player-vars="{
                  autoplay: 1,
                  modestbranding: 1,
                  rel: 0,
                  loop: 1,
                }"
              ></youtube>
            </v-col>
          </v-row>
        </div>
      </v-sheet>
    </div> -->

    <div class="section">
      <v-row class="my-10 mx-auto">
        <h1
          class="d-none d-md-block map-section-header section-header display-2 font-weight-bold mx-auto"
        >
          Canton Street Case Study
        </h1>
        <h1 class="d-md-none map-section-header section-header h4 mx-auto">
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

    <!-- 3: Neighborhood Clusters -->

    <div class="section">
      <MobileSlidesSection
        :imgSet="northEndImages"
        :maxHeight="'50vh'"
      ></MobileSlidesSection>
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
        :src="require('../assets/Maps/Final/ForeignBornPop/2018.jpg')"
      ></v-img>
    </div>

    <div class="section">
      <v-img
        max-height="90vh"
        contain
        :src="require('../assets/Maps/Final/ForeignBornPop/2018.jpg')"
      ></v-img>
    </div>

    <!-- 4: Housing -->

    <!-- <div class="section">
      <v-img
        max-height="90vh"
        contain
        :src="
          require('../assets/Maps/Final/SlumClearance/SlumClearance1934.jpg')
        "
      ></v-img>
    </div>

    <div class="section">
      <v-img
        max-height="90vh"
        contain
        :src="
          require('../assets/Maps/Final/Redlining/RedlinedDistricts1937.jpg')
        "
      ></v-img>
    </div> -->

    <MobileSlidesSection :imgSet="publicHousingImages"></MobileSlidesSection>

    <div class="section">
      <iframe
        frameborder="0"
        class="juxtapose"
        width="90%"
        height="800"
        src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=e71c7928-6d50-11eb-83c8-ebb5d6f907df"
      ></iframe>
    </div>

    <MobileSlidesSection :imgSet="rentingImages"></MobileSlidesSection>

    <!-- Not using MobileSlidesSection for the Housing Condition set because we want the middle slide (Slide 2) to be the default slide -->

    <div class="section" v-if="!isMobile">
      <v-row>
        <v-col cols="4">
          <v-img
            max-height="50vh"
            contain
            :src="
              require('../assets/Maps/Final/HousingConditions/LackingPrivateBath2.jpg')
            "
            class="d-inline"
          ></v-img>
        </v-col>
        <v-col cols="4"
          ><v-img
            max-height="50vh"
            contain
            :src="
              require('../assets/Maps/Final/HousingConditions/State_of_Repair_vs_Occupancy.jpg')
            "
            class="d-inline"
          ></v-img
        ></v-col>
        <v-col cols="4"
          ><v-img
            max-height="50vh"
            contain
            :src="
              require('../assets/Maps/Final/HousingConditions/NeedingRepair2.jpg')
            "
            class="d-inline"
          ></v-img
        ></v-col>
      </v-row>
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
    <ProfileMenu></ProfileMenu>
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
    </div>

    <div class="section">
      <h2 class="section-header display-1 font-weight-bold">Sources</h2>
      <v-simple-table class="mx-10">
        <template v-slot:default>
          <tbody>
            <tr v-for="n in sources.length">
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
    <v-dialog v-model="dialog">
      <v-card v-if="activeProfile">
        <v-card-title class="headline grey lighten-2" primary-title
          >{{ activeProfile.name }}'s Hartford</v-card-title
        >
        <v-img src="@/assets/joshmap.jpg" max-height="600" contain></v-img>
        <v-card-text>{{ activeProfile.body }}</v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Introduction from "@/components/Introduction";
import Maps from "@/components/Maps";
import Map from "@/components/Map";
import Settlement from "@/components/Settlement";
import Housing from "@/components/Housing";
import ProfileMenu from "@/components/ProfileMenu";
import Timeline from "@/components/Timeline";
import Card from "@/components/Card";
import Caption from "@/components/Caption";
import ReadMoreCard from "@/components/ReadMoreCard";
import MapCarousel from "@/components/MapCarousel";
import svgPanZoom from "svg-pan-zoom";
import { loremIpsum } from "lorem-ipsum";
import VuePictureElement from "vue-picture-element";
import VueResponsiveImage from "vue-responsive-image";
import ResponsiveMap from "@/components/ResponsiveMap";
import MobileSlidesSection from "@/components/MobileSlidesSection";
export default {
  name: "Main",
  components: {
    Home,
    About,
    Introduction,
    Map,
    Maps,
    Settlement,
    Housing,
    ProfileMenu,
    Timeline,
    Card,
    ReadMoreCard,
    Caption,
    MapCarousel,
    VuePictureElement,
    ResponsiveMap,
    MobileSlidesSection,
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
  },
  mounted() {},
  data() {
    return {
      profileToMapMapping: [1],
      activeProfile: null,
      dialog: false,
      slides: ["Tenant Activists Profiles", "Historic Firsts"],
      imgs: ["../assets/Maps/Final/NorthEnd/AfricanAmerican.jpg"],
      sourcePlaceholder: loremIpsum({ count: 40, units: "words" }),
      sources: loremIpsum({ count: 50, units: "sentences" }).split("."),
      cantonImages: [
        { img: require("../assets/Maps/Final/Canton/Canton1920.jpg") },
        { img: require("../assets/Maps/Final/Canton/Canton1930.jpg") },
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
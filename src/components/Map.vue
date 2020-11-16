<template>
  <div class="map-container">
    <v-row>
      <v-col cols="12" md="6">
        <Card class="map-card" v-bind:heading="title" v-bind:body="body"></Card>
      </v-col>
      <v-col cols="12" md="6" style="z-index: 0">
        <div class="map">
          <div v-bind:id="mapid" style="height: 65vh"></div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import * as L from "leaflet";
import { imageOverlay, latLng, tileLayer } from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet/dist/leaflet.css";
import Card from "@/components/Card";

//Solution to some BS probem with leaflet not loading it's own damn marker icon properly
//Found as the last post in this issue thread:
//https://github.com/Leaflet/Leaflet/issues/4968
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import pop1940 from "../geojson/Pop1940.json";
import pop1960 from "../geojson/Pop1960.json";
import pop1980 from "../geojson/Pop1980.json";
import keneyPark from "../geojson/KeneyPark.json";

export default {
  components: {
    Card,
  },
  name: "Map",
  props: {
    coordinates: {
      type: Array,
      default: () => [41.78, -72.67],
    },
    zoomLevel: {
      type: Number,
      default: 14,
    },
    id: {
      type: String,
      default: "mapid",
    },
    jsonFile: {
      type: String,
      default: "pop1940",
    },
    title: {
      type: String,
      default: "Map",
    },
    body: {
      type: String,
      default: `Issue outcomes boots on the ground activate fairness grit. Impact investing gender rights, B-corp, synergy game-changer radical invest. Circular, a global our work inclusive best practices greenwashing accessibility uplift. Mass incarceration relief, co-create social entrepreneur collaborative cities shared value thought leadership replicable replicable. Catalyze, contextualize; empower blended value relief LGBTQ+ youth living a fully ethical life energize. Ecosystem; silo thought leader game-changer external partners scale and impact. Milestones social return on investment circular outcomes co-creation. Social innovation social entrepreneurship targeted move the needle scalable effective peaceful then. Parse compelling we must stand up families human-centered do-gooder theory of change resilient impact investing. Low-hanging fruit scale and impact; transparent, strategy synergy innovate best practices. The resistance, invest; milestones indicators milestones. Humanitarian paradigm because commitment, blended value families rubric. Replicable social innovation commitment challenges and opportunities a thought leadership overcome injustice capacity building co-creation. Thought leadership technology outcomes social intrapreneurship accessibility leverage.`,
    },
    imageOverlaySet: {
      type: Array,
      default: () => [
        {bounds:[[41.78, -72.67,], [41.81, -72.70]], img: "https://legacy.lib.utexas.edu/maps/historical/newark_nj_1922.jpg"},
          ]
    }
  },
  data() {
    return {
      keneyPoly: keneyPark,
      jsonSources: [pop1940, pop1960, pop1980],
      jsonFileNames: ["pop1940", "pop1960", "pop1980"],
      jsonData: null,
      map: null,
      tileLayer: null,
      mapid: this.id,
      overlayURL:
        "https://legacy.lib.utexas.edu/maps/historical/newark_nj_1922.jpg",
      layers: [
        {
          id: 0,
          name: "Restaurants",
          active: false,
          features: [
            {
              id: 0,
              name: "Hartford",
              type: "marker",
              coords: this.coordinates,
            },
          ],
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.jsonData = this.jsonSources[this.jsonFileNames.indexOf(this.jsonFile)];
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap: function () {
      L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
      this.map = L.map(this.mapid, {
        center: this.coordinates,
        zoom: this.zoomLevel,
        gestureHandling: true,
      });

      // this.map = L.map("mapid").setView([41.78, -72.67], 14);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers: function () {
      this.layers.forEach((layer) => {
        const markerFeatures = layer.features.filter(
          (feature) => feature.type === "marker"
        );
        // const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');

        markerFeatures.forEach((feature) => {
          feature.leafletObject = L.marker(feature.coords).bindPopup(
            feature.name
          );
          feature.leafletObject.addTo(this.map);
        });

        // polygonFeatures.forEach((feature) => {
        //   feature.leafletObject = L.polygon(feature.coords)
        //     .bindPopup(feature.name);
        // });
      });
      if (this.jsonData) {
        L.geoJSON(this.jsonData, {
          style: function (feature) {
            return { color: mapColor(feature.properties.PercAA) };
          },
        })
          .bindPopup(function (layer) {
            return layer.feature.properties.description;
          })
          .addTo(this.map);
      }

      L.geoJSON(this.keneyPoly, {
        style: function () {
          return { color: "green" };
        },
      })
        .bindPopup(function (layer) {
          return layer.feature.properties.description;
        })
        .addTo(this.map);

      if (this.map) {
        var result = [];
        var overlaysGroup = L.layerGroup();
        this.imageOverlaySet.forEach((image) =>{
          var overlay = L.imageOverlay(image.img,image.bounds);
          overlay.addTo(overlaysGroup)
          result.push(overlay)
        })
        // var test = L.imageOverlay(this.overlayURL, [
        //   [41.78, -72.67],
        //   [41.81, -72.70],
        // ])
        //Note: this is how to setup a single image overlay
        //For multiple image overlays in a layer see this example https://codesandbox.io/s/vy5zww6r0y?file=/src/app/app.component.ts
        var controlTest = {
          "Overlays": overlaysGroup
        }

        L.control.layers(null,controlTest).addTo(this.map);
      }
    },
  },
};

function mapColor(percent) {
  // console.log(percent);
  if (percent < 25) return "#DEDEDE";
  else if (percent < 50) return "#d1d35e";
  else if (percent < 75) return "#519ec8";
  else return "#72b591";
}
</script>

<style scoped>
.map-container {
  display: flex;
}
.map {
  height: 800px;
  width: 50%;
  display: inline;
}
.map-card {
  display: inline;
}
</style>
<template>
  <div>
    <div v-bind:id="mapid" style="height:800px;"></div>
  </div>
</template>

<script>
import L from "leaflet";
import { GestureHandling } from "leaflet-gesture-handling";
import "leaflet/dist/leaflet.css";

//Solution to some BS probem with leaflet not loading it's own damn marker icon properly
//Found as the last post in this issue thread:
//https://github.com/Leaflet/Leaflet/issues/4968
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
import "leaflet-gesture-handling/dist/leaflet-gesture-handling.css";
import pop1940 from "../geojson/Pop1940.json";
import pop1960 from "../geojson/Pop1960.json";
import pop1980 from "../geojson/Pop1980.json";
import keneyPark from "../geojson/KeneyPark.json";

export default {
  name: "Map",
  props: {
    coordinates: {
      type: Array,
      default: () => [41.78, -72.67]
    },
    zoomLevel: {
      type: Number,
      default: 14
    },
    id: {
      type: String,
      default: "mapid"
    },
    jsonFile: {
      type: String,
      default: "pop1940"
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
              coords: this.coordinates
            }
          ]
        }
      ]
    };
  },
  mounted() {
    this.jsonData = this.jsonSources[this.jsonFileNames.indexOf(this.jsonFile)];
    this.initMap();
    this.initLayers();
  },
  methods: {
    initMap: function() {
      L.Map.addInitHook("addHandler", "gestureHandling", GestureHandling);
      this.map = L.map(this.mapid, {
        center: this.coordinates,
        zoom: this.zoomLevel,
        gestureHandling: true
      });

      // this.map = L.map("mapid").setView([41.78, -72.67], 14);
      this.tileLayer = L.tileLayer(
        "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png",
        {
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
        }
      );
      this.tileLayer.addTo(this.map);
    },
    initLayers: function() {
      this.layers.forEach(layer => {
        const markerFeatures = layer.features.filter(
          feature => feature.type === "marker"
        );
        // const polygonFeatures = layer.features.filter(feature => feature.type === 'polygon');

        markerFeatures.forEach(feature => {
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
          style: function(feature) {
            return { color: mapColor(feature.properties.PercentAA) };
          }
        })
          .bindPopup(function(layer) {
            return layer.feature.properties.description;
          })
          .addTo(this.map);
      }
      L.geoJSON(this.keneyPoly, {
        style: function() {
          return { color: 'green' };
        }
      })
        .bindPopup(function(layer) {
          return layer.feature.properties.description;
        })
        .addTo(this.map);
    }
  }
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
#mapid {
  height: 800px;
}
</style>
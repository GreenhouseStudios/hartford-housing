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
//

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
    id:{
      type: String,
      default: "mapid"
    }
  },
  data() {
    return {
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
    }
  }
};
</script>

<style scoped>
#mapid {
  height: 800px;
}
</style>
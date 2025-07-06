<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker } from '@vue-leaflet/vue-leaflet'
import { ref } from 'vue'

const tableflip = [48.3656812, 10.8815513] as [number, number]
const zoom = ref(20)
const center = ref(tableflip)
</script>
<template>
  <div style="height: 300px; width: 400px">
    <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
      ></l-tile-layer>
      <l-marker :lat-lng="tableflip"></l-marker>
    </l-map>
  </div>
</template>

<script setup lang="ts">
import { LMap, LMarker, LTileLayer } from '@vue-leaflet/vue-leaflet'
import 'leaflet/dist/leaflet.css'
import { ref } from 'vue'

const tableflip = [48.3412093, 10.8685846] as [number, number]
const zoom = ref(20)
const center = ref(tableflip)
</script>
<template>
  <div style="height: 300px; width: 400px">
    <l-map
      ref="map"
      v-model:zoom="zoom"
      v-model:center="center"
      :use-global-leaflet="false"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="Stadia Maps Basemap"
      />
      <l-marker :lat-lng="tableflip" />
    </l-map>
  </div>
</template>

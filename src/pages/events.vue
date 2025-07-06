<script setup lang="ts">
const calendarUrl =
  'https://calendar.google.com/calendar/embed?src=sarah-diana.sporck%40gmx.de&ctz=Europe%2FBrussels'
</script>
<template>
  <div>
    <h1>Kalender</h1>
    <iframe
      :src="calendarUrl"
      style="border: 0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>

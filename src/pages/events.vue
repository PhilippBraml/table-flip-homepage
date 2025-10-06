<script setup lang="ts">
const calendarUrl =
  'https://calendar.google.com/calendar/embed?src=tableflip.calendar%40gmail.com&ctz=Europe%2FBerlin'
</script>
<template>
  <div>
    <h1 style="text-align: center">Kalender</h1>
    <iframe
      :src="calendarUrl"
      style="border: 0"
      width="100%"
      height="600"
      frameborder="0"
      scrolling="no"
    />
  </div>
</template>

<!-- <script setup lang="ts">
import InstagramFeed from 'vue3-instagram-feed'
</script> -->

<!-- <template>
  <InstagramFeed
    :count="6"
    accessToken="IGAAPOZCYFZCuctBZAFJRY2ktSWdXTHQxS0N6bThqQnd5SXhQbVpzcXJnVU9qWFRwREVjdkR2VkJucnZAmQjI3eEZAtOHJtNlpqX0ZAudTZAWVTBsRXk2NGw0M0h0MWsxYnFIX3Q3T3RheENSOEFRWE1FTmR6U0VUSGZADYk9yd2RaWmVhNAZDZD"
    :pagination="true"
    :caption="true"
  />
</template> -->

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
    "
  >
    <h1 style="margin-bottom: 1rem">{{ $t('instagram.title') }}</h1>
    <iframe
      src="https://www.instagram.com/tablefliptcg/embed"
      width="400"
      height="440"
      style="border: none; overflow: hidden"
      scrolling="no"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

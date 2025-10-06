<template>
  <div class="announcements-page">
    <h1>Announcements</h1>

    <ul>
      <n-el
        v-for="(announcement, index) in announcements"
        :key="index"
        tag="li"
      >
        <h2>{{ announcement.title }}</h2>
        <p>{{ announcement.content }}</p>
        <small>{{ announcement.date }}</small>
      </n-el>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { NEl } from 'naive-ui'
import { ref } from 'vue'
import Announcements from '@/assets/announcements.json' with { type: 'json' }

const announcements = ref<typeof Announcements.general>(Announcements.general)
</script>

<style scoped>
.announcements-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
  width: 100%;
  box-sizing: border-box;
}
h1 {
  margin-bottom: 1.5rem;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background-color: var(--card-color);
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}
h2 {
  margin: 0 0 0.5rem 0;
}
p {
  margin: 0 0 0.5rem 0;
}
small {
  color: #888;
}

@media (max-width: 600px) {
  .announcements-page {
    padding: 0.5rem;
    margin: 1rem auto;
    max-width: 100%;
  }
  li {
    padding: 0.75rem;
    font-size: 1rem;
  }
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.1rem;
  }
  p,
  small {
    font-size: 0.95rem;
  }
}
</style>

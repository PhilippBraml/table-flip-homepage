<template>
  <div class="instagram-page">
    <h1>Instagram</h1>
    <ul>
      <li v-for="Post in Post" :key="Instagram.id">
        <h2>{{ Instagram.title }}</h2>
        <p>{{ Instagram.content }}</p>
        <small>{{ Instagram.date }}</small>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Instagram {
  id: number
  title: string
  content: string
  date: string
}

const posts = ref<Instagram[]>([
  {
    id: 1,
    title: 'Welcome to Table Flip!',
    content: 'We are excited to launch our new homepage. Stay tuned for updates!',
    date: '2025-09-01',
  },
  {
    id: 2,
    title: 'Upcoming Event',
    content: 'Don’t miss our next board game night on September 15th!',
    date: '2025-09-10',
  },
])
</script>

<style scoped>
.instagram-page {
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
  background: #f9f9f9;
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
  .instagram-page {
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

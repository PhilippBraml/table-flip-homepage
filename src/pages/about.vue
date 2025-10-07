<script setup lang="ts">
import de from '@/assets/translations/de.json'
import { NThing } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n<{ messageSchema: typeof de }>()
</script>

<template>
  <div class="about-page">
    <h1 style="align-self: center">
      {{ t('about.title') }}
    </h1>
  </div>
  <div style="align-self: center">
    <n-thing
      style="align-self: center; max-width: 400px; white-space: preserve; text-align: center"
    >
      {{ $t('about.default') }}
    </n-thing>
  </div>
  <div class="about-page">
    <h1 style="align-self: center">
      {{ t('about.team') }}
    </h1>
  </div>
</template>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
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
  .about-page {
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

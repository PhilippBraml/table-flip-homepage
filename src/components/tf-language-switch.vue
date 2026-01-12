<template>
  <n-button-group class="tf-language-switch-buttons">
    <n-button @click="setLanguage('de')">🇩🇪</n-button>
    <n-button @click="setLanguage('en')">🇬🇧</n-button>
  </n-button-group>
</template>
<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { NButtonGroup, NButton } from 'naive-ui'
const { locale } = useI18n()

const localStorageLanguage = useLocalStorage('language', locale)

function setLanguage(language: 'en' | 'de') {
  localStorageLanguage.value = language
  locale.value = language
}
</script>
<style scoped>
.tf-language-switch-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

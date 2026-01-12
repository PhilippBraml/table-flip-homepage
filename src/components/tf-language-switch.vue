<template>
  <n-button-group class="tf-language-switch-buttons">
    <n-button @click="setLanguage('de')">DE</n-button>
    <n-button @click="setLanguage('en')">EN</n-button>
  </n-button-group>
</template>
<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core'
import { NButton, NButtonGroup } from 'naive-ui'
import { useI18n } from 'vue-i18n'
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

<script setup lang="ts">
import type de from '@/assets/translations/de.json'
import TfMap from '@/components/tf-map.vue'
import { NGi, NGrid, NThing, useThemeVars } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n<{ message: typeof de }>()
const themeVars = useThemeVars()
const openingHours = [
  { day: t('store.weekdays.monday'), time: '12:00 - 20:00' },
  { day: t('store.weekdays.tuesday'), time: '12:00 - 20:00' },
  { day: t('store.weekdays.wednesday'), time: '12:00 - 20:00' },
  { day: t('store.weekdays.thursday'), time: '12:00 - 20:00' },
  { day: t('store.weekdays.friday'), time: '12:00 - 20:00' },
  { day: t('store.weekdays.saturday'), time: '10:00 - 18:00' },
  { day: t('store.weekdays.sunday'), time: t('store.closed') },
]
</script>
<template>
  <div style="align-self: center">
    <n-thing>
      <template #header>
        <h3>{{ t('store.openingHours') }}</h3>
      </template>
      <template #default>
        <n-grid
          cols="2"
          style="width: fit-content; column-gap: 12px"
        >
          <template
            v-for="openingHour in openingHours"
            :key="openingHour.day"
          >
            <n-gi>{{ openingHour.day }}</n-gi>
            <n-gi>{{ openingHour.time }}</n-gi>
          </template>
        </n-grid>
      </template>
    </n-thing>
    <n-thing>
      <template #header>
        <h3>{{ t('store.address') }}</h3>
      </template>
      <template #default>
        <n-grid
          cols="1"
          style="width: fit-content"
        >
          <n-gi>Route planen:</n-gi>
        </n-grid>
        <a
          href="https://maps.app.goo.gl/Q1UUdhA2b4hNxwe76"
          target="_blank"
          rel="noopener noreferrer"
        >
          <n-grid
            cols="1"
            style="width: fit-content"
          >
            <n-gi>Bürgermeister-Aurnhammer-Straße 5</n-gi>
            <n-gi>86199 Augsburg</n-gi>
          </n-grid>
        </a>
        <n-grid
          cols="1"
          style="width: fit-content"
        >
          <n-gi><tf-map /></n-gi>
        </n-grid>
      </template>
    </n-thing>
  </div>
  <div style="align-self: center">
    <n-thing>
      <template #header>
        <h3 style="white-space: preserve; text-align: center">
          {{ t('store.onlineStore') }}
        </h3>
      </template>
      <template #default>
        <n-grid
          cols="1"
          style="justify-items: center"
        >
          <n-gi style="justify-self: center">
            <a
              href="https://www.cardmarket.com/de/YuGiOh/Users/Table-flip"
              target="_blank"
            >
              <img
                src="https://images.ctfassets.net/pjhgqryi6myh/70VWmBtTX4YsvmjHjpoLAB/8e0ae8f88defbc623ca86139e387be27/CMLogoWhite1_-_VerticalTagline.png"
                alt="www.cardmarket.com"
                style="height: 120px"
              />
            </a>
          </n-gi>
        </n-grid>
      </template>
    </n-thing>
  </div>
</template>
<style scoped>
a {
  color: v-bind('themeVars.primaryColor');
}
</style>

<script setup lang="ts">
import en from '@/assets/translations/de.json'
import TfMap from '@/components/tf-map.vue'
import { NGi, NGrid, NThing, useThemeVars } from 'naive-ui'
import { useI18n } from 'vue-i18n'

const { t } = useI18n<{ messageSchema: typeof en }>()
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
          href="https://maps.app.goo.gl/E4YfLshch2uRfUmj9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <n-grid
            cols="1"
            style="width: fit-content"
          >
            <n-gi>Rosenaustraße 51</n-gi>
            <n-gi>86150 Augsburg</n-gi>
          </n-grid>
        </a>
        <n-grid
          cols="1"
          style="width: fit-content"
          ><n-gi><tf-map /></n-gi
        ></n-grid>
      </template>
    </n-thing>
  </div>
</template>
<style scoped>
a {
  color: v-bind('themeVars.primaryColor');
}
</style>

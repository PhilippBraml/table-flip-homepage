<script setup lang="ts">
import { NThing, NGrid, NGi } from 'naive-ui'
import TfMap from '@/components/tf-map.vue'
import { useI18n } from 'vue-i18n'
import en from '@/assets/translations/de.json'

const { t } = useI18n<{ messageSchema: typeof en }>();

const openingHours = [
  { day: t('about.weekdays.monday'), time: '12:00 - 20:00' },
  { day: t('about.weekdays.tuesday'), time: '12:00 - 20:00' },
  { day: t('about.weekdays.wednesday'), time: '12:00 - 20:00' },
  { day: t('about.weekdays.thursday'), time: '12:00 - 20:00' },
  { day: t('about.weekdays.friday'), time: '12:00 - 20:00' },
  { day: t('about.weekdays.saturday'), time: '10:00 - 18:00' },
  { day: t('about.weekdays.sunday'), time: t('about.closed') },
]
</script>
<template>
  <n-thing>
    <template #header>
      <h3>{{ t('about.openingHours') }}</h3>
    </template>
    <template #default>
      <n-grid cols="2" style="width: fit-content">
        <template v-for="openingHour in openingHours" :key="openingHour.day">
          <n-gi>{{ openingHour.day }}</n-gi>
          <n-gi>{{ openingHour.time }}</n-gi>
        </template>
      </n-grid>
    </template>
  </n-thing>
  <n-thing>
    <template #header>
      <h3>{{ t('about.address') }}</h3>
    </template>
    <template #default>
      <n-grid cols="1" style="width: fit-content">
        <n-gi>Rosenaustraße 51</n-gi>
        <n-gi>86150 Augsburg</n-gi>
        <n-gi>
          <tf-map />
        </n-gi>
      </n-grid>
    </template>
  </n-thing>
</template>

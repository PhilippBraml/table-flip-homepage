<script setup lang="ts">
import { type Component, h, ref } from 'vue'
import type { MenuOption } from 'naive-ui'
import { NIcon, NMenu, NSplit } from 'naive-ui'
import {
  HomeOutline as HomeIcon,
  InformationCircleOutline as InfoIcon,
  CalendarOutline as CalendarIcon,
  AlarmOutline as AnnouncementIcon,
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const selected = ref(router.currentRoute.value.name)

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: '/',
          },
        },
        { default: () => t('navigation.home') },
      ),
    key: '/',
    icon: renderIcon(HomeIcon),
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
      },
    },
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: '/announcements',
          },
        },
        { default: () => t('navigation.announcements') },
      ),
    key: '/announcements',
    icon: renderIcon(AnnouncementIcon),
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
      },
    },
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: '/events',
          },
        },
        { default: () => t('navigation.events') },
      ),
    key: '/events',
    icon: renderIcon(CalendarIcon),
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
      },
    },
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: '/about',
          },
        },
        { default: () => t('navigation.about') },
      ),
    key: '/about',
    icon: renderIcon(InfoIcon),
  },
]
</script>
<template>
  <div>
    <n-menu v-model:value="selected" :options="menuOptions" mode="horizontal" responsive />
  </div>
</template>

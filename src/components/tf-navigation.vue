<script setup lang="ts">
import {
  AlarmOutline as AnnouncementIcon,
  CalendarOutline as CalendarIcon,
  HomeOutline as HomeIcon,
  InformationCircleOutline as InfoIcon,
  MenuOutline as MenuIcon,
} from '@vicons/ionicons5'
import type { MenuOption } from 'naive-ui'
import { NCollapse, NCollapseItem, NIcon, NMenu } from 'naive-ui'
import { type Component, h, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRouter } from 'vue-router'

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
  <n-collapse style="max-width: 320px; width: 100%; margin: 0 auto; align-content: center">
    <n-collapse-item>
      <template #arrow><div /></template>

      <template #header>
        <n-icon style="align-self: center; width: 100%">
          <MenuIcon />
        </n-icon>
      </template>

      <n-collapse>
        <n-menu v-model:value="selected" :options="menuOptions" mode="vertical" responsive />
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
</template>

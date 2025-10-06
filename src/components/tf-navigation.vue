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
import { type Component, h, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute, useRouter } from 'vue-router'

const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const selected = ref(route.name)
const expanded = ref<string[]>([])

router.afterEach((to, from) => {
  if (to.name !== from.name) expanded.value = []
})

watch(router.currentRoute, () => (selected.value = route.name))

function renderIcon(icon: Component) {
  return () =>
    h(
      'span',
      {
        style: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        },
      },
      [h(NIcon, null, { default: () => h(icon) })],
    )
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
  <n-collapse
    v-model:expanded-names="expanded"
    style="max-width: 320px; width: 100%; align-content: center"
  >
    <n-collapse-item>
      <template #arrow>
        <div style="width: 0" />
      </template>

      <template #header>
        <n-icon
          style="align-self: center; width: 100%"
          :size="30"
        >
          <MenuIcon />
        </n-icon>
      </template>

      <n-collapse>
        <n-menu
          v-model:value="selected"
          :options="menuOptions"
          mode="vertical"
          responsive
        />
      </n-collapse>
    </n-collapse-item>
  </n-collapse>
</template>

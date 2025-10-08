<script setup lang="ts">
import type de from '@/assets/translations/de.json'
import {
  AlarmOutline as AnnouncementIcon,
  CalendarOutline as CalendarIcon,
  HomeOutline as HomeIcon,
  InformationCircleOutline as InfoIcon,
  StorefrontOutline as MarketIcon,
  MenuOutline as MenuIcon,
  NewspaperOutline as NewspaperIcon,
} from '@vicons/ionicons5'
import { useTitle } from '@vueuse/core'
import type { MenuOption } from 'naive-ui'
import { NCollapse, NCollapseTransition, NIcon, NMenu } from 'naive-ui'
import { h, ref, watch, type Component } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterLink, useRoute, useRouter, type RouteRecordName } from 'vue-router'

const { t } = useI18n<{ message: typeof de }>()
const router = useRouter()
const route = useRoute()
const selected = ref(route.name)
const expanded = ref<boolean>(false)
const title = useTitle()

const navItems: { route: RouteRecordName; text: string; icon: Component }[] = [
  { route: '/', text: t('navigation.home'), icon: HomeIcon },
  { route: '/announcment', text: t('navigation.announcements'), icon: AnnouncementIcon },
  { route: '/calendar', text: t('navigation.events'), icon: CalendarIcon },
  { route: '/store', text: t('navigation.store'), icon: MarketIcon },
  { route: '/about', text: t('navigation.about'), icon: InfoIcon },
  { route: '/imprint', text: t('navigation.imprint'), icon: NewspaperIcon },
]

router.afterEach((to, from) => {
  if (to.name !== from.name) expanded.value = false
})

watch(
  router.currentRoute,
  () => {
    selected.value = route.name
    const navItem = navItems.find((navItem) => navItem.route === selected.value)
    title.value = navItem?.text ? `${navItem.text} - ${t('defaultTabTitle')}` : t('defaultTabTitle')
  },
  { immediate: true },
)

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
const menuOptions: MenuOption[] = navItems.flatMap((item, index) => [
  ...(index !== 0
    ? [
        {
          key: 'divider-1',
          type: 'divider',
          props: {
            style: {
              marginLeft: '32px',
            },
          },
        },
      ]
    : []),
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: item.route,
          },
        },
        { default: () => item.text },
      ),
    key: item.route,
    icon: renderIcon(item.icon),
  },
])
</script>

<template>
  <div @mouseleave="expanded = false">
    <div
      @mouseover="expanded = true"
      @touchend="expanded = !expanded"
    >
      <n-icon
        style="align-self: center; width: 100%"
        :size="30"
      >
        <MenuIcon />
      </n-icon>
    </div>

    <n-collapse-transition :show="expanded">
      <n-collapse>
        <n-menu
          v-model:value="selected"
          :options="menuOptions"
          mode="vertical"
          responsive
        />
      </n-collapse>
    </n-collapse-transition>
  </div>
</template>

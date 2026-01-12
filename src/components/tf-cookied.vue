<template>
  <n-card
    v-if="accepted === 'UNKOWN'"
    style="max-width: 700px; align-self: center"
  >
    {{ $t('cookies.prompt') }}
    <template #action>
      <n-button
        style="margin-inline-end: 5px"
        @click="accepted = 'ACCEPTED'"
      >
        {{ $t('cookies.accept') }}
      </n-button>
      <n-button @click="accepted = 'DECLINED'">
        {{ $t('cookies.decline') }}
      </n-button>
    </template>
  </n-card>
  <slot v-else-if="accepted === 'ACCEPTED'" />
  <n-card
    v-else
    style="max-width: 700px; align-self: center"
  >
    {{ $t('cookies.declineText') }}
    <template #action>
      <n-button @click="accepted = 'UNKOWN'">
        {{ $t('cookies.changeSettings') }}
      </n-button>
    </template>
  </n-card>
</template>
<script lang="ts" setup>
import { useLocalStorage } from '@vueuse/core'
import { NButton, NCard } from 'naive-ui'

const props = defineProps<{
  localstorageKey: string
}>()
const accepted = useLocalStorage<'ACCEPTED' | 'DECLINED' | 'UNKOWN'>(
  props.localstorageKey,
  'UNKOWN',
)
</script>

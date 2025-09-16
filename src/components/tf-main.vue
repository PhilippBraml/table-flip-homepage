<script setup lang="ts">
import { NList, NListItem, NThing } from 'naive-ui'
</script>
<template>
  <n-thing>{{ $t('home.introduction') }}</n-thing>
  <n-list>
    <n-list-item>One Piece</n-list-item>
    <n-list-item>Lorcana</n-list-item>
    <n-list-item>Magic - The Gathering</n-list-item>
    <n-list-item>Yu-Gi-Oh</n-list-item>
    <n-list-item>DnD</n-list-item>
  </n-list>
</template>

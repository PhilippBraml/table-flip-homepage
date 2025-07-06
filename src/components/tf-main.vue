<script setup lang="ts">
import { NList, NListItem } from 'naive-ui'
</script>
<template>
  <n-thing>{{ $t('home.introduction') }}</n-thing>
  <n-list>
    <n-list-item>One Piece</n-list-item>
    <n-list-item>Lorcana</n-list-item>
    <n-list-item>Magic</n-list-item>
    <n-list-item>YuGiOh</n-list-item>
    <n-list-item>DnD</n-list-item>
  </n-list>
</template>

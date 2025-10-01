<script setup lang="ts">
import { NList, NListItem, NThing } from 'naive-ui'
</script>

<template>
  <n-thing>{{ $t('home.introduction') }}</n-thing>
  <n-list>
    <n-list-item>
      <img
        src="@/assets/onepiece_tcg.webp"
        alt="One Piece"
        style="width: 100px; height: auto; display: block; margin: 0 auto"
      />
    </n-list-item>
    <n-list-item>
      <img
        src="@/assets/lorcana_tcg.webp"
        alt="Lorcana"
        style="width: 100px; height: auto; display: block; margin: 0 auto"
      />
    </n-list-item>
    <n-list-item>
      <img
        src="@/assets/magic_tcg.png"
        alt="Magic The Gathering"
        style="width: 100px; height: auto; display: block; margin: 0 auto"
      />
    </n-list-item>
    <n-list-item>
      <img
        src="@/assets/yugioh_tcg.png"
        alt="Yu-Gi-Oh!"
        style="width: 100px; height: auto; display: block; margin: 0 auto"
      />
    </n-list-item>
    <n-list-item>
      <img
        src="@/assets/digimon_tcg.png"
        alt="Digimon"
        style="width: 100px; height: auto; display: block; margin: 0 auto"
      />
    </n-list-item>
    <n-list-item>
      <img
        src="@/assets/dnd_transparent.png"
        alt="Dungeons and Dragons"
        style="width: 100px; height: auto; display: block; margin: 0 auto"
      />
    </n-list-item>
  </n-list>
</template>

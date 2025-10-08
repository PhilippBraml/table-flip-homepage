<script setup lang="ts">
import { NList, NListItem, NThing, NImage } from 'naive-ui'
function getImageSrc(imageName: string) {
  return new URL(`../assets/tcg/${imageName}`, import.meta.url).href
}

const items: { tcg?: string; src: string; alt: string }[] = [
  { tcg: 'onepiece', src: 'onepiece_tcg.webp', alt: 'One Piece' },
  {
    tcg: 'pokemon',
    src: 'Pokémon_Trading_Card_Game_logo.svg',
    alt: 'Pokemon Trading Card Game',
  },
  { tcg: 'gundam', src: 'gundam.webp', alt: 'Gundam' },
  { tcg: 'lorcana', src: 'lorcana_tcg.webp', alt: 'Lorcana' },
  { tcg: 'riftbound', src: 'riftbound_logo.png', alt: 'Riftbound' },
  { tcg: 'mtg', src: 'Magicthegathering_logo.svg', alt: 'Magic The Gathering' },
  { src: 'Flesh_and_Blood_Logo.webp', alt: 'Flesh and Blood' },
  { tcg: 'ygo', src: 'yugioh_tcg.png', alt: 'Yu-Gi-Oh!' },
  { tcg: 'digimon', src: 'digimon_tcg.png', alt: 'Digimon' },
  { tcg: 'starwars', src: 'Star_Wars_Logo.webp', alt: 'StarWars Unlimited' },
  { src: 'DungeonsAndDragons_Logo.svg', alt: 'Dungeons and Dragons' },
]
</script>

<template>
  <n-thing
    style="
      align-self: center;
      max-width: 400px;
      white-space: preserve;
      text-align: center;
      padding: 10px 0;
    "
  >
    {{ $t('home.introduction') }}
  </n-thing>
  <n-list
    style="max-width: 500px; width: 500px; align-self: center"
    hoverable
  >
    <n-list-item
      v-for="(item, index) in items"
      :key="index"
      style="justify-content: center; width: 100%; padding: 0"
    >
      <RouterLink
        :to="{ name: '/events', query: { tcg: item.tcg } }"
        style="width: 100%; height: 100%; display: flex; justify-content: center"
      >
        <NImage
          :src="getImageSrc(item.src)"
          :alt="item.alt"
          width="100px"
          style="padding: 10px 0"
        />
      </RouterLink>
    </n-list-item>
  </n-list>
</template>

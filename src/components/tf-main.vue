<script setup lang="ts">
import { NList, NListItem, NThing } from 'naive-ui'
</script>

<template>
  <n-thing style="align-self: center; max-width: 400px; white-space: preserve; text-align: center">
    {{ $t('home.introduction') }}
  </n-thing>
  <n-list>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'onepiece' } }">
        <img
          src="@/assets/onepiece_tcg.webp"
          alt="One Piece"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'pokemon' } }">
        <img
          src="@/assets/Pokémon_Trading_Card_Game_logo.svg"
          alt="Pokemon Trading Card Game"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'gundam' } }">
        <img
          src="@/assets/gundam.webp"
          alt="Gundam"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'lorcana' } }">
        <img
          src="@/assets/lorcana_tcg.webp"
          alt="Lorcana"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'riftbound' } }">
        <img
          src="@/assets/riftbound_logo.png"
          alt="Riftbound"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'mtg' } }">
        <img
          src="@/assets/Magicthegathering_logo.svg"
          alt="Magic The Gathering"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events' }">
        <img
          src="@/assets/Flesh_and_Blood_logo.webp"
          alt="Flesh and Blood"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'ygo' } }">
        <img
          src="@/assets/yugioh_tcg.png"
          alt="Yu-Gi-Oh!"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'digimon' } }">
        <img
          src="@/assets/digimon_tcg.png"
          alt="Digimon"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events', query: { tcg: 'starwars' } }">
        <img
          src="@/assets/Star_Wars_Logo.webp"
          alt="Digimon"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
    <n-list-item>
      <RouterLink :to="{ name: '/events' }">
        <img
          src="@/assets/DungeonsAndDragons_Logo.svg"
          alt="Dungeons and Dragons"
          style="width: 100px; height: auto; display: block; margin: 0 auto"
        />
      </RouterLink>
    </n-list-item>
  </n-list>
</template>

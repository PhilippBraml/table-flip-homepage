<script setup lang="ts">
import { NConfigProvider, NLayout, NLayoutContent, NLayoutHeader } from 'naive-ui'
import { RouterView } from 'vue-router'
import TfNavigation from './components/tf-navigation.vue'
import { darkTheme } from './theme'
</script>

<template>
  <n-config-provider :theme-overrides="darkTheme">
    <n-layout class="tf-container">
      <n-layout-header class="tf-max-width" style="text-align: center">
        <header>
          <img alt="Vue logo" src="@/assets/tablefliplogo.jpg" width="125" height="125" />
          <tf-navigation />
        </header>
      </n-layout-header>
      <n-layout-content>
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>

<style scoped lang="css">
.tf-container {
  height: 100vh;
  width: 100vw;

  padding: 2rem 0;

  justify-content: center;
  align-content: center;
  display: flex;
}
</style>

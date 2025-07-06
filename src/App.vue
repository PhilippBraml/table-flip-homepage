<script setup lang="ts">
import { RouterView } from 'vue-router'
import { darkTheme, lightTheme } from './theme'
import { NLayout, NLayoutHeader, NLayoutContent, NConfigProvider } from 'naive-ui'
import TfNavigation from './components/tf-navigation.vue'
</script>

<template>
  <n-config-provider :theme-overrides="darkTheme">
    <n-layout class="tf-container">
      <n-layout-header class="tf-max-width">
        <header>
          <img alt="Vue logo" src="@/assets/tablefliplogo.jpg" width="125" height="125" />
          <tf-navigation />
        </header>
      </n-layout-header>
      <n-layout-content style="width: 800px">
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

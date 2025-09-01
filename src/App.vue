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
<style scoped lang="css"></style>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  font-family: 'Lato', Arial, sans-serif;
  background: #fff;
  color: #111;
}

#app {
  width: 100%;
  min-height: 100vh;
}

header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2% 4%;
  background: #111;
  color: #fff;
}

img {
  width: 12%;
  height: auto;
  max-width: 125px;
}

.tf-container {
  min-height: 100vh;
  width: 100%;
  padding: 2% 0;
  justify-content: center;
  align-content: center;
  display: flex;
}

.tf-max-width {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

n-layout-content {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
}

@media (max-width: 600px) {
  header {
    flex-direction: column;
    padding: 4% 2%;
    text-align: center;
  }
  img {
    width: 30%;
    max-width: 90px;
  }
  .tf-max-width,
  n-layout-content {
    max-width: 100%;
    padding: 0 2%;
  }
}
</style>

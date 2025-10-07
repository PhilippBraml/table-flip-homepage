<script setup lang="ts">
import { NConfigProvider, NLayout, NLayoutContent, NLayoutHeader } from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'
import TfNavigation from './components/tf-navigation.vue'
import { darkTheme } from './theme'
</script>

<template>
  <n-config-provider
    :theme="darkTheme"
    style="height: 100%"
  >
    <n-layout style="height: 100%">
      <n-layout-header class="tf-align-header-center">
        <header class="tf-max-content-width">
          <RouterLink :to="{ name: '/' }">
            <img
              alt="Table Flip Logo"
              src="@/assets/tablefliplogo.png"
              width="200"
              height="200"
            />
          </RouterLink>
          <tf-navigation />
        </header>
      </n-layout-header>
      <n-layout-content class="tf-use-full-width">
        <div class="tf-max-content-width">
          <RouterView />
        </div>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  font-family: 'Lato', Arial, sans-serif;
}

#app {
  width: 100%;
  min-height: 100vh;
}
</style>
<style scoped lang="css">
.tf-align-header-center {
  display: flex;
  width: 100%;
  justify-content: center;
}

.tf-use-full-width {
  width: 100%;
  justify-content: center;
}

.tf-max-content-width {
  padding: 0 10px;
  align-self: center;
  display: flex;
  flex-direction: column;
}

header {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

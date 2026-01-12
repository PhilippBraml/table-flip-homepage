<template>
  <n-result
    status="404"
    title="Not Found"
  >
    <template #footer>
      <RouterLink :to="{ name: '/'}">Go to home</RouterLink>
    </template>
  </n-result>
</template>
<script lang="ts" setup>
import { NResult } from 'naive-ui';
import { RouterLink } from 'vue-router';
</script>
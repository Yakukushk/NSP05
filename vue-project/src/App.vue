<script setup lang="ts">
import { RouterView } from 'vue-router'



</script>

<template>
  <RouterView :key="$route.path" v-slot="{ Component}">
    <transition name="scale" mode="out-in" appear>
      <component :is="Component"/>
    </transition>
  </RouterView>
</template>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
html, body {
  max-width: 100%;
  overflow-x: hidden;
}
</style>

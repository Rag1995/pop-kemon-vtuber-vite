<script setup lang="ts">
import { useAppStore } from '@/store'
import { storeToRefs } from 'pinia'
import AppNavbar from '@/components/AppNavbar'
import BackgroundCloud from '@/components/BackgroundCloud.vue'
import BackgroundFirefly from '@/components/BackgroundFirefly.vue'

const store = useAppStore()
const { isDark } = storeToRefs(store)
</script>

<template>
  <AppNavbar />
  <main class="position-relative">
    <BackgroundCloud />
    <BackgroundFirefly v-if="isDark" />
    <div class="overflow-auto h-100">
      <RouterView />
    </div>
  </main>
</template>

<style lang="postcss" scope>
main {
  user-select: none;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
</style>

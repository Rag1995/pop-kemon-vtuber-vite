<script setup lang="ts">
import { useAppStore } from '@/store'
import { storeToRefs } from 'pinia'
import AppNavbar from '@/components/AppNavbar'
import BackgroundCloud from '@/components/BackgroundCloud.vue'
import BackgroundFirefly from '@/components/BackgroundFirefly.vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'

const store = useAppStore()
const { isDark } = storeToRefs(store)

const { t } = useI18n()
useHead({
  title: computed(() => t('title')),
})
</script>

<template>
  <AppNavbar />
  <main class="position-relative overflow-hidden">
    <BackgroundCloud />
    <BackgroundFirefly v-if="isDark" />
    <div class="overflow-hidden h-100">
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

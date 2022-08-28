<script setup lang="ts">
import { useAppStore, useVtubersStore } from '@/store'
import { storeToRefs } from 'pinia'
import IconTwitter from '~icons/brandico/twitter-bird'
import IconYoutube from '~icons/ion/logo-youtube'

const store = useVtubersStore()
const { vtubers } = storeToRefs(store)
const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)
</script>

<template>
  <div class="container pt-5 fs-5">
    <div class="card fs-5" :class="{ 'bg-dark border-secondary': isDark }">
      <div class="card-body">
        <h2 class="mb-4">
          {{ $t('about') }}
        </h2>
        <div class="text-wrap text-break mb-4" v-html="$t('description')">
        </div>

        <div v-for="{ id, name, youtube, twitter } in vtubers" :key="id" class="d-flex">
          <div style="flex-basis: 8rem;">
            {{ $t(name) }}
          </div>
          <a class="text-red me-3" :href="youtube" target="_blank">
            <IconYoutube />Youtube
          </a>
          <a class="text-sky" :href="twitter" target="_blank">
            <IconTwitter />Twitter
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scope>
.container {
line-height: 2;
}
.text-sky {
  color: #1DA1F2;
}
.text-red {
  color: #FF0000;
}
</style>

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
  <div class="container pt-2 pb-5 lh-lg d-flex flex-column justify-content-center align-items-stretch h-100">
    <div class="card fs-5 overflow-auto" :class="{ 'bg-dark border-secondary': isDark }">
      <div class="card-body">
        <h2 class="mb-4">
          {{ $t('about') }}
        </h2>
        <div class="mb-4" style="white-space: pre-wrap;">
          {{ $t('description') }}
        </div>

        <div v-for="{ id, name, youtube, twitter } in vtubers" :key="id" class="d-flex">
          <div style="flex-basis: 8rem;">
            {{ $t(name) }}
          </div>
          <a class="text-red me-3" :href="youtube" target="_blank">
            <IconYoutube class="me-1" />Youtube
          </a>
          <a class="text-sky" :href="twitter" target="_blank">
            <IconTwitter class="me-1" />Twitter
          </a>
        </div>

        <h2 class="mt-5 mb-4">
          {{ $t('reference') }}
        </h2>
        <p class="small">
          <a href="https://www.youtube.com/watch?v=FWW38GuIo7M">
            CSS3 Cloud Banner Animation Effects | Pure CSS Animated Clouds
          </a>
        </p>
        <p class="small">
          <a href="https://codepen.io/mikegolus/pen/Jegvym">
            CSS Fireflies - CodePen
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scope>
.text-sky {
  color: #1DA1F2;
}
.text-red {
  color: #FF0000;
}
</style>

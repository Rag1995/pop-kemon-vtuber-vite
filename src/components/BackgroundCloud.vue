<script setup lang="ts">
import { useAppStore } from '@/store'
import { storeToRefs } from 'pinia'

const store = useAppStore()
const { isDark } = storeToRefs(store)

const getAssetsImage = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`
}
</script>

<template>
  <div class="overflow-hidden position-absolute top-0 bottom-0 start-0 end-0">
    <div
      v-for="i in 5" :key="i" draggable="false" class="cloud position-absolute bottom-0 start-0 end-0"
      :class="{ dark: isDark }" :style="{
        'animation-duration': `${i * 4 + 12}s`,
        'animation-delay': `${(i - 1) * 2}s`,
      }"
    >
      <img :src="getAssetsImage(`assets/image/cloud${i}.png`)" class="w-100 h-100" />
    </div>
  </div>
</template>

<style lang="postcss" scope>
.cloud {
  z-index: -1;
  transform: translateX(-100%);
  animation-name: toRight;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  img {
    filter: brightness(1);
  }
  &.dark {
    img {
      filter: brightness(.25);
    }
  }
}

@keyframes toRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}
</style>

<script setup lang="ts">
import { useVtubersStore } from '@/store'
import { storeToRefs } from 'pinia'
import type { MaybeElement } from '@vueuse/core'
import { Howl } from 'howler'
import SoundOffcanvas from '@/components/SoundOffcanvas.vue'

const props = defineProps<{
  id: string
}>()

const target = ref<MaybeElement>()
const { pressed } = useMousePressed({ target: target! })

const store = useVtubersStore()
const { sounds, counter } = storeToRefs(store)
const { increase } = store

interface Queue {
  uid: string
  howl: Howl
}
const queue = reactive<Queue[]>([])
const isPlay = computed(() => queue.length > 0)

const genRandom = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const addQueue = (uid: string, howl: Howl) => {
  queue.push({ uid, howl })
}
const removeQueue = (uid: string) => {
  const idx = queue.findIndex((item) => item.uid === uid)
  if (idx > -1) queue.splice(idx, 1)
}

const getAssetsImage = (path: string) => {
  return `${import.meta.env.BASE_URL}${path}`
}
const playSound = () => {
  const list = sounds.value.filter(({ active }) => active)
  const count = list.length
  if (count === 0) return
  const rng = genRandom(0, count)
  const uid = `${props.id}-${counter.value}`
  const howl = new Howl({
    src: getAssetsImage(`assets/audio/${list[rng].fileName}.m4a`),
    autoplay: false,
    loop: false,
    volume: genRandom(20, 50) / 100,
    onplay: () => {
      addQueue(uid, howl)
    },
    onend: () => {
      removeQueue(uid)
    },
    onstop: () => {
      removeQueue(uid)
    },
  })
  howl.play()
}

watch(pressed, (newValue) => {
  if (!newValue) return
  increase()
  playSound()
})
watch(() => props.id, () => {
  queue.forEach((item) => item.howl.stop())
})
</script>

<template>
  <div ref="target" class="overflow-hidden pop" :class="[id, { pressed, play: isPlay }]">
    <img
      :src="getAssetsImage(`assets/image/${id}_${isPlay ? 'laugh' : 'normal'}.png`)" draggable="false"
      class="w-100 h-100"
    />
  </div>

  <SoundOffcanvas />
</template>

<style lang="postcss" scope>
img {
  object-fit: contain;
  object-position: 50% 100%;
}

.counter {
  -webkit-text-stroke: 3px black;
}

.pop {
  position: absolute;
  top: 20%;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all .2s;
  width: 100vw;
  height: 80%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  filter: opacity(.5);

  &.pressed {
    transform: scale(1.05);
  }

  &.play {
    filter: opacity(1);
  }
}
</style>

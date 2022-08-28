import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import { useStorage } from '@vueuse/core'
import { useRouteParams } from '@vueuse/router'

interface Vtuber {
  id: string
  name: string
  youtube: string
  twitter: string
}
export const useVtubersStore = defineStore('vtubers', () => {
  const vtuberId = useRouteParams<string>('id')
  const vtubers = reactive<Vtuber[]>([
    { id: 'arumao', name: 'vtuber.arumao', youtube: 'https://www.youtube.com/c/ArumaoCh%E6%B0%B4%E8%B1%9A%E9%98%BF%E6%AF%9B', twitter: 'https://twitter.com/capybaraarumao' },
    { id: 'watagumo', name: 'vtuber.watagumo', youtube: 'https://www.youtube.com/c/watagumo_hyena', twitter: 'https://twitter.com/watagumo_hyena' },
  ])

  const soundDict = reactive<Record<string, string[]>>({
    arumao: [
      'arumao_01',
      'arumao_02',
      'arumao_03',
      'arumao_04',
      'arumao_05',
      'arumao_06',
    ],
    watagumo: [
      'watagumo_01',
      'watagumo_02',
      'watagumo_03',
      'watagumo_04',
      'watagumo_05',
      'watagumo_06',
      'watagumo_07',
    ],
  })
  const sounds = computed(() => soundDict[vtuberId.value] ?? [])

  const counterDict = useStorage<Record<string, number>>('counter', {
    arumao: 0,
    watagumo: 0,
  })
  const counter = computed(() => counterDict.value[vtuberId.value])
  const increase = () => {
    counterDict.value[vtuberId.value] += 1
  }

  return { vtubers, sounds, counter, increase }
})

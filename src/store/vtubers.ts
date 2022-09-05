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

  interface SoundDictItem {
    fileName: string
    active: boolean
    label: string
  }
  const soundDict = reactive<Record<string, SoundDictItem[]>>({
    arumao: [
      { fileName: 'arumao_01', active: true, label: '呵呵呵' },
      { fileName: 'arumao_02', active: true, label: '喝哈哈哈' },
      { fileName: 'arumao_03', active: true, label: '哈哈哈' },
      { fileName: 'arumao_04', active: true, label: '喝哈哈' },
      { fileName: 'arumao_05', active: true, label: '呵呵呵' },
      { fileName: 'arumao_06', active: true, label: '哈哈哈呵哼' },
    ],
    watagumo: [
      { fileName: 'watagumo_01', active: true, label: '哈哈哈哈' },
      { fileName: 'watagumo_02', active: true, label: '哼哼哼' },
      { fileName: 'watagumo_03', active: true, label: '哈哈哈' },
      { fileName: 'watagumo_04', active: true, label: '呵呵呵哈哈' },
      { fileName: 'watagumo_05', active: true, label: '哈哼' },
      { fileName: 'watagumo_06', active: true, label: '咪咪' },
      { fileName: 'watagumo_07', active: true, label: '吧吧吧吧吧' },
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

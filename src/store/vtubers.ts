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
    { id: 'totent', name: 'vtuber.totent', youtube: 'https://www.youtube.com/c/totent_kuma', twitter: 'https://twitter.com/totent_kuma' },
    { id: 'kamitani', name: 'vtuber.kamitani', youtube: 'https://www.youtube.com/c/kamitani_ookami', twitter: 'https://twitter.com/kamitani_ookami' },
  ])

  interface SoundDictItem {
    fileName: string
    active: boolean
    label: string
  }
  const soundDict = useStorage<Record<string, SoundDictItem[]>>('soundDict', {
    arumao: [
      { fileName: 'arumao_01', active: true, label: '呵呵呵' },
      { fileName: 'arumao_02', active: true, label: '喝哈哈哈' },
      { fileName: 'arumao_03', active: true, label: '哈哈哈' },
      { fileName: 'arumao_04', active: true, label: '喝哈哈' },
      { fileName: 'arumao_05', active: true, label: '呵呵呵' },
      { fileName: 'arumao_06', active: true, label: '哈哈哈呵哼' },
      { fileName: 'arumao_07', active: true, label: '恩喵' },
      { fileName: 'arumao_08', active: true, label: '啊' },
      { fileName: 'arumao_09', active: true, label: '凹嗚' },
      { fileName: 'arumao_10', active: true, label: '不要' },
      { fileName: 'arumao_11', active: true, label: '凹嗚呼' },
      { fileName: 'arumao_12', active: true, label: '哇哈呵' },
    ],
    watagumo: [
      { fileName: 'watagumo_01', active: true, label: '哈哈哈哈' },
      { fileName: 'watagumo_02', active: true, label: '哼哼哼' },
      { fileName: 'watagumo_03', active: true, label: '哈哈哈' },
      { fileName: 'watagumo_04', active: true, label: '呵呵呵哈哈' },
      { fileName: 'watagumo_05', active: true, label: '哈哼' },
      { fileName: 'watagumo_06', active: true, label: '咪咪' },
      { fileName: 'watagumo_07', active: true, label: '吧吧吧吧吧' },
      { fileName: 'watagumo_08', active: true, label: '嗚嗚' },
      { fileName: 'watagumo_09', active: true, label: '不要～不要～' },
      { fileName: 'watagumo_10', active: true, label: '嗡～' },
      { fileName: 'watagumo_11', active: true, label: '喵喵喵喵' },
      { fileName: 'watagumo_12', active: true, label: '喝哼' },
      { fileName: 'watagumo_13', active: true, label: '雅沒囉' },
      { fileName: 'watagumo_14', active: true, label: '咿呀' },
      { fileName: 'watagumo_15', active: true, label: '鬣狗母語-01' },
      { fileName: 'watagumo_16', active: true, label: '鬣狗母語-02' },
      { fileName: 'watagumo_17', active: true, label: '倉鼠鬣狗(風痕影提供)' },
      { fileName: 'watagumo_18', active: true, label: '阿' },
      { fileName: 'watagumo_19', active: true, label: '哎呦' },
      { fileName: 'watagumo_20', active: true, label: '哺～～～～' },
      { fileName: 'watagumo_21', active: true, label: '媽媽！！' },
      { fileName: 'watagumo_22', active: true, label: '哇～～～～' },
    ],
    totent: [
      { fileName: 'totent_01', active: true, label: '喝 呵呵' },
      { fileName: 'totent_02', active: true, label: '喝 哈哈' },
      { fileName: 'totent_03', active: true, label: '喔～' },
      { fileName: 'totent_04', active: true, label: '咿～' },
      { fileName: 'totent_05', active: true, label: '喝喝喝喝' },
      { fileName: 'totent_06', active: true, label: '喵？' },
      { fileName: 'totent_07', active: true, label: '喔嗚' },
      { fileName: 'totent_08', active: true, label: '巴巴巴拉巴啦' },
      { fileName: 'totent_09', active: true, label: '吼呦' },
      { fileName: 'totent_10', active: true, label: '喔？是嗎？' },
      { fileName: 'totent_11', active: true, label: '喝 喝伊' },
      { fileName: 'totent_12', active: true, label: '阿巴拉巴拉將將' },
      { fileName: 'totent_13', active: true, label: '呵呵' },
      { fileName: 'totent_14', active: true, label: '痾呵' },
      { fileName: 'totent_15', active: true, label: 'OMG' },
    ],
    kamitani: [
      { fileName: 'kamitani_01', active: true, label: '呀將屋將嗚嗚嗚' },
      { fileName: 'kamitani_02', active: true, label: '哼哼哈哈哈' },
      { fileName: 'kamitani_04', active: true, label: '哼呵哈' },
      { fileName: 'kamitani_05', active: true, label: '哈哈哈' },
      { fileName: 'kamitani_06', active: true, label: '喝哈哈哈' },
      { fileName: 'kamitani_07', active: true, label: '喝喝哈哈哈' },
      { fileName: 'kamitani_08', active: true, label: '哼哼喝哈哈' },
      { fileName: 'kamitani_10', active: true, label: '炸' },
      { fileName: 'kamitani_11', active: true, label: '哭哭' },
      { fileName: 'kamitani_12', active: true, label: '嘿嘿' },
      { fileName: 'kamitani_13', active: true, label: '雅沒囉' },
      { fileName: 'kamitani_14', active: true, label: '呵嘿嘿嘿' },
      { fileName: 'kamitani_15', active: true, label: '喝哼哼' },
      { fileName: 'kamitani_16', active: true, label: '嘿嘿嘿' },
    ],
  },
  localStorage,
  {
    mergeDefaults: (storageValue, defaults) => {
      Object.keys(defaults).forEach((key) => {
        if (!storageValue[key]) {
          storageValue[key] = defaults[key]
        }
        else {
          defaults[key].forEach((d) => {
            const exist = storageValue[key].findIndex((s) => {
              return s.fileName === d.fileName
            }) > -1
            if (!exist)
              storageValue[key].push(d)
          })
          storageValue[key] = storageValue[key]
            .filter((s) => {
              return defaults[key].findIndex((d) => {
                return d.fileName === s.fileName
              }) > -1
            })
            .sort((a, b) => {
              return a.fileName < b.fileName ? -1 : 1
            })
        }
      })
      return storageValue
    },
  },
  )
  const sounds = computed(() => soundDict.value[vtuberId.value] ?? [])

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

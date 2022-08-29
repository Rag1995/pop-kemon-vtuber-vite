<script setup lang="ts">
import { useAppStore } from '@/store'
import { storeToRefs } from 'pinia'
import BsNavItem from '@/components/utils/bootstrap/BsNavItem.vue'
import IonLanguage from '~icons/ion/language'

const emit = defineEmits<Emits>()
interface Emits {
  (e: 'update'): void
}

const store = useAppStore()
const { isDark } = storeToRefs(store)

const { locale } = useI18n()
const options = reactive([
  { text: '中文', value: 'zh-TW' },
  { text: '日本語', value: 'ja-JP' },
  { text: 'English', value: 'en-US' },
])
watch(locale, () => {
  emit('update')
})
</script>

<template>
  <div class="dropdown">
    <BsNavItem ref="toggler" data-bs-toggle="dropdown">
      <IonLanguage class="me-1" />{{ $t('lang') }}
    </BsNavItem>
    <ul
      class="dropdown-menu dropdown-menu-end m-0" :class="{
        'dropdown-menu-dark': isDark,
      }"
    >
      <template v-for="({ text, value }, idx) in options" :key="idx">
        <li>
          <a type="button" class="dropdown-item" :class="{ active: value === locale }" @click="locale = value">
            {{ text }}
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

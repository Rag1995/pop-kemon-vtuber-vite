<script setup lang="ts">
import { useAppStore, useVtubersStore } from '@/store'
import { storeToRefs } from 'pinia'
import BsOffcanvas from '@/components/utils/bootstrap/BsOffcanvas.vue'
import IconSound from '~icons/fluent/headphones-sound-wave-32-filled'

const appStore = useAppStore()
const { isDark } = storeToRefs(appStore)

const vtubersStore = useVtubersStore()
const { sounds } = storeToRefs(vtubersStore)

const offcanvas = ref<InstanceType<typeof BsOffcanvas>>()
</script>

<template>
  <button id="custom-sound-btn" type="button" class="btn btn-primary" @click.stop="offcanvas?.toggle()">
    <IconSound class="me-2" />{{ $t('customSoundPack') }}
  </button>

  <BsOffcanvas
    ref="offcanvas" placement="end" :class="{
      'text-bg-dark': isDark,
    }"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">
        {{ $t('customSoundPack') }}
      </h5>
      <button
        type="button" class="btn-close" :class="{
          'btn-close-white': isDark,
        }" @click="offcanvas?.hide()"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-for="item in sounds" :key="item.fileName" class="form-check">
        <input :id="`checkbox-${item.fileName}`" v-model="item.active" class="form-check-input" type="checkbox" />
        <label :for="`checkbox-${item.fileName}`" class="form-check-label">
          {{ item.label }}
        </label>
      </div>
    </div>
  </BsOffcanvas>
</template>

<style lang="postcss" scope>
#custom-sound-btn {
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
}
</style>
